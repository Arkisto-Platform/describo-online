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

export async function getUserSession({ sessionId, email }) {
    try {
        if (sessionId) {
            let session = await models.session.findOne({
                where: { id: sessionId },
                include: [
                    {
                        model: models.user,
                        raw: true,
                        attributes: ["name", "email"],
                    },
                ],
            });
            if (session) {
                return {
                    user: session.user.get(),
                    session: {
                        id: session.id,
                        data: session.data,
                    },
                };
            }
        } else if (email) {
            let user = await models.user.findOne({
                where: { email },
                include: [{ model: models.session }],
            });
            if (user) {
                return {
                    user: user.get(),
                    session: {
                        id: user.session ? user.session.id : null,
                        data: user.session ? user.session.data : null,
                    },
                };
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

export async function destroyUserSession({ email }) {
    let user = await models.user.findOne({
        where: { email },
        include: [{ model: models.session }],
    });
    return await models.session.destroy({ where: { id: user.session.id } });
}
