<template>
    <div class="flex flex-col">
        <div class="flex flex-row space-x-1" v-if="props.definition">
            <add-control-component
                v-if="props.definition && props.definition.type !== 'Value'"
                :types="props.definition.type"
                @add="add"
                @close="close"
            />
        </div>

        <div class="flex flex-row mt-1">
            <div
                v-if="addSimpleType"
                class="w-full my-2"
                :class="{ 'bg-indigo-200 p-2': !props.embedded }"
            >
                <text-component
                    v-if="data.addType === 'Text'"
                    :property="props.property"
                    type="text"
                    @save:property="createProperty"
                    placeholder="Add text"
                />
                <text-component
                    v-if="data.addType === 'TextArea'"
                    :property="props.property"
                    type="textarea"
                    @save:property="createProperty"
                />
                <date-component
                    v-if="data.addType === 'Date'"
                    :property="props.property"
                    @save:property="createProperty"
                />
                <date-time-component
                    v-if="data.addType === 'DateTime'"
                    :property="props.property"
                    @save:property="createProperty"
                />
                <number-component
                    v-if="['Number', 'Float', 'Integer'].includes(data.addType)"
                    :property="props.property"
                    @save:property="createProperty"
                />
                <time-component
                    v-if="data.addType === 'Time'"
                    :property="props.property"
                    @save:property="createProperty"
                />
                <select-component
                    v-if="data.addType === 'Select'"
                    :property="props.property"
                    :definition="props.definition"
                    @save:property="createProperty"
                />
                <url-component
                    v-if="data.addType === 'URL'"
                    :property="props.property"
                    :definition="props.definition"
                    @create:object="createObject"
                />
                <select-url-component
                    v-if="data.addType === 'SelectURL'"
                    :property="props.property"
                    :definition="props.definition"
                    @create:object="createObject"
                />
                <select-object-component
                    v-if="data.addType === 'SelectObject'"
                    :property="props.property"
                    :definition="props.definition"
                    @create:object="createObject"
                />
                <geo-component
                    v-if="data.addType === 'Geo'"
                    mode="entity"
                    @create:object="createObject"
                    @link:entity="linkEntity"
                />
            </div>
            <div v-else class="w-full">
                <div
                    class="flex flex-row space-x-2 divide-y divide-gray-300 text-gray-600"
                    :class="{ 'bg-indigo-200 p-2': !props.embedded }"
                    v-if="data.addType"
                >
                    <div class="w-full">
                        <div class="text-xs">
                            Associate an existing '{{ data.addType }}' (lookup by identifier or
                            name) or create a new '{{ data.addType }}' by typing a name for it.
                        </div>
                        <autocomplete-component
                            :type="data.addType"
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

<script setup>
import AddControlComponent from "./AddControl.component.vue";
import TextComponent from "./Text.component.vue";
import DateComponent from "./Date.component.vue";
import DateTimeComponent from "./DateTime.component.vue";
import TimeComponent from "./Time.component.vue";
import NumberComponent from "./Number.component.vue";
import UrlComponent from "./Url.component.vue";
import SelectComponent from "./Select.component.vue";
import SelectUrlComponent from "./SelectUrl.component.vue";
import SelectObjectComponent from "./SelectObject.component.vue";
import GeoComponent from "./Geo.component.vue";
import AutocompleteComponent from "./AutoComplete.component.vue";
import { reactive, computed, onMounted } from "vue";

const props = defineProps({
    property: {
        type: String,
        required: true,
    },
    definition: {
        type: Object,
        required: true,
    },
    embedded: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits([
    "create:property",
    "create:object",
    "create:entity",
    "link:entity",
    "add:template",
]);

const data = reactive({
    simpleTypes: [
        "Text",
        "TextArea",
        "Date",
        "DateTime",
        "Time",
        "Number",
        "Float",
        "Integer",
        "URL",
        "Value",
        "Select",
        "SelectURL",
        "SelectObject",
        "Geo",
    ],
    addType: undefined,
});
let addSimpleType = computed(() => {
    return data.simpleTypes.includes(data.addType);
});
function close() {
    data.addType = undefined;
}
function add({ type }) {
    data.addType = type;
}
function createProperty(data) {
    emit("create:property", data);
    close();
}
function createObject(data) {
    emit("create:object", {
        property: props.property,
        ...data,
    });
    close();
}
function createEntity({ name }) {
    emit("create:entity", {
        etype: data.addType,
        property: props.property,
        entityName: name,
    });
    data.addType = undefined;
}
function linkEntity({ entity }) {
    emit("link:entity", {
        property: props.property,
        tgtEntityId: entity.id,
    });
    data.addType = undefined;
}
function addTemplate({ template }) {
    emit("add:template", {
        property: props.property,
        templateId: template.id,
    });
}
</script>
