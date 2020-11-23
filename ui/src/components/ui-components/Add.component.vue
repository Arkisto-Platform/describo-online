<template>
    <div class="flex flex-col">
        <add-control-component
            :types="definition['@type']"
            v-if="definition"
            @add="add"
        />

        <div v-if="addType" class="p-6 bg-gray-200">
            <div v-if="addType === 'Text'">
                <text-component
                    :property="property"
                    @save:property="createProperty"
                />
            </div>
            <div v-if="addType === 'Date'">
                <date-component
                    :property="property"
                    @save:property="createProperty"
                />
            </div>
        </div>
    </div>
</template>

<script>
import AddControlComponent from "./AddControl.component.vue";
import TextComponent from "./Text.component.vue";
import DateComponent from "./Date.component.vue";

export default {
    components: {
        AddControlComponent,
        TextComponent,
        DateComponent,
    },
    props: {
        property: {
            type: String,
            required: true,
        },
        definition: {
            type: Object | undefined,
            required: true,
        },
    },
    data() {
        return { addType: undefined };
    },
    methods: {
        add({ type }) {
            this.addType = type;
        },
        createProperty(value) {
            this.$emit("create:property", value);
        },
    },
};
</script>
