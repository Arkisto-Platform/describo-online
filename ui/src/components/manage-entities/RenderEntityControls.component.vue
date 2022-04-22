<template>
    <div>
        <div class="flex flex-row space-x-2 mb-4 p-2 bg-blue-200">
            <!-- navbar : controls -->
            <div>
                <el-button
                    @click="loadRootDataset"
                    size="mini"
                    :disabled="entity && entity.eid === './'"
                >
                    Load Root Dataset
                </el-button>
            </div>
            <div v-if="definition.classDefinitionType !== 'override'">
                <el-button @click="toggleAddPropertyDialog" size="mini">
                    <i class="fas fa-code"></i> Add Property
                </el-button>
            </div>
            <div class="flex flex-grow"></div>
            <div class="flex flex-row space-x-1">
                <div>
                    <el-button
                        @click="toggleSaveCrateDialog"
                        type="primary"
                        size="mini"
                        v-if="isRootDataset"
                    >
                        <div class="inline-block">
                            <i class="fas fa-save"></i>
                        </div>
                        <div
                            class="inline-block ml-1 xl:inline-block xl:ml-1"
                            :class="{ hidden: entity.etype === 'File' }"
                        >
                            Save Crate as Template
                        </div>
                    </el-button>
                </div>
                <div>
                    <el-button
                        @click="saveEntityAsTemplate"
                        type="primary"
                        size="mini"
                        v-if="!isRootDataset"
                    >
                        <div class="inline-block">
                            <i class="fas fa-save"></i>
                        </div>
                        <div
                            class="inline-block ml-1 xl:inline-block xl:ml-1"
                            :class="{ hidden: entity.etype === 'File' }"
                        >
                            Save Entity Template
                        </div>
                    </el-button>
                </div>
                <div>
                    <el-button
                        @click="deleteEntity"
                        type="danger"
                        size="mini"
                        v-if="!isRootDataset"
                    >
                        <div class="inline-block">
                            <i class="fas fa-trash"></i>
                        </div>
                        <div
                            class="inline-block ml-1 xl:inline-block xl:ml-1"
                            :class="{ hidden: entity.etype === 'File' }"
                        >
                            Delete Entity
                        </div>
                    </el-button>
                </div>
            </div>
            <!-- /navbar: controls -->
        </div>
        <add-property-dialog
            class="bg-indigo-200 p-6 m-2 rounded"
            :visible="addPropertyDialogVisible"
            :inputs="inputsWithNameFilteredOut()"
            @close="addPropertyDialogVisible = false"
            @create:property="createProperty"
            @create-and-link:entity="createAndLinkEntity"
            @link:entity="linkEntity"
            @add:template="addTemplateAndLinkEntity"
        />
        <save-crate-as-template-dialog
            class="bg-indigo-200 p-6 m-2 rounded"
            :visible="saveCrateAsTemplateDialogVisible"
            :entity="entity"
            @close="toggleSaveCrateDialog"
            @save:crate-as-template="saveCrateAsTemplate"
        />
    </div>
</template>

<script>
import AddPropertyDialog from "./AddPropertyDialog.component.vue";
import SaveCrateAsTemplateDialog from "./SaveCrateAsTemplateDialog.component.vue";
import DataService from "./data.service.js";

export default {
    components: {
        AddPropertyDialog,
        SaveCrateAsTemplateDialog,
    },
    props: {
        entity: {
            type: Object,
            required: true,
        },
        definition: {
            type: Object | undefined,
            required: true,
        },
    },
    data() {
        return {
            loading: false,
            dataService: undefined,
            error: undefined,
            addPropertyDialogVisible: false,
            saveCrateAsTemplateDialogVisible: false,
        };
    },
    computed: {
        isRootDataset: function() {
            return this.entity && this.entity.eid === "./";
        },
    },
    mounted() {
        this.dataService = new DataService();
    },
    methods: {
        loadRootDataset() {
            this.$store.commit("setSelectedEntity", { id: "RootDataset" });
        },
        async toggleAddPropertyDialog() {
            this.saveCrateAsTemplateDialogVisible = false;
            this.addPropertyDialogVisible = !this.addPropertyDialogVisible;
        },
        async toggleSaveCrateDialog() {
            this.addPropertyDialogVisible = false;
            this.saveCrateAsTemplateDialogVisible = !this.saveCrateAsTemplateDialogVisible;
        },
        inputsWithNameFilteredOut() {
            return this.definition.inputs.filter((i) => i.name !== "name");
        },
        async createProperty({ property, value }) {
            await this.dataService.createProperty({
                srcEntityId: this.entity.id,
                property,
                value,
            });
            this.$emit("refresh");
        },
        async createAndLinkEntity({ property, etype, entityName }) {
            let { entity } = await this.dataService.createEntity({
                name: entityName,
                etype,
            });
            await this.linkEntity({ property, tgtEntityId: entity.id });
        },
        async linkEntity({ property, tgtEntityId }) {
            await this.dataService.associate({
                srcEntityId: this.entity.id,
                property,
                tgtEntityId,
            });
            this.$emit("refresh");
        },
        async addTemplateAndLinkEntity({ property, templateId }) {
            let { entity } = await this.dataService.addTemplateToCrate({ templateId });
            await this.linkEntity({ property, tgtEntityId: entity.id });
        },
        async deleteEntity() {
            await this.dataService.deleteEntity({ id: this.entity.id });
            this.$store.commit("setSelectedEntity", { id: "RootDataset" });
        },
        async saveEntityAsTemplate() {
            await this.dataService.saveEntityAsTemplate({ id: this.entity.id });
        },
        async saveCrateAsTemplate({ name }) {
            await this.dataService.saveCrateAsTemplate({ name });
            this.toggleSaveCrateDialog();
        },
        resolveFilePath(id) {
            let filePath = `${this.$store.state.target.folder.path}/${id}`;
            return filePath;
        },
    },
};
</script>
