import path from "path";
import { readJSON } from "fs-extra";

export async function loadConfiguration() {
    const configuration =
        process.env.NODE_ENV === "development"
            ? path.resolve(
                  path.join(__dirname, "..", "..", "configuration.json")
              )
            : "/srv/configuration.json";
    return await readJSON(configuration);
}
