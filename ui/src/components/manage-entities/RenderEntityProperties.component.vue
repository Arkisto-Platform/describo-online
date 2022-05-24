<template>
    <div class="flex flex-col space-y-2 divide-y divide-grey-200">
        <div
            v-for="(values, name) of properties"
            :key="generateKey('forward', name)"
            class="flex flex-row pt-2"
            :class="{
                'bg-green-200 my-1 p-1 rounded': update.success === name,
                'bg-red-200 my-1 p-1 rounded': update.erro === name,
            }"
        >
            <render-entity-property-data-component
                :name="name"
                :values="values"
                :definition="definition(name)"
                @create:property="createProperty"
                @create:entity="createEntity"
                @create:object="createObject"
                @link:entity="linkEntity"
                @add:template="addTemplate"
                @save:property="saveProperty"
                @delete:property="deleteProperty"
            />
        </div>
    </div>
</template>

<script>
import RenderEntityPropertyDataComponent from "./RenderEntityPropertyData.component.vue";
import DataService from "./data.service.js";
import { isString, isNumber, isPlainObject } from "lodash";

export default {
    components: {
        RenderEntityPropertyDataComponent,
    },
    props: {
        entity: {
            type: Object,
            required: true,
        },
        properties: {
            type: Object,
            required: true,
        },
        inputs: {
            type: Array,
        },
    },
    data() {
        return {
            showHelp: false,
            update: {
                error: false,
                success: false,
            },
        };
    },
    watch: {
	properties: function () {
            this.loadTgtEntityData();
        },
    },
    mounted() {
        this.dataService = new DataService();
        this.loadTgtEntityData();
    },
    methods: {
        generateKey(direction, name) {
            return `${direction}-${name}`;
        },
        definition(name) {
            return this.inputs ? this.inputs.filter((i) => i?.name === name)[0] : [];
        },
        async loadTgtEntityData() {
            for (let property of Object.keys(this.properties)) {
                for (let [idx, entry] of this.properties[property].entries()) {
                    if (entry.tgtEntityId) {
                        let response = await this.$http.get({
                            route: `/entity/${entry.tgtEntityId}`,
                        });
                        if (response.status !== 200) {
                            //TODO handle error
                        }
                        let { entity } = await response.json();
                        this.properties[property][idx] = {
                            ...this.properties[property][idx],
                            tgtEntityName: entity.name,
                            tgtEntityType: entity.etype,
                            tgtEntityEid: entity.eid,
                        };
                        this.properties[property] = [...this.properties[property]];
                    }
                }
            }
        },
        async saveProperty(data) {
            try {
                await this.dataService.updateProperty(data);
                this.update.success = data.property;
                setTimeout(() => {
                    this.update.success = false;
                }, 1500);
            } catch (error) {
                this.update.error = data.property;
                setTimeout(() => {
                    this.update.error = false;
                }, 1500);
            }
        },
        async createProperty({ property, value }) {
            if (isString(value)) {
                await this.dataService.createProperty({
                    srcEntityId: this.entity.id,
                    property,
                    value,
                });
                this.$emit("refresh");
            } else if (isPlainObject(value)) {
                await this.createEntity({
                    name: "",
                    etype: "URL",
                    eid: value["@id"],
                });
            }
        },
        async deleteProperty({ entityId, propertyId }) {
            await this.dataService.deleteProperty({
                entityId,
                propertyId,
            });
            this.$emit("refresh");
        },
        async createEntity({ property, entityName, etype, eid }) {
            let entity = {
                eid,
                etype,
                name: entityName,
            };
            ({ entity } = await this.dataService.createEntity(entity));
            await this.dataService.associate({
                srcEntityId: this.entity.id,
                property,
                tgtEntityId: entity.id,
            });
            this.$emit("refresh");
        },
        async createObject({ property, ...data }) {
            let { entity } = await this.dataService.createEntity({
                eid: data["@id"],
                etype: data["@type"],
                name: data.name,
            });
            await this.dataService.associate({
                srcEntityId: this.entity.id,
                property,
                tgtEntityId: entity.id,
            });

            let props = Object.keys(data).filter((k) => !["@id", "@type", "name"].includes(k));
            for (let prop of props) {
		if (isString(data[prop]) || isNumber(data[prop])) {
                    await this.dataService.createProperty({
                        srcEntityId: entity.id,
                        property: prop,
                        value: data[prop],
                    });
                }
            }
            this.$emit("refresh");
        },
        async linkEntity({ property, tgtEntityId }) {
            await this.dataService.associate({
                srcEntityId: this.entity.id,
                property,
                tgtEntityId,
            });
            this.$emit("refresh");
        },
        async addTemplate({ property, templateId }) {
            let { entity } = await this.dataService.addTemplate({ templateId });
            this.linkEntity({ property, tgtEntityId: entity.id });
        },
    },
};
</script>
