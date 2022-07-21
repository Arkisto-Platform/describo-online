<template>
    <div
        class="flex flex-row pl-1 pt-3 pr-2 pb-4 border-b border-gray-200"
        :class="{
            'bg-green-200 p-1 rounded': data.update.success,
            'bg-red-200 p-1 rounded': data.update.error,
        }"
        v-if="propertyDefinition"
    >
        <div class="w-1/3 xl:w-1/5">
            <div v-if="propertyDefinition.label">
                <display-property-name-component :label="propertyDefinition.label" />
            </div>
            <div v-else><display-property-name-component :label="data.property" /></div>
        </div>

        <div class="w-2/3 xl:w-4/5 flex-grow">
            <text-component
                class="w-full"
                type="text"
                :property="data.property"
                :value.sync="entity.name"
                @save:property="saveEntityProperty"
            />
        </div>
    </div>
</template>

<script setup>
import TextComponent from "./Text.component.vue";
import DisplayPropertyNameComponent from "./DisplayPropertyName.component.vue";
import { reactive, computed, watch, onMounted } from "vue";

const props = defineProps({
    entity: {
        type: Object,
        required: true,
    },
    definition: {
        type: Object,
        required: true,
    },
    dataService: {
        type: Object,
        required: true,
    },
});
const data = reactive({
    property: "name",
    update: {
        error: false,
        success: false,
    },
});
const propertyDefinition = computed(() => {
    return props.definition.inputs.filter((i) => i.name === "name")?.[0];
});

async function saveEntityProperty({ value }) {
    try {
        await props.dataService.updateEntityProperty({
            id: props.entity.id,
            property: data.property,
            value,
        });
        data.update.success = true;
        setTimeout(() => {
            data.update.success = false;
        }, 1500);
    } catch (error) {
        data.update.error = false;
        setTimeout(() => {
            data.update.error = false;
        }, 1500);
    }
}
</script>
