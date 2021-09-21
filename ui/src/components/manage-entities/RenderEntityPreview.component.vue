<template>
    <div class="flex flex-col style-panel">
        <onedrive-file-preview-component
            v-if="target.resource === 'onedrive' && entity.etype === 'File'"
            class="w-full"
            style="height: 500px;"
            :path="resolveFilePath(entity.eid)"
        />
        <owncloud-file-preview-component
            v-if="target.resource === 'owncloud' && entity.etype === 'File'"
            class="w-full"
            style="height: 500px;"
        />
        <s3-file-preview-component
            v-if="target.resource === 's3' && entity.etype === 'File'"
            class="w-full"
            style="height: 500px;"
            :path="resolveFilePath(entity.eid)"
            :entity="entity"
        />
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        entity: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    computed: {
        target: function() {
            return this.$store.state.target;
        },
    },
    methods: {
        resolveFilePath(id) {
            let filePath = `${this.$store.state.target.folder.path}/${id}`;
            return filePath;
        },
    },
};
</script>

<style lang="scss" scoped>
.style-panel {
    min-height: 200px;
}
</style>
