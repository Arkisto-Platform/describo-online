<template>
    <div class="flex flex-col space-y-1">
        <div class="flex" :class="{ 'flex-col': !profile, 'flex-grow flex-row': profile }">
            <manage-selected-target-component :class="{ 'w-full': !profile, 'w-1/2': profile }" />
            <select-profile-component
                v-if="target.resource && target.folder"
                :class="{ 'w-full': !profile, 'w-1/2': profile }"
            />
        </div>

        <load-collection-component v-if="target.resource && target.folder && profile" />
        <el-tabs
            type="border-card"
            v-model="activeTab"
            v-if="collectionId && target.resource"
            @tab-click="updateRoute"
        >
            <el-tab-pane label="Build the Collection" name="build">
                <render-entity-component :id="selectedEntityId" v-if="activeTab === 'build'" />
            </el-tab-pane>
            <el-tab-pane label="Manage Collection Data Files" name="files">
                <manage-crate-files-component v-if="activeTab === 'files'" />
            </el-tab-pane>
            <el-tab-pane label="Browse Collection Entities" name="entities">
                <entity-list-manager-component
                    v-if="activeTab === 'entities'"
                    @manage-data="activeTab = 'build'"
                />
            </el-tab-pane>
            <el-tab-pane label="Manage Templates" name="templates">
                <template-list-component v-if="activeTab === 'templates'" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import ManageSelectedTargetComponent from "./ManageSelectedTarget.component.vue";
import SelectProfileComponent from "@/components/SelectProfile.component.vue";
import ManageCrateFilesComponent from "@/components/manage-crate-files/Shell.component.vue";
import LoadCollectionComponent from "@/components/LoadCollection.component.vue";
import RenderEntityComponent from "@/components/manage-entities/RenderEntity.component.vue";
import EntityListManagerComponent from "@/components/entity-list/Shell.component.vue";
import TemplateListComponent from "@/components/template-list/TemplateList.component.vue";
import { restoreSessionTarget } from "./session-handlers";

export default {
    components: {
        ManageSelectedTargetComponent,
        SelectProfileComponent,
        ManageCrateFilesComponent,
        LoadCollectionComponent,
        RenderEntityComponent,
        EntityListManagerComponent,
        TemplateListComponent,
    },
    data() {
        return {
            activeTab: "build",
        };
    },
    computed: {
        collectionId() {
            return this.$store.state.collection?.id;
        },
        target() {
            return this.$store.state.target;
        },
        profile: function() {
            return this.$store.state.profile.file ? true : false;
        },
        selectedEntityId() {
            let eid = this.$store.state.selectedEntity?.id;
            return eid;
        },
    },
    watch: {
        "$route.path": function() {
            this.activeTab = this.$route.name;
        },
        "$route.query": function() {
            let eid = this.$route.query.eid;
            if (!eid) eid = "RootDataset";
            if (this.activeTab === "build") {
                this.$store.commit("setSelectedEntity", { id: eid });
            }
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            await restoreSessionTarget();
            this.$nextTick(() => {
                if (!this.target?.resource || !this.target?.folder) {
                    this.$router.push({ path: "/select-target" }).catch(() => {});
                }
            });
        },
        updateRoute(tab) {
            let query = {};
            if (tab.paneName === "build") {
                query = { eid: this.selectedEntityId };
            }
            this.$router.push({ path: `/collection/${tab.paneName}`, query }).catch(() => {});
        },
    },
};
</script>
