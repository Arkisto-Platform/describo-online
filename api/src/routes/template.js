import { BadRequestError, ForbiddenError } from "restify-errors";
import { insertTemplate, removeTemplate, getTemplate, getTemplates } from "../lib/template";
import { getLogger } from "../common";
const log = getLogger();
import { toBoolean } from "validator";

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
export async function getTemplatesRouteHandler(req, res, next) {
    let { eid, etype, name, fuzzy } = req.query;
    if (fuzzy) fuzzy = toBoolean(fuzzy);
    try {
        let templates = await getTemplates({ userId: req.user.id, eid, etype, name, fuzzy });
        res.send({ templates });
        next();
    } catch (error) {
        log.error(`getTemplatesRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}
export async function postTemplateRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    try {
        let template;
        if (req.body.entityId) {
            template = await insertTemplate({
                userId: req.user.id,
                entityId: req.body.entityId,
                collectionId,
            });
        } else if (req.body.name) {
            template = await insertTemplate({
                userId: req.user.id,
                collectionId,
                name: req.body.name,
            });
        } else {
            return next(new BadRequestError());
        }
        res.send({ template });
        next();
    } catch (error) {
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
