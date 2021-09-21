// API Docs: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/index.html
// Developer Guide: docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html
require("regenerator-runtime");
const {
    S3Client,
    HeadBucketCommand,
    HeadObjectCommand,
    ListBucketsCommand,
    GetObjectCommand,
    PutObjectCommand,
    ListObjectsV2Command,
    DeleteObjectsCommand,
} = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { createReadStream, createWriteStream, readdir, ensureDir, stat } = require("fs-extra");
// const AWS = require("aws-sdk");
const path = require("path");
const MB = 1024 * 1024;

// https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html
const maxFileNameLength = 1024;

export class S3 {
    constructor({ accessKeyId, secretAccessKey, region, endpoint, forcePathStyle = false }) {
        let configuration = {
            forcePathStyle,
        };

        if (endpoint) configuration.endpoint = endpoint;
        if (accessKeyId && secretAccessKey) {
            configuration.credentials = {
                accessKeyId,
                secretAccessKey,
            };
        }
        if (region) configuration.region = region;
        this.client = new S3Client(configuration);
    }

    async listBuckets() {
        const command = new ListBucketsCommand({});
        return { buckets: (await this.client.send(command)).Buckets };
    }

    async bucketExists({ bucket }) {
        bucket = bucket ? bucket : this.bucket;
        const command = new HeadBucketCommand({ Bucket: bucket });
        return (await this.client.send(command)).$metadata.httpStatusCode === 200;
    }
}

export class Bucket {
    constructor({
        bucket,
        accessKeyId,
        secretAccessKey,
        region,
        endpoint,
        forcePathStyle = false,
    }) {
        let configuration = {
            forcePathStyle,
            s3ForcePathStyle: forcePathStyle,
        };

        if (!bucket) {
            throw new Error(`You must pass in a bucket name to operate on`);
        }
        this.bucket = bucket;
        if (endpoint) configuration.endpoint = endpoint;
        if (accessKeyId && secretAccessKey) {
            configuration.credentials = {
                accessKeyId,
                secretAccessKey,
            };
        }
        if (region) configuration.region = region;
        this.client = new S3Client(configuration);
        // https://github.com/aws/aws-sdk-js-v3/issues/1814#issuecomment-765624523
        this.client.middlewareStack.add(
            (next, _context) => (args) => {
                if (
                    args.request &&
                    args.request.body &&
                    args.request.body.includes("CompletedMultipartUpload")
                ) {
                    args.request.body = args.request.body.replace(
                        /CompletedMultipartUpload/g,
                        "CompleteMultipartUpload"
                    );
                }
                return next(args);
            },
            {
                step: "build",
                priority: "high",
            }
        );
        this.configuration = configuration;
    }

    async stat({ path }) {
        const params = { Bucket: this.bucket, Key: path };
        const command = new HeadObjectCommand(params);
        try {
            return await this.client.send(command);
        } catch (error) {
            return false;
        }
    }

    async pathExists({ path }) {
        return (await this.stat({ path }))?.$metadata?.httpStatusCode === 200 ? true : false;
    }

    async upload({ localPath, content, json, target }) {
        // check that key length is within the limits
        if (target.length > maxFileNameLength) {
            console.error(
                `The target name '${target}' exceeds the max name length allowed by S3. This file can't be uploaded with that name.`
            );
            return;
        }
        let metadata = {};

        const uploadParams = {
            Bucket: this.bucket,
            Key: target,
            Metadata: metadata,
        };

        if (localPath) {
            // upload a local file
            const fileStream = createReadStream(localPath);
            fileStream.on("error", function (err) {
                console.log("File Error", err);
            });
            uploadParams.Body = fileStream;
        } else if (content) {
            // create a file with this content
            uploadParams.Body = Buffer.from(content);
        } else if (json) {
            // create a file with this json data
            uploadParams.Body = Buffer.from(JSON.stringify(json));
        } else {
            throw new Error(
                `Define 'localPath' || 'content' || 'json'. Precedence is localPath, content, json if you specify more than one.`
            );
        }

        let chunkSize = 5 * MB;
        if (localPath) {
            let fileStat = await stat(localPath);
            const desiredChunkSize = await Math.ceil(fileStat.size / 10000);
            // at least 5MB per request, at most 10k requests
            const minChunkSize = Math.max(5 * MB, Math.ceil(fileStat.size / 10000));
            chunkSize = Math.max(desiredChunkSize, minChunkSize);
        }

        let uploader = V3MultipartUpload.bind(this);
        let response = await uploader({
            params: uploadParams,
            partSize: chunkSize,
        });
        return response;

        async function V3SinglePartUpload({ params }) {
            // Straight up V3 upload - not multipart
            const command = new PutObjectCommand(uploadParams);
            let response = await this.client.send(command);
            return response.$metadata;
        }

        async function V3MultipartUpload({ params, partSize }) {
            // V3 multipart uploader - doesn't work
            //  https://github.com/aws/aws-sdk-js-v3/issues/1814
            const uploader = new Upload({
                client: this.client,
                partSize,
                queueSize: 4, // optional concurrency configuration
                leavePartsOnError: false, // optional manually handle dropped parts
                params,
            });

            // uploader.on("httpUploadProgress", (progress) => {
            //     console.log(progress);
            // });

            const response = await uploader.done();
            return response.$metadata;
        }

        async function V2MultipartUpload({ params, partSize }) {
            // V2 multipart uploader
            AWS.config = this.configuration;
            const uploader = new AWS.S3.ManagedUpload({
                partSize,
                params,
            });
            // uploader.on("httpUploadProgress", (progress) => {
            //   console.log(progress);
            // });

            let response = await uploader.promise();
            return {
                httpStatusCode: 200,
            };
        }
    }

    async download({ target, localPath }) {
        const downloadParams = { Bucket: this.bucket, Key: target };
        const command = new GetObjectCommand(downloadParams);
        let response = await this.client.send(command);

        let data;
        if (!localPath) {
            const chunks = [];
            for await (let chunk of response.Body) {
                chunks.push(chunk);
            }
            data = Buffer.concat(chunks).toString();
            return data;
        } else {
            const output = path.join(localPath, target);
            await ensureDir(path.dirname(output));
            await new Promise(async (resolve, reject) => {
                const stream = createWriteStream(output);

                stream.on("close", resolve);
                stream.on("error", (error) => {
                    reject(error);
                });
                response.Body.pipe(stream);
            });
            return response.$metadata;
        }
    }

    async readJSON({ target }) {
        let data = await this.download({ target, verify: false });
        return JSON.parse(data);
    }

    async listObjects({
        prefix = undefined,
        startAfter = undefined,
        maxKeys = undefined,
        continuationToken = undefined,
    }) {
        const params = {
            Bucket: this.bucket,
        };
        if (prefix) params.Prefix = prefix;
        if (startAfter) params.StartAfter = startAfter;
        if (maxKeys) params.MaxKeys = maxKeys;
        if (continuationToken) params.ContinuationToken = continuationToken;
        const command = new ListObjectsV2Command(params);
        return await this.client.send(command);
    }

    async removeObjects({ keys = [], prefix = undefined }) {
        if (prefix) {
            let objects = (await this.listObjects({ prefix })).Contents;
            keys = objects.map((entry) => entry.Key);
        }
        let objs = keys.map((k) => ({ Key: k }));
        const command = new DeleteObjectsCommand({
            Bucket: this.bucket,
            Delete: { Objects: objs },
        });
        return (await this.client.send(command)).$metadata;
    }

    async syncLocalPathToBucket({ localPath }) {
        let paths = [];
        await walk({ root: localPath, folder: localPath });

        for (let path of paths) {
            if (path.type !== "directory") {
                await this.upload({
                    localPath: path.source,
                    target: path.target,
                });
            }
        }
        async function walk({ root, folder }) {
            let entries = await readdir(folder, { withFileTypes: true });
            let source, target;
            for (let entry of entries) {
                source = path.join(folder, entry.name);
                target = source.replace(path.join(path.dirname(root), "/"), "");
                paths.push({
                    source,
                    target,
                    type: entry.isDirectory() ? "directory" : "file",
                });
                if (entry.isDirectory()) {
                    await walk({ folder: path.join(folder, entry.name), root });
                }
            }
        }
    }

    async getPresignedUrl({ target, expiresIn = 3600 }) {
        const downloadParams = { Bucket: this.bucket, Key: target };
        const command = new GetObjectCommand(downloadParams);
        return await getSignedUrl(this.client, command, { expiresIn });
    }
}
