<template>
    <div class="flex flex-col space-y-1">
        <div
            v-for="(properties, name) of properties"
            :key="generateKey('forward', name)"
            class="flex flex-row"
        >
            <div class="w-64">{{ name }}</div>
            <div class="flex flex-col space-y-1">
                <render-entity-property-component
                    v-for="property of properties"
                    :key="property.id"
                    :property="property"
                />
            </div>
        </div>
    </div>
</template>

<script>
import RenderEntityPropertyComponent from "./RenderEntityProperty.component.vue";

export default {
    components: {
        RenderEntityPropertyComponent,
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
