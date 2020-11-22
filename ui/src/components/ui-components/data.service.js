import { groupBy } from "lodash";

export default class DataService {
    constructor({ $http, $log }) {
        this.$http = $http;
        this.$log = $log;
    }
    async getEntity({ id }) {
        let response = await this.$http.get({
            route: `/entity/${id}`,
        });
        if (response.status !== 200) {
            return this.handleError({ response });
        } else {
            let { entity } = await response.json();
            let { definition } = await this.getEntityTypeDefinition({
                type: entity.etype,
            });

            const forwardProperties = entity.properties.filter(
                (p) => p.direction !== "R"
            );
            const reverseProperties = entity.properties.filter(
                (p) => p.direction === "R"
            );
            entity.forwardProperties = groupBy(forwardProperties, "name");
            entity.reverseProperties = groupBy(reverseProperties, "name");
            delete entity.properties;
            return { entity, definition };
        }
    }

    async getEntityTypeDefinition({ type }) {
        let response = await this.$http.get({
            route: `/definition/${type}`,
        });
        if (response.status !== 200) {
            return this.handleError({ response });
        } else {
            response = await response.json();
            return {
                definition: response.definition ? response.definition : {},
            };
        }
    }
    async createEntity({ name, description }) {
        console.log("create new entity", name, description);
    }
    async deleteEntity({ id }) {
        console.log("delete entity", id);
    }
    async updateEntityProperty({ id, property, value }) {
        this.$log.debug("update entity property", id, property, value);
        let response = await this.$http.put({
            route: `/entity/${id}`,
            body: {
                [property]: value,
            },
        });
        if (response.status !== 200) {
            return this.handleError({ response });
        } else {
            return await response.json();
        }
    }
    async createProperty({ srcEntityId, name, value, tgtEntityId }) {
        console.log("create property", srcEntityId, name, value, tgtEntityId);
    }
    async updateProperty({ id, property, value }) {
        console.log("update property", id, property, value);
        // await this.$http.put({ route: `/entity/${id}`, body: { name } });
    }
    async deleteProperty({ id }) {
        console.log("delete property", id);
    }

    async handleError({ response }) {
        let error = await response.json();
        // this.$log.error(response.status, error.message);
        throw new Error(error.message);
    }
}
