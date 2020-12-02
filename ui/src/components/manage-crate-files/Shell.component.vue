<template>
    <el-card class="box-card">
        <file-browser-component
            class="m-4"
            :resource="resource"
            :root="folder"
            mode="openFile"
            :enable-file-selector="true"
            @selected-nodes="saveSelectedNodes"
        />
    </el-card>
</template>

<script>
import FileBrowserComponent from "@/components/filebrowser/FileBrowser.component.vue";

export default {
    components: {
        FileBrowserComponent,
    },
    data() {
        return {
            resource: this.$store.state.target.resource,
            folder: this.$store.state.target.folder.path,
        };
    },
    methods: {
        async saveSelectedNodes(nodes) {
            try {
                await this.$http.post({ route: "/files", body: { files: nodes } });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
