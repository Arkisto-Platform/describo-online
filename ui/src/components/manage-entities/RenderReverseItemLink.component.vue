<template>
    <div class="flex flex-col bg-red-200 p-3 cursor-pointer rounded" @click="loadEntity">
        <div class="text-sm">
            <span class="text-gray-800 mr-2 flex flex-row">
                <type-icon-component
                    class="mr-2 text-gray-700"
                    :type="data.entity.etype"
                    v-if="data.entity.etype"
                />
                {{ data.entity.etype }}:{{ data.entity.name }}. Property: {{ entity.name }}
            </span>
        </div>
    </div>
</template>

<script setup>
import TypeIconComponent from "./TypeIcon.component.vue";
import DataService from "./data.service.js";
const dataService = new DataService();
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
    entity: {
        type: Object,
        required: true,
    },
});
const data = reactive({ entity: {} });

onMounted(() => {
    loadEntityData();
});

function loadEntity() {
    store.commit("setSelectedEntity", {
        id: props.entity.tgtEntityId,
    });
}
async function loadEntityData() {
    let { entity } = await dataService.getEntity({ id: props.entity.tgtEntityId });
    data.entity = { ...entity };
}
</script>
