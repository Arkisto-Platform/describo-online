import { Crate } from "../lib/crate.js";
import { getLogger } from "./logger.js";
const log = getLogger();

export async function saveCrate({ session, user, collectionId, actions = [] }) {
    try {
        const crateMgr = new Crate({ profile: session.data.profile });
        let hrstart = process.hrtime();
        let crate, updatedAt;
        // ! At this stage updateCrate is deprecated as it can't handle
        // !  entity id patching.
        // if (actions?.length) {
        //     ({ crate, updatedAt } = await crateMgr.updateCrate({
        //         localCrateFile: session?.data?.current?.local?.file,
        //         collectionId,
        //         actions,
        //     }));
        // } else {
        //     ({ crate, updatedAt } = await crateMgr.exportCollectionAsROCrate({
        //         collectionId,
        //     }));
        // }
        ({ crate, updatedAt } = await crateMgr.exportCollectionAsROCrate({
            collectionId,
        }));
        // console.log(JSON.stringify(crate, null, 2));
        let hrend = process.hrtime(hrstart);
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
