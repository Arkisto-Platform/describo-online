<template>
    <div class="flex flex-col">
        <div class="flex flex-row space-x-1" v-if="definition">
            <add-control-component
                :types="definition.type"
                v-if="definition && definition.type !== 'Value'"
                @add="add"
            />
            <div class="my-1">
                <el-button @click="close" size="mini" v-if="addType">
                    <i class="fas fa-times fa-fw"></i>
                </el-button>
            </div>
        </div>

        <div v-if="addType" class="flex flex-row mt-1" :class="{ 'bg-indigo-200 p-2': !embedded }">
            <div v-if="addSimpleType" class="w-full">
                <text-component
                    v-if="addType === 'Text'"
                    :property="property"
                    type="text"
                    :auto-save="true"
                    @save:property="createProperty"
                />
                <text-component
                    v-if="addType === 'TextArea'"
                    :property="property"
                    type="textarea"
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
                <select-component
                    v-if="addType === 'Select'"
                    :property="property"
                    :definition="definition"
                    @save:property="createProperty"
                />
            </div>
            <div v-else class="w-full">
                <div class="flex flex-row space-x-2 divide-y divide-gray-300 text-gray-600 ">
                    <div class="w-full">
                        <div class="text-xs">
                            Associate a {{ addType }} (lookup by identifier or name) or create a new
                            entity
                        </div>
                        <autocomplete-component
                            :type="addType"
                            @link:entity="linkEntity"
                            @create:entity="createEntity"
                            @add:template="addTemplate"
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
import SelectComponent from "./Select.component.vue";
import AutocompleteComponent from "./AutoComplete.component.vue";

export default {
    components: {
        AddControlComponent,
        TextComponent,
        DateComponent,
        DateTimeComponent,
        TimeComponent,
        NumberComponent,
        SelectComponent,
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
        embedded: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            simpleTypes: [
                "Text",
                "TextArea",
                "Date",
                "DateTime",
                "Time",
                "Number",
                "Float",
                "Integer",
                "Value",
                "Select",
            ],
            addType: undefined,
        };
    },
    computed: {
        addSimpleType() {
            return this.simpleTypes.includes(this.addType);
        },
    },
    methods: {
        close() {
            this.addType = undefined;
        },
        add({ type }) {
            this.addType = type;
        },
        createProperty(data) {
            this.$emit("create:property", data);
            this.close();
        },
        createEntity({ name }) {
            this.$emit("create:entity", {
                etype: this.addType,
                property: this.property,
                entityName: name,
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
