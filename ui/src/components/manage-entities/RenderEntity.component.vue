<template>
    <div class="flex flex-col style-panel" v-loading="loading">
        <!-- <div>render entity '{{ id }}'</div> -->
        <div
            v-if="entity"
            class="flex"
            :class="{
                'flex-row space-x-1': entity.etype === 'File',
                'flex-col': entity.etype !== 'File',
            }"
        >
            <div :class="{ 'w-1/2': entity.etype === 'File', 'w-full': entity.etype !== 'File' }">
                <div class="flex flex-row space-x-4 mb-4 p-2 bg-blue-200">
                    <!-- navbar : controls -->
                    <div>
                        <el-button
                            @click="loadRootDataset"
                            size="small"
                            :disabled="entity && entity.eid === './'"
                        >
                            Load Root Dataset
                        </el-button>
                    </div>
                    <div>
                        <el-button @click="showAddPropertyDialog" size="small">
                            <i class="fas fa-code"></i> Add Property
                        </el-button>
                    </div>
                    <div class="flex flex-grow"></div>
                    <div
                        class="flex flex-row space-x-2 flex-grow"
                        v-if="entity && entity.eid === './'"
                    >
                        <el-input
                            v-model="crateName"
                            size="small"
                            placeholder="provide a name for the crate template"
                        />
                        <el-button @click="saveCrateAsTemplate" size="small" :disabled="!crateName">
                            <i class="fas fa-save"></i>
                            Save Crate as Template
                        </el-button>
                    </div>
                    <div class="flex flex-row" v-else>
                        <div class="flex flex-grow"></div>
                        <el-button @click="saveEntityAsTemplate" type="primary" size="small">
                            <i class="fas fa-save"></i>
                            Save Entity as Template
                        </el-button>
                        <el-button @click="deleteEntity" type="danger" size="small">
                            <i class="fas fa-trash"></i>
                            Delete Entity
                        </el-button>
                    </div>
                    <!-- /navbar: controls -->
                </div>
                <add-property-dialog-component
                    v-if="definition && definition.inputs && definition.inputs.length"
                    :visible="addPropertyDialogVisible"
                    :inputs="definition.inputs"
                    @close="addPropertyDialogVisible = false"
                    @create:property="createProperty"
                    @create-and-link:entity="createAndLinkEntity"
                    @link:entity="linkEntity"
                    @add:template="addTemplateAndLinkEntity"
                />
                <div v-if="entity && entity.id" class="border-t my-4 border-gray-200">
                    <!-- render entity name and id -->
                    <render-entity-header-component :entity="entity" class="my-1" />

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
            </div>

            <div
                class="pl-2 flex flex-col justify-items-start"
                :class="{ 'w-1/2': entity.etype === 'File', 'w-0': entity.etype !== 'File' }"
            >
                <onedrive-file-preview-component
                    v-if="entity.etype === 'File'"
                    class="w-full"
                    style="height: 500px;"
                    :path="resolveFilePath(entity.eid)"
                />
                <!-- <onedrive-file-preview-component
                style="width: 500px; height: 500px;"
                id="b!-4xxhXFx5kKSQwwAuO7Ek9AvCPQ0yFpGrxxa6HLjh4QGAuTlRxZhQ59yKADIuZ49#01K7QV4XMU2HLRHYXGTVAY4LGNFZOOIF6Z"
            /> -->
            </div>
        </div>
    </div>
</template>

<script>
import { isUUID } from "validator";
import TextComponent from "./Text.component.vue";
import EntityIdComponent from "./EntityId.component.vue";
import RenderEntityHeaderComponent from "./RenderEntityHeader.component.vue";
import RenderEntityPropertiesComponent from "./RenderEntityProperties.component.vue";
import RenderEntityReversePropertiesComponent from "./RenderEntityReverseProperties.component.vue";
import AddPropertyDialogComponent from "./AddPropertyDialog.component.vue";
import DataService from "./data.service.js";

export default {
    components: {
        RenderEntityHeaderComponent,
        RenderEntityPropertiesComponent,
        RenderEntityReversePropertiesComponent,
        AddPropertyDialogComponent,
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
            loading: false,
            dataService: undefined,
            entity: undefined,
            definition: undefined,
            error: undefined,
            addPropertyDialogVisible: false,
            crateName: undefined,
        };
    },
    watch: {
        id: function() {
            this.getEntity();
        },
    },
    mounted() {
        this.dataService = new DataService({
            $http: this.$http,
            $log: this.$log,
        });
        this.getEntity();
    },
    methods: {
        loadRootDataset() {
            this.$store.commit("setSelectedEntity", { id: "RootDataset" });
        },
        async getEntity() {
            this.definition = undefined;
            this.error = undefined;
            this.loading = true;
            try {
                let { entity } = await this.dataService.getEntity({
                    id: this.id,
                });
                this.entity = { ...entity };
                this.loading = false;

                let { properties } = await this.dataService.getEntityProperties({ id: entity.id });
                this.entity = {
                    ...this.entity,
                    forwardProperties: { ...properties.forwardProperties },
                    reverseProperties: { ...properties.reverseProperties },
                };

                let { definition } = await this.dataService.getEntityTypeDefinition({
                    type: entity.etype,
                });
                this.definition = definition;
            } catch (error) {
                this.error = error.message;
            }
            this.loading = false;
        },
        async showAddPropertyDialog() {
            this.addPropertyDialogVisible = true;
        },
        async createProperty({ property, value }) {
            await this.dataService.createProperty({
                srcEntityId: this.entity.id,
                property,
                value,
            });
            this.getEntity();
        },
        async createAndLinkEntity({ property, etype, entityName }) {
            let { entity } = await this.dataService.createEntity({
                name: entityName,
                etype,
            });
            this.linkEntity({ property, tgtEntityId: entity.id });
        },
        async linkEntity({ property, tgtEntityId }) {
            await this.dataService.associate({
                srcEntityId: this.entity.id,
                property,
                tgtEntityId,
            });
            this.getEntity();
        },
        async addTemplateAndLinkEntity({ property, templateId }) {
            let { entity } = await this.dataService.addTemplateToCollection({ templateId });
            this.linkEntity({ property, tgtEntityId: entity.id });
        },
        async deleteEntity() {
            await this.dataService.deleteEntity({ id: this.entity.id });
            this.$store.commit("setSelectedEntity", { id: "RootDataset" });
        },
        async saveEntityAsTemplate() {
            await this.dataService.saveEntityAsTemplate({ id: this.entity.id });
        },
        async saveCrateAsTemplate() {
            await this.dataService.saveCrateAsTemplate({ name: this.crateName });
        },
        resolveFilePath(id) {
            let filePath = `${this.$store.state.target.folder.path}/${id}`;
            return filePath;
        },
    },
};
</script>

<style lang="scss" scoped>
.style-panel {
    min-height: 200px;
}
</style>
