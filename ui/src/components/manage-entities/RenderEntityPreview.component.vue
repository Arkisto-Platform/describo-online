<template>
    <div class="flex flex-col style-panel">
        <onedrive-file-preview-component
            v-if="target.resource === 'onedrive'"
            class="w-full style-panel"
            :path="resolveFilePath(entity.eid)"
        />
        <owncloud-file-preview-component
            v-else-if="target.resource === 'owncloud'"
            class="w-full style-panel"
        />
        <s3-file-preview-component
            v-else-if="target.resource === 's3'"
            class="w-full style-panel"
            :path="resolveFilePath(entity.eid)"
            :entity="entity"
        />
        <reva-file-preview-component
            v-else-if="target.resource === 'reva'"
            class="w-full style-panel"
            :path="resolveFilePath(entity.eid)"
            :entity="entity"
        />
        <div v-else-if="target.resource === 'local'">
            {{ target }}
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps({
    entity: {
        type: Object,
        required: true,
    },
});
const configuration = store.state.configuration;

const target = computed(() => {
    return store.state.target;
});
function resolveFilePath(id) {
    let filePath = `${store.state.target.folder.path}/${id}`;
    return filePath;
}
</script>

<style lang="scss" scoped>
.style-panel {
    min-height: 200px;
}
</style>
