<template>
    <div class="flex flex-col bg-white p-4">
        <div v-if="!target.resource && !target.folder" class="flex flex-col">
            <div>Select a resource to work with</div>

            <div class="flex flex-row space-x-1">
                <div v-if="localEnabled">
                    <el-button @click="setLocalTargetResource" type="primary"
                        >My Computer</el-button
                    >
                </div>
                <onedrive-authenticator-component v-if="onedriveEnabled" />
                <owncloud-authenticator-component v-if="owncloudEnabled" />
                <s3-authenticator-component v-if="s3Enabled" />
                <reva-authenticator-component v-if="revaEnabled" />
            </div>
        </div>

        <div id="teleport-target-selection"></div>

        <div v-if="target.resource && !target.folder && !session.embedded">
            <el-button type="warning" size="small" @click="selectNewResourceAndTarget">
                Use another service
            </el-button>
        </div>

        <file-browser-component
            class="p-2 my-1 border border-solid"
            v-if="target.resource && !target.folder"
            :resource="target.resource"
            mode="openDirectory"
            :enable-file-selector="true"
            @selected-folder="setSelectedFolder"
        />
    </div>
</template>

<script setup>
import FileBrowserComponent from "@/components/filebrowser/FileBrowser.component.vue";
import {
    restoreSessionTarget,
    setFolderAndSaveToSession,
    setLocalTarget,
    selectNewTarget,
} from "./session-handlers";

import { onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const configuration = store.state.configuration;
const session = computed(() => {
    return store.state.session;
});
const target = computed(() => {
    return store.state.target;
});
const owncloudEnabled = computed(() => {
    return configuration.services?.owncloud ? true : false;
});
const onedriveEnabled = computed(() => {
    return configuration.services?.onedrive ? true : false;
});

const s3Enabled = computed(() => {
    return configuration.services?.s3 ? true : false;
});
const revaEnabled = computed(() => {
    return configuration.services?.reva ? true : false;
});
const localEnabled = computed(() => {
    return configuration.services?.localhost ? true : false;
});
onMounted(() => {
    init();
});
async function init() {
    await restoreSessionTarget();
}
async function selectNewResourceAndTarget() {
    await selectNewTarget();
}
async function setSelectedFolder(folder) {
    await setFolderAndSaveToSession({ folder: folder.path });
}
async function setLocalTargetResource() {
    await setLocalTarget();
}
</script>
