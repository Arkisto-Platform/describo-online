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
        <!-- <onedrive-file-preview-component
                style="width: 500px; height: 500px;"
                id="b!-4xxhXFx5kKSQwwAuO7Ek9AvCPQ0yFpGrxxa6HLjh4QGAuTlRxZhQ59yKADIuZ49#01K7QV4XMU2HLRHYXGTVAY4LGNFZOOIF6Z"
            /> -->
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
