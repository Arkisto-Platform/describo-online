const models = require("../models");

export async function getUser({ id, email }) {
    let where = {};
    if (id) where.id = id;
    if (email) where.email = email;
    return (await models.user.findOne({ where })).get();
}

export async function createUser({ email, name }) {
    return (
        await models.user.findOrCreate({
            where: { email },
            defaults: { email, name },
        })
    )
        .shift()
        .get();
}

export async function getUserSession({ sessionId, oktaToken, email }) {
    try {
        if (sessionId) {
            let session = await models.session.findOne({
                where: { id: sessionId },
                attributes: ["id", "data"],
                include: [
                    {
                        model: models.user,
                        attributes: ["id", "name", "email"],
                    },
                ],
            });
            if (session) {
                let user = session.user.get({ plain: true });
                session = session.get({ plain: true });
                delete session.user;
                return { user, session };
            }
        } else if (oktaToken) {
            let session = await models.session.findOne({
                where: { oktaToken },
                attributes: ["id", "data", "oktaExpiry"],
                include: [
                    {
                        model: models.user,
                        attributes: ["id", "name", "email"],
                    },
                ],
            });
            if (session) {
                if (new Date().valueOf() / 1000 > session.oktaExpiry) {
                    // okta session has expired!
                    await models.session.destroy({ where: { id: session.id } });
                    throw new Error("Session expired");
                }
                let user = session.user.get({ plain: true });
                session = session.get({ plain: true });
                delete session.user;
                return { user, session };
            }
        } else if (email) {
            let user = await models.user.findOne({
                where: { email },
                attributes: ["id", "name", "email"],
                include: [
                    { model: models.session, attributes: ["id", "data"] },
                ],
            });
            if (user) {
                user = user.get({ plain: true });
                let session = user.session
                    ? user.session
                    : { id: null, data: null };
                delete user.session;
                return { user, session };
            }
        }
    } catch (error) {
        return { session: null, user: null };
    }
}

export async function createUserSession({ email, data }) {
    // TODO set session lifetime
    let user = await models.user.findOne({
        where: { email },
        include: [{ model: models.session }],
    });
    if (user) {
        if (user.session) return user.session.get();

        await models.session.create({ userId: user.id, data });
    }
    user = await models.user.findOne({
        where: { email },
        include: [{ model: models.session }],
    });
    return user.session.get();
}

export async function updateUserSession({
    sessionId,
    data,
    oktaToken,
    oktaExpiry,
}) {
    let session = await models.session.findOne({ where: { id: sessionId } });
    let update = {};
    if (data) update.data = { ...session.data, ...data };
    if (oktaToken) {
        update.oktaToken = oktaToken;
        update.oktaExpiry = oktaExpiry;
    }

    return (await session.update(update)).get();
}

export async function destroyUserSession({ email }) {
    let user = await models.user.findOne({
        where: { email },
        include: [{ model: models.session }],
    });
    return await models.session.destroy({ where: { id: user.session.id } });
}
