<template>
    <div class="flex flex-row">
        <div
            class="flex flex-col bg-yellow-200 p-3 cursor-pointer rounded-l"
            @click="loadEntity"
            v-if="!showMap"
        >
            <div class="text-sm flex flex-row space-x-1">
                <type-icon-component
                    class="mr-2 text-gray-700"
                    :type="data.entity.etype"
                    v-if="data.entity.etype"
                />
                <div>{{ data.entity.etype }}:</div>
                <span v-if="data.entity.name">{{ data.entity.name }}</span>
                <span v-else>{{ data.entity.eid }}</span>
            </div>
        </div>
        <map-component :entity="data.entity" v-if="showMap" />
        <delete-property-component
            class="bg-yellow-200 cursor-pointer rounded-r p-2"
            :type="type"
            :property="entity"
            @delete:property="deleteProperty"
        />
    </div>
</template>

<script setup>
import TypeIconComponent from "./TypeIcon.component.vue";
import DeletePropertyComponent from "./DeleteProperty.component.vue";
import MapComponent from "./Map.component.vue";
import DataService from "./data.service.js";
import { computed, reactive, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const dataService = new DataService();

const emit = defineEmits(["delete:property"]);
const props = defineProps({
    entity: {
        type: Object,
        required: true,
    },
});
const data = reactive({
    entity: {},
});
let showMap = computed(() => (data.entity?.etype?.match("Geo") ? true : false));
// let type = computed(() => (showMap.value ? "delete" : "unlink"));
let type = "unlink";

onMounted(() => {
    loadEntityData();
});

function loadEntity() {
    store.commit("setSelectedEntity", {
        id: props.entity.tgtEntityId,
    });
}
function deleteProperty(data) {
    emit("delete:property", data);
}
async function loadEntityData() {
    let { entity } = await dataService.getEntity({ id: props.entity.tgtEntityId });
    data.entity = { ...entity };
}
</script>
