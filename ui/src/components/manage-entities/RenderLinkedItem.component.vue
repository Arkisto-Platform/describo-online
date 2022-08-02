<template>
    <div>
        <div v-if="!showMap" class="flex flex-row">
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
            <delete-property-component
                class="bg-yellow-200 cursor-pointer rounded-r p-2"
                :type="type"
                :property="entity"
                @delete:property="deleteProperty"
            />
        </div>
        <div v-if="showMap">
            <div class="flex flex-row" v-if="!data.editLocation">
                <div class="flex flex-col">
                    <div class="bg-blue-200 p-2 cursor-pointer">
                        {{ data.entity.name }}
                    </div>
                    <map-component :entity="data.entity" />
                </div>
                <div class="flex flex-col space-y-6 bg-yellow-200 cursor-pointer rounded-r p-2">
                    <delete-property-component
                        :type="type"
                        :property="entity"
                        @delete:property="deleteProperty"
                    />
                    <el-button type="primary" @click="editLocation" class="inline-block">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </el-button>
                </div>
            </div>
            <div v-if="data.editLocation">
                <geo-component
                    class="bg-blue-200"
                    :entity="data.entity"
                    mode="feature"
                    @save:property="saveProperty"
                    @create:property="createProperty"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import GeoComponent from "./Geo.component.vue";
import TypeIconComponent from "./TypeIcon.component.vue";
import DeletePropertyComponent from "./DeleteProperty.component.vue";
import MapComponent from "./Map.component.vue";
import DataService from "./data.service.js";
import { computed, reactive, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const dataService = new DataService();

const emit = defineEmits(["delete:property", "save:property"]);
const props = defineProps({
    entity: {
        type: Object,
        required: true,
    },
});
const data = reactive({
    entity: {},
    editLocation: false,
});
let showMap = computed(() => (data.entity?.etype?.match("Geo") ? true : false));
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
function editLocation() {
    data.editLocation = true;
}
async function saveProperty(update) {
    await dataService.updateProperty({
        entityId: data.entity.id,
        propertyId: update.propertyId,
        property: "geojson",
        value: update.value,
    });
    data.editLocation = false;
}
async function createProperty(update) {
    await dataService.createProperty({
        srcEntityId: data.entity.id,
        property: "geojson",
        value: update.value,
    });
    data.editLocation = false;
}
</script>
