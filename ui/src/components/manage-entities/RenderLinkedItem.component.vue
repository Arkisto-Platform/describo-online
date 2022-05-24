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
                    :type="entity.tgtEntityType"
                    v-if="entity.tgtEntityType"
                />
                <div>{{ entity.tgtEntityType }}:</div>
                <span v-if="entity.tgtEntityName">{{ entity.tgtEntityName }}</span>
                <span v-else>{{ entity.tgtEntityEid }}</span>
            </div>
	</div>
	<map-component :id="entity.tgtEntityId" v-if="showMap" />
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
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const emit = defineEmits(["delete:property"]);
const props = defineProps({
    entity: {
	type: Object,
	required: true,
    },
});
let showMap = computed(() => (props.entity?.tgtEntityType?.match("Geo") ? true : false));
// let type = computed(() => (showMap.value ? "delete" : "unlink"));
let type = "unlink";

function loadEntity() {
    store.commit("setSelectedEntity", {
	id: props.entity.tgtEntityId,
    });
}
function deleteProperty(data) {
    emit("delete:property", data);
}
</script>
