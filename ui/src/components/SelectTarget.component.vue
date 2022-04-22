<template>
    <div class="flex flex-col bg-white p-4">
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

        <div v-if="target.resource && !target.folder && !session.embedded">
            <el-button type="warning" size="mini" @click="selectNewResourceAndTarget">
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

<script>
import FileBrowserComponent from "@/components/filebrowser/FileBrowser.component.vue";
import {
    restoreSessionTarget,
    setFolderAndSaveToSession,
    setLocalTarget,
    selectNewTarget,
} from "./session-handlers";

export default {
    components: {
        FileBrowserComponent,
    },
    data() {
        return {
            configuration: this.$store.state.configuration,
        };
    },
    computed: {
        session: function() {
            return this.$store.state.session;
        },
        target: function() {
            return this.$store.state.target;
        },
        owncloudEnabled: function() {
            return this.configuration.services?.owncloud ? true : false;
        },
        onedriveEnabled: function() {
            return this.configuration.services?.onedrive ? true : false;
        },
        s3Enabled: function() {
            return this.configuration.services?.s3 ? true : false;
        },
        revaEnabled: function() {
            return this.configuration.services?.reva ? true : false;
        },
        localEnabled: function() {
            return this.configuration.services?.localhost ? true : false;
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            await restoreSessionTarget();
        },
        async selectNewResourceAndTarget() {
            await selectNewTarget();
        },
        async setSelectedFolder(folder) {
            await setFolderAndSaveToSession({ folder: folder.path });
        },
        async setLocalTarget() {
            await setLocalTarget();
        },
    },
};
</script>
