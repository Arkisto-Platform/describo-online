<template>
    <el-card class="box-card">
        <div slot="header" class="flex flex-row" v-if="!target.resource && !target.folder">
            <div class="flex flex-row">
                Select a resource to work with
                <div v-if="resource" class="ml-2">:&nbsp;{{ resource }}</div>
            </div>
            <div class="flex-grow"></div>
            <div v-if="resource">
                <el-button type="danger" size="small" @click="resource = undefined">
                    Change resource
                </el-button>
            </div>
        </div>
        <div class="flex flex-col" v-if="!target.resource || !target.folder">
            <onedrive-authenticator-component
                api="/onedrive/configuration"
                @set-resource="resource = 'onedrive'"
                v-if="!resource"
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
        <div class="flex flex-row" v-if="target.resource && target.folder">
            <div class="mr-2">Selected Resource:</div>
            <div>{{ target.resource }}:{{ target.folder.path }}</div>
            <div class="flex-grow"></div>
            <el-button type="danger" @click="selectNewTargetFolder" size="small">
                <i class="fas fa-trash"></i>
            </el-button>
        </div>
    </el-card>
</template>

<script>
import HTTPService from "@/components/http.service";
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
        selectNewTargetFolder() {
            this.resource = undefined;
            this.selectedFolder = undefined;
            this.$store.commit("setTargetResource", {
                resource: undefined,
                folder: undefined,
            });
            this.$store.commit("setActiveCollection", {});
            this.$store.commit("setSelectedEntity", { id: "RootDataset" });
        },
    },
};
</script>
