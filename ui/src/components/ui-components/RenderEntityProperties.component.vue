<template>
    <div class="flex flex-col space-y-1">
        <div
            v-for="(properties, name) of properties"
            :key="generateKey('forward', name)"
            class="flex flex-row"
        >
            <div class="w-64">
                {{ name }}
            </div>
            <div class="w-full flex flex-col space-y-1">
                <div class="text-sm text-gray-600">
                    {{ help(name) }}
                </div>
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
        inputs: {
            type: Array,
        },
    },
    data() {
        return {};
    },
    methods: {
        generateKey(direction, name) {
            return `${direction}-${name}`;
        },
        definition(name) {
            return this.inputs
                ? this.inputs.filter((i) => i?.property === name)[0]
                : {};
        },
        help(name) {
            return this.definition(name)?.help;
        },
    },
};
</script>
