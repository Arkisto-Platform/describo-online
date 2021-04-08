import path from "path";
import fetch from "node-fetch";
import { readJSON, writeJSON } from "fs-extra";
import { cloneDeep } from "lodash";
import { Crate } from "../lib/crate";
const api = "http://localhost:8080";
import { getLogger } from "../common/logger";
const log = getLogger();
import Chance from "chance";
const chance = new Chance();

export async function loadConfiguration() {
    let configuration =
        process.env.NODE_ENV === "development"
            ? "/srv/configuration/development-configuration.json"
            : "/srv/configuration.json";
    configuration = await readJSON(configuration);

    if (configuration.ui.services.okta)
        configuration.ui.services.okta.issuer = `${configuration.ui.services.okta.domain}/oauth2/default`;
    return configuration;
}

export async function createSessionForTest() {
    const origConfig = await loadConfiguration();

    let testConfig = cloneDeep(origConfig);
    testConfig.api.applications = [{ name: "test", secret: "xxx" }];
    await writeJSON(path.join("../../configuration.json"), testConfig);
    let user = {
        email: chance.email(),
        name: chance.name(),
    };

    let response = await fetch(`${api}/session/application`, {
        method: "POST",
        headers: {
            Authorization: "Bearer xxx",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    response = await response.json();
    await writeJSON(path.join("../../configuration.json"), origConfig);
    return { sessionId: response.sessionId, user };
}

export async function saveCrate({ session, user, collectionId, actions }) {
    try {
        const crateMgr = new Crate();
        let hrstart = process.hrtime();
        let crate;
        if (actions?.length) {
            crate = await crateMgr.updateCrate({
                localCrateFile: session?.data?.current?.local?.file,
                collectionId,
                actions,
            });
        } else {
            crate = await crateMgr.exportCollectionAsROCrate({
                collectionId,
                sync: true,
            });
        }
        let hrend = process.hrtime(hrstart);
        // log.debug(JSON.stringify(crate, null, 2));
        await crateMgr.saveCrate({
            session,
            user,
            resource: session?.data?.current?.remote?.resource,
            parent: session?.data?.current?.remote?.parent,
            localFile: session?.data?.current?.local?.file,
            crate,
        });

        log.debug(`Crate update time: ${hrend[0]}s, ${hrend[1]}ns`);
    } catch (error) {
        log.error(`saveCrate: error saving crate ${error.message}`);
        throw new Error("Error saving the crate back to the target");
    }
}
