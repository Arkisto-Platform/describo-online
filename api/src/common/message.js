const messagePathMap = {
    loadRouteHandler: "LOAD_ROUTE_HANDLER",
    entityUpdatedHandler: "ENTITY_UPDATED_HANDLER",
};
export class Message {
    constructor({ io = undefined, path = undefined, clientId = undefined }) {
        this.io = io;
        this.path = messagePathMap[path];
        this.clientId = clientId;
    }

    emit(msg) {
        if (this.io && this.path && this.clientId) {
            this.io.to(this.clientId).emit(this.path, msg);
        }
    }
}
