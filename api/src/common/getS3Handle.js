import models from "../models";
import { loadConfiguration } from ".";
import { S3, Bucket } from "../lib/s3";

export async function getS3Handle({ sessionId, publicUrl = false }) {
    let session = await models.session.findOne({
        where: { id: sessionId },
    });
    const config = session.data.service.s3;

    let params = {
        bucket: config.bucket,
        accessKeyId: config.awsAccessKeyId,
        secretAccessKey: config.awsSecretAccessKey,
        region: config.region ? config.region : "us-east-1",
    };
    if (["Minio"].includes(config.provider)) {
        params.endpoint = !publicUrl ? config.url : config.publicUrl;
        params.forcePathStyle = true;
    }
    let bucket = new Bucket(params);
    let s3 = new S3(params);
    return { s3, bucket, config };
}
