<template>
    <div class="flex flex-col style-panel" v-loading="loading">
        <!-- <div>render entity '{{ id }}'</div> -->
        <div
            class="flex"
            :class="{
                'flex-row space-x-1': entity.etype === 'File',
                'flex-col': entity.etype !== 'File',
            }"
        >
            <div
                v-if="!loading && !error"
                :class="{
                    'w-1/2 lg:w-3/5': entity.etype === 'File',
                    'w-full': entity.etype !== 'File',
                }"
            >
                <render-entity-controls-component
                    :entity="entity"
                    :definition="definition"
                    @refresh="getEntity"
                />
                <!-- render entity id -->
                <render-entity-id-component
                    class="mb-2"
                    :entity="entity"
                    :data-service="dataService"
                    @get-entity="getEntity"
                    v-if="entity.eid !== './'"
                />

                <!-- render entity type -->
                <render-entity-type-component
                    class="mb-2"
                    :entity="entity"
                    v-if="entity.eid !== './'"
                />

                <!-- render entity name / label -->
                <render-entity-name-component
                    class="mb-2"
                    :entity="entity"
                    :input-definitions="definition.inputs"
                    :data-service="dataService"
                    @get-entity="getEntity"
                ></render-entity-name-component>

                <!-- render entity properties -->
                <render-entity-properties-component
                    v-if="definition && entity.forwardProperties"
                    :entity="entity"
                    :properties="entity.forwardProperties"
                    :inputs="definition.inputs"
                    @refresh="getEntity"
                />

                <!--render entities it links to  -->
                <render-entity-reverse-properties-component
                    class="mt-2"
                    v-if="entity.reverseProperties"
                    :properties="entity.reverseProperties"
                />
            </div>
            <div v-if="error" class="bg-red-200 p-2 text-center rounded">
                {{ error }}
            </div>

            <div
                class="pl-2 flex flex-col justify-items-start"
                :class="{
                    'w-1/2 lg:w-2/5': entity.etype === 'File',
                    'w-0 hidden': entity.etype !== 'File',
                }"
            >
                <render-entity-preview-component :entity="entity" v-loading="loading" />
            </div>
        </div>
    </div>
</template>

<script>
import { isUUID } from "validator";
import TextComponent from "./Text.component.vue";
import EntityIdComponent from "./EntityId.component.vue";
import RenderEntityIdComponent from "./RenderEntityId.component.vue";
import RenderEntityTypeComponent from "./RenderEntityType.component.vue";
import RenderEntityNameComponent from "./RenderEntityName.component.vue";
import RenderEntityPropertiesComponent from "./RenderEntityProperties.component.vue";
import RenderEntityReversePropertiesComponent from "./RenderEntityReverseProperties.component.vue";
import RenderEntityControlsComponent from "./RenderEntityControls.component.vue";
import RenderEntityPreviewComponent from "./RenderEntityPreview.component.vue";
import DataService from "./data.service.js";

export default {
    components: {
        RenderEntityIdComponent,
        RenderEntityTypeComponent,
        RenderEntityNameComponent,
        RenderEntityPreviewComponent,
        RenderEntityControlsComponent,
        RenderEntityPropertiesComponent,
        RenderEntityReversePropertiesComponent,
        EntityIdComponent,
        TextComponent,
    },
    props: {
        id: {
            type: String,
            required: true,
            validator: (val) => {
                return val === "RootDataset" || isUUID(val);
            },
        },
    },
    data() {
        return {
            dataService: undefined,
            loading: true,
            entity: {},
            definition: {},
            error: undefined,
        };
    },
    computed: {
        profile() {
            return this.$store.state.profile;
        },
    },
    watch: {
        id: function() {
            this.getEntity();
        },
        profile: function() {
            if (this.profile?.name) {
                this.getEntity();
            }
        },
    },
    mounted() {
        this.$socket.on("ENTITY_UPDATED_HANDLER", (response) => {
            this.getEntity();
        });
        this.dataService = new DataService();
        this.getEntity();
    },
    methods: {
        loadRootDataset() {
            this.$store.commit("setSelectedEntity", { id: "RootDataset" });
        },
        async getEntity() {
            this.loading = true;
            this.error = undefined;
            await new Promise((resolve) => setTimeout(resolve, 200));
            try {
                let { entity } = await this.dataService.getEntity({
                    id: this.id,
                });
                entity = { ...entity };

                this.definition = await this.addStaticValues({ id: this.id, type: entity.etype });

                let { properties } = await this.dataService.getEntityProperties({ id: entity.id });
                entity = {
                    ...entity,
                    ...properties,
                };

                if (this.definition?.classDefinitionType === "override") {
                    this.definition.inputs.forEach((input) => {
                        if (input.name === "name") return;
                        if (entity.forwardProperties[input.name]) {
                            entity.forwardProperties[input.name] =
                                entity.forwardProperties[input.name];
                        } else {
                            entity.forwardProperties[input.name] = [];
                        }
                    });
                }
                this.entity = { ...entity };
            } catch (error) {
                this.error = error.message;
            }
            this.loading = false;
        },
        async addStaticValues({ id, type }) {
            let { properties } = await this.dataService.getEntityProperties({ id });
            const { forwardProperties } = properties;

            let { definition } = await this.dataService.getEntityTypeDefinition({ type });
            if (definition?.classDefinitionType === "override") {
                for (let input of definition.inputs) {
                    if (input.type === "Value" && !forwardProperties?.[input.name]?.length) {
                        await this.dataService.createProperty({
                            srcEntityId: this.entity.id,
                            property: input.name,
                            value: input.value,
                        });
                    }
                }
            }
            return definition;
        },
    },
};
</script>

<style lang="scss" scoped>
.style-panel {
    min-height: 200px;
}
</style>
