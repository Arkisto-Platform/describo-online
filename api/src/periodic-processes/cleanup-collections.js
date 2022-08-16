import models from "../models/index.js";
import { loadConfiguration, getLogger } from "../common/index.js";
import { sub } from "date-fns";
const log = getLogger();

export async function cleanupCollections() {
    let configuration = await loadConfiguration();
    let cleanupCollections = configuration.api?.cleanupCollections;
    if (!cleanupCollections) cleanupCollections = { days: 3 };
    let olderThan = sub(new Date(), cleanupCollections);
    for (let collection of await models.collection.findAll()) {
        if (collection.updatedAt < olderThan) {
            log.info(`Delete collection '${collection.id}' from DB`);
            await models.collection.destroy({ where: { id: collection.id } });
        }
    }
}
