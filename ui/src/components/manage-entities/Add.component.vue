<template>
    <div class="flex flex-col">
        <add-control-component
            :types="definition['@type']"
            v-if="definition"
            @add="add"
        />

        <div
            v-if="addType"
            class="mt-2"
            :class="{ 'bg-indigo-100 p-4': !embedded }"
        >
            <div class="flex flex-row" v-if="!embedded">
                <div class="flex-grow"></div>
                <div>
                    <el-button @click="addType = undefined" size="mini">
                        <i class="fas fa-times fa-fw"></i>
                    </el-button>
                </div>
            </div>
            <div v-if="addSimpleType" class="mt-2">
                <text-component
                    v-if="addType === 'Text'"
                    :property="property"
                    :auto-save="false"
                    @save:property="createProperty"
                />
                <date-component
                    v-if="addType === 'Date'"
                    :property="property"
                    @save:property="createProperty"
                />
            </div>
            <div v-else class="flex flex-col mt-4">
                <div
                    class="flex flex-row space-x-4 divide-x divide-gray-800 text-xs text-gray-600"
                >
                    <div class="w-1/2">
                        <div class="">
                            Associate an existing entity - lookup '{{
                                addType
                            }}' by name or @id
                        </div>
                        <autocomplete-component
                            :type="addType"
                            by="name"
                            @link:entity="linkEntity"
                        />
                    </div>
                    <div class="w-1/2 pl-2">
                        <div class="">
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
        embedded: {
            type: Boolean,
            default: true,
        },
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
        return {
            simpleTypes: ["Text", "Date"],
            addType: undefined,
        };
    },
    computed: {
        addSimpleType() {
            return this.simpleTypes.includes(this.addType);
        },
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
