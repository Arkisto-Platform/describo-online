<template>
    <div class="flex flex-col">
        <add-control-component :types="definition['type']" v-if="definition" @add="add" />

        <div v-if="addType" class="mt-2" :class="{ 'bg-indigo-100 p-4': !embedded }">
            <div class="flex flex-row mt-2">
                <div><i class="text-xl fas fa-link"></i> Associate a {{ addType }}</div>
                <div class="flex-grow"></div>
                <div v-if="!embedded">
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
                <date-time-component
                    v-if="addType === 'DateTime'"
                    :property="property"
                    @save:property="createProperty"
                />
                <number-component
                    v-if="['Number', 'Float', 'Integer'].includes(addType)"
                    :property="property"
                    @save:property="createProperty"
                />
                <time-component
                    v-if="addType === 'Time'"
                    :property="property"
                    @save:property="createProperty"
                />
            </div>
            <div v-else class="flex flex-col mt-4">
                <div class="flex flex-row space-x-4 divide-x divide-gray-800 text-gray-600">
                    <div class="w-1/2">
                        <div class="">
                            Associate an existing '{{ addType }}': lookup by @id, @type, or name
                        </div>
                        <autocomplete-component
                            :type="addType"
                            by="name"
                            @link:entity="linkEntity"
                            @add:template="addTemplate"
                        />
                    </div>
                    <div class="w-1/2 pl-2">
                        <div class="">
                            Create and associate a new entity of type '{{ addType }}'
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
import DateTimeComponent from "./DateTime.component.vue";
import TimeComponent from "./Time.component.vue";
import NumberComponent from "./Number.component.vue";
import DataService from "./data.service.js";
import AutocompleteComponent from "./AutoComplete.component.vue";

export default {
    components: {
        AddControlComponent,
        TextComponent,
        DateComponent,
        DateTimeComponent,
        TimeComponent,
        NumberComponent,
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
            simpleTypes: ["Text", "Date", "DateTime", "Time", "Number", "Float", "Integer"],
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
        addTemplate({ template }) {
            this.$emit("add:template", {
                property: this.property,
                templateId: template.id,
            });
        },
    },
};
</script>
