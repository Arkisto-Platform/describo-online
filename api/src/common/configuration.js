import { readJSON } from "fs-extra";
import { isEmpty } from "lodash";

export const privateFields = ["clientSecret", "awsAccessKeyId", "awsSecretAccessKey"];

export async function loadConfiguration() {
    let configuration =
        process.env.NODE_ENV === "development"
            ? "/srv/configuration/development-configuration.json"
            : "/srv/configuration.json";
    configuration = await readJSON(configuration);
    return configuration;
}

export function filterPrivateInformation({ configuration, session }) {
    if (configuration) {
        for (let service of Object.keys(configuration.api.services)) {
            for (let instance of configuration.api.services[service]) {
                for (let privateField of privateFields) {
                    delete instance[privateField];
                }
            }
        }
        return configuration;
    } else if (session && !isEmpty(session) && session.service) {
        for (let service of Object.keys(session.service)) {
            for (let privateField of privateFields) {
                delete session.service[service][privateField];
            }
        }
        delete session.current;
        return session;
    }
}
