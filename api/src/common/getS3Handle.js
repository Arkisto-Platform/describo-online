import models from "../models/index.js";
import { S3, Bucket } from "../lib/s3.js";

export async function getS3Handle({ sessionId, bucket = undefined, publicUrl = false }) {
    let session = await models.session.findOne({
        where: { id: sessionId },
    });
    const config = session.data.service.s3;

    let params = {
        bucket: bucket ? bucket : config.bucket,
        accessKeyId: config.awsAccessKeyId,
        secretAccessKey: config.awsSecretAccessKey,
        region: config.region ? config.region : "us-east-1",
    };
    if (["Minio"].includes(config.provider)) {
        params.endpoint = !publicUrl ? config.url : config.publicUrl;
        params.forcePathStyle = true;
    }
    bucket = new Bucket(params);
    let s3 = new S3(params);
    return { s3, bucket, config };
}
