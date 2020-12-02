<template>
    <div class="flex flex-col">
        <navigation-component />
        <div class="p-2 flex flex-col space-y-1">
            <select-target-component />
            <!-- <onedrive-file-preview-component
                style="width: 500px; height: 500px;"
                path="/test-rocrate/data/NT1-20003-002.jpg"
            /> -->
            <!-- <onedrive-file-preview-component
                style="width: 500px; height: 500px;"
                id="b!-4xxhXFx5kKSQwwAuO7Ek9AvCPQ0yFpGrxxa6HLjh4QGAuTlRxZhQ59yKADIuZ49#01K7QV4XMU2HLRHYXGTVAY4LGNFZOOIF6Z"
            /> -->
            <load-collection-component v-if="target.resource" />
            <el-tabs type="border-card" v-model="activeTab" v-if="collectionId && target.resource">
                <el-tab-pane label="Manage Your Data" name="manageData">
                    <render-entity-component
                        :id="selectedEntityId"
                        v-if="activeTab === 'manageData'"
                    />
                </el-tab-pane>
                <el-tab-pane label="Manage Content" name="manageContent">
                    <manage-crate-files-component v-if="activeTab === 'manageContent'" />
                </el-tab-pane>
                <el-tab-pane label="Manage Entities" name="manageEntities">
                    <entity-list-manager-component
                        v-if="activeTab === 'manageEntities'"
                        @manage-data="activeTab = 'manageData'"
                    />
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import NavigationComponent from "@/components/Navigation.component.vue";
import SelectTargetComponent from "@/components/select-target/Shell.component.vue";
import ManageCrateFilesComponent from "@/components/manage-crate-files/Shell.component.vue";
import LoadCollectionComponent from "@/components/LoadCollection.component.vue";
import RenderEntityComponent from "@/components/manage-entities/RenderEntity.component.vue";
import EntityListManagerComponent from "@/components/entity-list/Shell.component.vue";

export default {
    components: {
        NavigationComponent,
        SelectTargetComponent,
        ManageCrateFilesComponent,
        LoadCollectionComponent,
        RenderEntityComponent,
        EntityListManagerComponent,
    },
    data() {
        return {
            activeTab: "manageData",
        };
    },
    computed: {
        collectionId() {
            return this.$store.state.collection?.id;
        },
        target() {
            return this.$store.state.target;
        },
        selectedEntityId() {
            return this.$store.state.selectedEntity?.id;
        },
    },
    mounted() {
        this.$store.dispatch("loadConfiguration");
    },
    methods: {},
};
</script>
