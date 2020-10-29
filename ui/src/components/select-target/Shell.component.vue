<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <div class="text-xl">Select a resource to work with</div>
        </div>
        <div class="flex flex-col" v-if="!target.resource || !target.folder">
            <onedrive-authenticator-component
                api="/onedrive/configuration"
                @set-resource="resource = 'onedrive'"
            />
            <file-browser-component
                v-if="resource && !selectedFolder"
                class="m-4"
                :resource="resource"
                mode="openDirectory"
                :enable-file-selector="true"
                @selected-folder="setSelectedFolder"
            />
        </div>
        <div class="flex flex-col" v-if="target.resource || target.folder">
            {{ target.resource }}:/{{ target.folder }}
        </div>
    </el-card>
</template>

<script>
import HTTPService from "@/components//http.service";
import FileBrowserComponent from "@/components/filebrowser/FileBrowser.component.vue";
import { isMatch } from "lodash";

export default {
    components: {
        FileBrowserComponent,
    },
    data() {
        return {
            configuration: {},
            resource: undefined,
            selectedFolder: undefined,
        };
    },
    computed: {
        target: function() {
            return this.$store.state.target;
        },
    },
    methods: {
        setSelectedFolder(folder) {
            this.selectedFolder = folder;
            this.$store.commit("setTargetResource", {
                resource: this.resource,
                folder,
            });
        },
    },
};
</script>
