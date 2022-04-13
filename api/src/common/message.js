const messagePathMap = {
    loadRouteHandler: "LOAD_ROUTE_HANDLER",
    entityUpdatedHandler: "ENTITY_UPDATED_HANDLER",
};
export class Message {
    constructor({ io, path }) {
        this.path = messagePathMap[path];
        this.io = io;
    }

    emit(msg) {
        this.io.emit(this.path, msg);
    }
}
