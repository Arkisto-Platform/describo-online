<template>
    <div class="bg-white p-4" v-if="!embeddedSession">
        <div class="flex flex-row text-sm">
            <div class="flex flex-row" v-if="!target.resource && !target.folder">
                Select a resource to work with
                <div v-if="target.resource" class="ml-2">:&nbsp;{{ target.resource }}</div>
            </div>
            <div class="flex-grow"></div>
            <div v-if="target.resource && !revaDeployment">
                <el-button type="danger" size="mini" @click="selectNewResourceAndTarget">
                    Change resource
                </el-button>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex flex-row space-x-2" v-if="!target.resource">
                <onedrive-authenticator-component v-if="onedriveEnabled" />
                <owncloud-authenticator-component v-if="owncloudEnabled" />
                <s3-authenticator-component v-if="s3Enabled" />
                <reva-authenticator-component v-if="revaEnabled" />
            </div>

            <file-browser-component
                v-if="target.resource && !selectedFolder"
                :resource="target.resource"
                mode="openDirectory"
                :enable-file-selector="true"
                @selected-folder="setSelectedFolder"
            />
            <div class="flex flex-row space-x-2 text-sm" v-if="target.resource && target.folder">
                <div>
                    <el-button type="danger" @click="selectNewTargetFolder" size="mini">
                        <i class="fas fa-trash"></i>
                    </el-button>
                </div>
                <div class="pt-1">Resource:</div>
                <div class="pt-1">{{ target.resource }}:{{ target.folder.path }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import FileBrowserComponent from "@/components/filebrowser/FileBrowser.component.vue";

export default {
    components: {
        FileBrowserComponent,
    },
    data() {
        return {
            configuration: {},
            selectedFolder: undefined,
            embeddedSession: false,
            revaDeployment: this.$store.state.configuration.login === "reva" ? true : false,
        };
    },
    computed: {
        target: function() {
            if (this.$store.state.target.folder)
                this.selectedFolder = this.$store.state.target.folder;
            return this.$store.state.target;
        },
        owncloudEnabled: function() {
            return this.$store.state.configuration.services?.owncloud ? true : false;
        },
        onedriveEnabled: function() {
            return this.$store.state.configuration.services?.onedrive ? true : false;
        },
        s3Enabled: function() {
            return this.$store.state.configuration.services?.s3 ? true : false;
        },
        revaEnabled: function() {
            return this.$store.state.configuration.services?.reva ? true : false;
        },
    },
    mounted() {
        this.setup();
    },
    methods: {
        async setup() {
            const session = this.$store.state.session;
            if (session.embedded) {
                this.embeddedSession = true;
                let resource = Object.keys(session.service).pop();
                let folder = { path: session.service[resource].folder };
                if (resource && folder.path) {
                    this.selectedFolder = folder;
                    this.$store.commit("setTargetResource", { resource, folder });
                } else {
                    this.embeddedSession = false;
                }
            }
        },
        setSelectedFolder(folder) {
            this.selectedFolder = folder;
            this.$store.commit("setTargetResource", {
                resource: this.target.resource,
                folder,
            });
        },
        selectNewTargetFolder() {
            this.selectedFolder = undefined;
            const targetResource = this.target.resource;
            this.$store.commit("reset");
            this.$store.commit("setTargetResource", {
                resource: targetResource,
                folder: undefined,
            });
        },
        selectNewResourceAndTarget() {
            this.selectedFolder = undefined;
            this.$store.commit("reset");
        },
    },
};
</script>
