<template>
    <div class="flex flex-col space-y-1">
        <div class="mt-4 text-lg" v-if="hasReverseProperties">This entity is referenced by:</div>
        <div
            v-for="(properties, name) of props.entity.reverseProperties"
            :key="generateKey('reverse', name)"
            class="flex flex-row"
        >
            <div class="flex flex-col space-y-2">
                <render-reverse-item-link-component
                    v-for="property of properties"
                    :key="property.id"
                    :entity="property"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import RenderReverseItemLinkComponent from "./RenderReverseItemLink.component.vue";
import { computed } from "vue";

const props = defineProps({
    entity: {
        type: Object,
        required: true,
    },
});
let hasReverseProperties = computed(() => {
    return Object.keys(props.entity.reverseProperties).length;
});

function generateKey(direction, name) {
    return `${direction}-${name}`;
}
</script>
