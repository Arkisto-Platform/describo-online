<template>
    <div class="flex flex-col" v-if="ready">
        <navigation-component />
        <div class="p-2 flex flex-col space-y-1">
            <div class="flex" :class="{ 'flex-col': !profile, 'flex-grow flex-row': profile }">
                <select-target-component :class="{ 'w-full': !profile, 'w-1/2': profile }" />
                <select-profile-component
                    v-if="target.resource && target.folder"
                    :class="{ 'w-full': !profile, 'w-1/2': profile }"
                />
            </div>

            <load-collection-component v-if="target.resource && target.folder && profile" />
            <el-tabs type="border-card" v-model="activeTab" v-if="collectionId && target.resource">
                <el-tab-pane label="Build the Collection" name="manageData">
                    <render-entity-component
                        :id="selectedEntityId"
                        v-if="activeTab === 'manageData'"
                    />
                </el-tab-pane>
                <el-tab-pane label="Manage Collection Data Files" name="manageContent">
                    <manage-crate-files-component v-if="activeTab === 'manageContent'" />
                </el-tab-pane>
                <el-tab-pane label="Browse Collection Entities" name="manageEntities">
                    <entity-list-manager-component
                        v-if="activeTab === 'manageEntities'"
                        @manage-data="activeTab = 'manageData'"
                    />
                </el-tab-pane>
                <el-tab-pane label="Manage Templates" name="manageTemplates">
                    <template-list-component v-if="activeTab === 'manageTemplates'" />
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
import TemplateListComponent from "@/components/template-list/TemplateList.component.vue";
import SelectProfileComponent from "@/components/select-profile/Shell.component.vue";

export default {
    components: {
        NavigationComponent,
        SelectTargetComponent,
        SelectProfileComponent,
        ManageCrateFilesComponent,
        LoadCollectionComponent,
        RenderEntityComponent,
        EntityListManagerComponent,
        TemplateListComponent,
    },
    data() {
        return {
            activeTab: "manageData",
            ready: false,
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
            return this.$store.state.selectedEntity.id;
        },
    },
    beforeMount() {
        this.restoreSession();
    },
    mounted() {
        this.$store.dispatch("loadConfiguration");
    },
    methods: {
        async restoreSession() {
            let response = await this.$http.get({ route: "/session" });
            if (response.status !== 200) {
            }
            let { session, embeddedSession } = await response.json();
            this.$store.commit("setSessionInformation", { ...session, embedded: embeddedSession });
            this.ready = true;
        },
    },
};
</script>
