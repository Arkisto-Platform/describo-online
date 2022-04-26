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

<script setup>
import ManageSelectedTargetComponent from "./ManageSelectedTarget.component.vue";
import SelectProfileComponent from "@/components/SelectProfile.component.vue";
import ManageCrateFilesComponent from "@/components/manage-crate-files/Shell.component.vue";
import LoadCollectionComponent from "@/components/LoadCollection.component.vue";
import RenderEntityComponent from "@/components/manage-entities/RenderEntity.component.vue";
import EntityListManagerComponent from "@/components/entity-list/Shell.component.vue";
import TemplateListComponent from "@/components/template-list/TemplateList.component.vue";
import { restoreSessionTarget } from "./session-handlers";
import { ref, computed, watch, onMounted, nextTick } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
const store = useStore();
const route = useRoute();
const router = useRouter();

const activeTab = ref("build");
const collectionId = computed(() => {
    return store.state.collection?.id;
});
const target = computed(() => {
    return store.state.target;
});
const profile = computed(() => {
    return store.state.profile.file ? true : false;
});
const selectedEntityId = computed(() => {
    return store.state.selectedEntity?.id;
});

watch(
    () => route.path,
    () => {
        activeTab.value = route.name;
    }
);
watch(
    () => route.query,
    () => {
        let eid = route.query.eid;
        if (!eid) eid = "RootDataset";
        if (activeTab.value === "build") {
            store.commit("setSelectedEntity", { id: eid });
        }
    }
);
onMounted(() => {
    init();
});
async function init() {
    await restoreSessionTarget();
    nextTick(() => {
        if (!target?.value?.resource || !target?.value?.folder) {
            router.push({ path: "/select-target" }).catch(() => {});
        }
    });
}
function updateRoute(tab) {
    let query = {};
    if (tab.paneName === "build") {
        query = { eid: selectedEntityId.value };
    }
    router.push({ path: `/collection/${tab.paneName}`, query }).catch(() => {});
}
</script>
