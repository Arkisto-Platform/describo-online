const models = require("../models");
import { defaultSessionLifetime } from "./constants";

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

export async function getUserSession({ sessionId, token, email }) {
    let user, session, expiresAt;
    try {
        if (sessionId) {
            session = await models.session.findOne({
                where: { id: sessionId },
                attributes: ["id", "data", "creator", "createdAt"],
                include: [
                    {
                        model: models.user,
                        attributes: ["id", "name", "email"],
                    },
                ],
            });
            if (session) {
                expiresAt = session.createdAt / 1000 + defaultSessionLifetime;
                user = session.user.get({ plain: true });
                session = session.get({ plain: true });
                delete session.user;
            }
        } else if (token) {
            session = await models.session.findOne({
                where: { token },
                attributes: ["id", "data", "creator", "expiry"],
                include: [
                    {
                        model: models.user,
                        attributes: ["id", "name", "email"],
                    },
                ],
            });
            if (session) {
                expiresAt = session.expiry;
                user = session.user.get({ plain: true });
                session = session.get({ plain: true });
                delete session.user;
            }
        } else if (email) {
            user = await models.user.findOne({
                where: { email },
                attributes: ["id", "name", "email"],
                include: [
                    {
                        model: models.session,
                        attributes: ["id", "data", "creator", "createdAt"],
                    },
                ],
            });
            if (user) {
                expiresAt = user.session.createdAt / 1000 + defaultSessionLifetime;
                user = user.get({ plain: true });
                session = user.session ? user.session : { id: null, data: null };
                delete user.session;
            }
        }

        if (session && user) {
            return { user, session, expiresAt };
        } else {
            return { session: null, user: null };
        }
    } catch (error) {
        return { session: null, user: null };
    }
}

export async function createUserSession({ email, data, creator = "", token, expiry }) {
    let user = await models.user.findOne({
        where: { email },
        include: [{ model: models.session }],
    });
    let session;

    data = {
        configuration: {
            allowProfileChange: true,
            allowServiceChange: true,
        },
        ...data,
    };
    if (user?.session) {
        session = user.session;
        session.update({ data, token, expiry, creator });
    } else {
        session = await models.session.create({
            userId: user.id,
            data,
            token,
            expiry,
            creator,
        });
    }
    return session;
}

export async function updateUserSession({ sessionId, data, token, expiry }) {
    let session = await models.session.findOne({ where: { id: sessionId } });
    let update = {};
    if (data) update.data = { ...session.data, ...data };
    if (token) {
        update.token = token;
        update.expiry = expiry;
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
