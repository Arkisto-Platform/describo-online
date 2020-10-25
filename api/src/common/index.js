import path from "path";
import { readJSON } from "fs-extra";

export async function loadConfiguration() {
    let configuration =
        process.env.NODE_ENV === "development"
            ? path.resolve(
                  path.join(__dirname, "..", "..", "configuration.json")
              )
            : "/srv/configuration.json";
    configuration = await readJSON(configuration);
    configuration.ui.services.okta.issuer = `${configuration.ui.services.okta.domain}/oauth2/default`;
    return configuration;
}
