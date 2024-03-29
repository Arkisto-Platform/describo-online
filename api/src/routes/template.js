import restifyErrorsPkg from "restify-errors";
const { BadRequestError, ForbiddenError } = restifyErrorsPkg;
import { loadConfiguration, route, getLogger } from "../common/index.js";

import {
    insertTemplate,
    removeTemplate,
    getTemplate,
    getTemplates,
    addTemplate,
    replaceCrateWithTemplate,
} from "../lib/template.js";
import { saveCrate } from "../common/save-crate.js";
const log = getLogger();

export async function setupRoutes({ server }) {
    server.get("/template", route(getTemplatesRouteHandler));
    server.get("/template/:templateId", route(getTemplateRouteHandler));
    server.post("/template", route(postTemplateRouteHandler));
    server.del("/template/:templateId", route(delTemplateRouteHandler));
    server.post("/crate/add-template", route(postAddTemplateRouteHandler));
    server.post(
        "/crate/replace-crate-with-template",
        route(postReplaceCrateWithTemplateRouteHandler)
    );
}

export async function getTemplatesRouteHandler(req, res, next) {
    let { filter, page, limit, orderBy, orderDirection, type, fuzzy } = req.query;
    filter = filter === "undefined" ? undefined : filter;
    type = type === "undefined" ? undefined : type;
    page = page === "undefined" ? undefined : page;
    limit = limit === "undefined" ? undefined : limit;
    orderBy = orderBy === "undefined" ? undefined : orderBy;
    if (orderBy) orderBy = orderBy.split(",");
    orderDirection = orderDirection === "undefined" ? undefined : orderDirection;
    try {
        let { templates, total } = await getTemplates({
            userId: req.user.id,
            filter,
            type,
            page,
            limit,
            orderBy,
            orderDirection,
        });
        res.send({ templates, total });
        next();
    } catch (error) {
        log.error(`getTemplatesRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}
export async function getTemplateRouteHandler(req, res, next) {
    if (!req.params.templateId) {
        return next(new BadRequestError(`You must provide a templateId to lookup`));
    }

    try {
        let template = await getTemplate({
            templateId: req.params.templateId,
            userId: req.user.id,
        });
        res.send({ template });
        next();
    } catch (error) {
        log.error(`getTemplateRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}
export async function postTemplateRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError());
    }
    try {
        let template;
        if (req.body.entityId) {
            template = await insertTemplate({
                userId: req.user.id,
                entityId: req.body.entityId,
                collectionId,
                profile: req.session.data.profile,
            });
        } else if (req.body.name) {
            template = await insertTemplate({
                userId: req.user.id,
                collectionId,
                name: req.body.name,
                profile: req.session.data.profile,
            });
        } else {
            return next(new BadRequestError());
        }
        res.send({ template });
        next();
    } catch (error) {
        console.log(error);
        log.error(`postTemplateRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}
export async function delTemplateRouteHandler(req, res, next) {
    try {
        await removeTemplate({
            userId: req.user.id,
            templateId: req.params.templateId,
        });
        res.send({});
        next();
    } catch (error) {
        log.error(`delTemplateRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}
export async function postAddTemplateRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError());
    }
    try {
        let entity;
        let { templateId } = req.body;
        if (templateId) {
            ({ entity } = await addTemplate({
                userId: req.user.id,
                templateId,
                collectionId,
                profile: req.session.data.profile,
            }));
            if (!req.headers["x-testing"]) {
                await saveCrate({
                    session: req.session,
                    user: req.user,
                    collectionId,
                    actions: [{ name: "insert", entity }],
                });
            }
        } else {
            return next(new BadRequestError());
        }
        res.send({ entity });
        next();
    } catch (error) {
        log.error(`postAddTemplateRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}
export async function postReplaceCrateWithTemplateRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError());
    }
    try {
        let template;
        if (req.body.templateId) {
            template = await replaceCrateWithTemplate({
                userId: req.user.id,
                templateId: req.body.templateId,
                collectionId,
            });
            if (!req.headers["x-testing"]) {
                await saveCrate({
                    session: req.session,
                    user: req.user,
                    collectionId,
                });
            }
        } else {
            return next(new BadRequestError());
        }
        res.send({ template });
        next();
    } catch (error) {
        log.error(`postAddTemplateRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}
