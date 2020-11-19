<template>
    <div class="flex flex-col space-y-1">
        <div class="mt-4 text-lg">This entity is referenced by:</div>
        <div
            v-for="(properties, name) of properties"
            :key="generateKey('reverse', name)"
            class="flex flex-row"
        >
            <div class="flex flex-col">
                <render-entity-reverse-property-component
                    v-for="property of properties"
                    :key="property.id"
                    :linkingPropertyName="name"
                    :property="property"
                />
            </div>
        </div>
    </div>
</template>

<script>
import RenderEntityReversePropertyComponent from "./RenderEntityReverseProperty.component.vue";

export default {
    components: {
        RenderEntityReversePropertyComponent,
    },
    props: {
        properties: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        generateKey(direction, name) {
            return `${direction}-${name}`;
        },
    },
};
</script>
