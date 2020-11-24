<template>
    <div class="flex flex-col">
        <add-control-component
            :types="definition['@type']"
            v-if="definition"
            @add="add"
        />

        <div v-if="addType" class="p-2 bg-gray-200 mt-2">
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
                        <el-button @click="addType = undefined" size="mini">
                            <i class="fas fa-times"></i>
                        </el-button>
                    </div>
                </div>
                <div class="flex flex-row space-x-4 divide-x divide-gray-800">
                    <div class="w-1/2">
                        <div class="text-sm text-gray-600">
                            Provide a name to create and associate a new entity
                            of type '{{ addType }}'
                        </div>
                        <text-component
                            class="flex-grow"
                            type="text"
                            :property="property"
                            @save:property="createEntityAndLink"
                        />
                    </div>

                    <div class="pl-2 w-1/2">
                        <div class="text-sm text-gray-600">
                            Associate an existing entity - lookup by name or @id
                        </div>
                        <autocomplete-component
                            :type="addType"
                            by="name"
                            @link:entity="linkEntity"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddControlComponent from "./AddControl.component.vue";
import TextComponent from "./Text.component.vue";
import DateComponent from "./Date.component.vue";
import DataService from "./data.service.js";
import AutocompleteComponent from "./AutoComplete.component.vue";

export default {
    components: {
        AddControlComponent,
        TextComponent,
        DateComponent,
        AutocompleteComponent,
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
    mounted() {
        this.dataService = new DataService({
            $http: this.$http,
            $log: this.$log,
        });
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
                property: this.property,
                entityName: data.value,
            });
        },
        linkEntity({ entity }) {
            this.$emit("link:entity", {
                property: this.property,
                tgtEntityId: entity.id,
            });
        },
    },
};
</script>
