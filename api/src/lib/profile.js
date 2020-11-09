const models = require("../models");

module.exports = {
    getProfile,
    createProfile,
    updateProfile,
};

async function getProfile({ profileId }) {
    return (
        await models.profile.findOne({
            where: { id: profileId },
        })
    ).get();
}

async function createProfile({ name, profile, collectionId }) {
    return (
        await models.profile.create({
            name,
            profile,
            collectionId,
        })
    ).get();
}

async function updateProfile({ profileId, name, profile }) {
    let update = {};
    if (name) update.name = name;
    if (profile) update.profile = profile;
    await models.profile.update(update, {
        where: { id: profileId },
    });
    return (await models.profile.findOne({ where: { id: profileId } })).get();
}
