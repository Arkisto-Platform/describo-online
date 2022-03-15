<template>
    <div class="flex flex-col bg-white p-4" v-if="!embeddedSession">
        <div v-if="!target.resource && !target.folder" class="flex flex-col">
            <div>
                Select a resource to work with
            </div>

            <div class="flex flex-row space-x-1">
                <div v-if="localEnabled">
                    <el-button @click="setLocalTarget" type="primary">My Computer</el-button>
                </div>
                <onedrive-authenticator-component v-if="onedriveEnabled" />
                <owncloud-authenticator-component v-if="owncloudEnabled" />
                <s3-authenticator-component v-if="s3Enabled" />
                <reva-authenticator-component v-if="revaEnabled" />
            </div>
        </div>

        <file-browser-component
            class="p-2 my-1 border border-solid"
            v-if="target.resource && !selectedFolder"
            :resource="target.resource"
            mode="openDirectory"
            :enable-file-selector="true"
            @selected-folder="setSelectedFolder"
        />
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
        localEnabled: function() {
            return this.$store.state.configuration.services?.localhost ? true : false;
        },
    },
    mounted() {
        this.setup();
    },
    methods: {
        async setup() {
            this.$store.commit("reset");
            this.selectedFolder = undefined;
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
            this.$router.push({ path: "/collection/build", query: { eid: "RootDataset" } });
        },
        async setLocalTarget() {
            await this.$http.post({ route: "/session/configuration/local", body: {} });

            this.$store.commit("setTargetResource", {
                resource: "local",
                folder: undefined,
            });
        },
    },
};
</script>