import { readJSON } from "fs-extra";

const privateFields = ["clientSecret", "awsAccessKeyId", "awsSecretAccessKey"];

export async function loadConfiguration() {
    let configuration =
        process.env.NODE_ENV === "development"
            ? "/srv/configuration/development-configuration.json"
            : "/srv/configuration.json";
    configuration = await readJSON(configuration);
    return configuration;
}
