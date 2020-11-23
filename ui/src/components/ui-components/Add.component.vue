<template>
    <div class="flex flex-col">
        <add-control-component
            :types="definition['@type']"
            v-if="definition"
            @add="add"
        />

        <div v-if="addType" class="p-6 bg-gray-200 mt-2">
            <div v-if="addType === 'Text'">
                <text-component
                    :property="property"
                    @save:property="createProperty"
                />
            </div>
            <div v-else-if="addType === 'Date'">
                <date-component
                    :property="property"
                    @save:property="createProperty"
                />
            </div>
            <div v-else class="flex flex-col">
                <div class="flex flex-row">
                    <div class="flex-grow"></div>
                    <div>
                        <el-button @click="addType = undefined" size="small">
                            <i class="fas fa-times"></i>
                        </el-button>
                    </div>
                </div>
                <div>
                    Provide a name to create and associate a new entity of type
                    '{{ addType }}'
                </div>
                <text-component
                    class="flex-grow"
                    type="text"
                    :property="property"
                    @save:property="createEntityAndLink"
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
        createProperty(data) {
            this.$emit("create:property", data);
        },
        createEntityAndLink(data) {
            this.$emit("create:entity", {
                etype: this.addType,
                property: data.property,
                entityName: data.value,
            });
        },
    },
};
</script>
