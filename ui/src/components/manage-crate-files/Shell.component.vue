<template>
    <div class="box-card">
        <div class="flex flex-col space-y-2">
            <information-component type="info">
                Use the controls below to add entries into the collection so you can annotate them.
            </information-component>

            <file-browser-component
                :resource="resource"
                :root="folder"
                mode="openFile"
                :enable-file-selector="true"
                @selected-nodes="saveSelectedNodes"
            />
        </div>
    </div>
</template>

<script setup>
import FileBrowserComponent from "@/components/filebrowser/FileBrowser.component.vue";
import InformationComponent from "../Information.component.vue";
import { useStore } from "vuex";
const store = useStore();
import { inject, ref } from "vue";
const $http = inject("$http");

const resource = ref(store.state.target.resource);
const folder = ref(store.state.target.folder);

async function saveSelectedNodes(nodes) {
    try {
        await $http.post({ route: "/files", body: { files: nodes } });
    } catch (error) {
        console.log(error);
    }
}
</script>
