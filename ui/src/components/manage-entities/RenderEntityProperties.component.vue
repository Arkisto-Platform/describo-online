<template>
    <div class="flex flex-col space-y-2 divide-y divide-grey-200">
        <div
            v-for="(values, name) of entity.forwardProperties"
            :key="generateKey('forward', name)"
            class="flex flex-row pt-2"
            :class="{
                'bg-green-200 my-1 p-1 rounded': data.update.success === name,
                'bg-red-200 my-1 p-1 rounded': data.update.error === name,
            }"
        >
            <render-entity-property-data-component
                :name="name"
                :values="values"
                :definition="getDefinition(name)"
                @create:property="createProperty"
                @create:entity="createEntity"
                @create:object="createObject"
                @link:entity="linkEntity"
                @add:template="addTemplate"
                @save:property="saveProperty"
                @delete:property="deleteProperty"
            />
        </div>
    </div>
</template>

<script setup>
import RenderEntityPropertyDataComponent from "./RenderEntityPropertyData.component.vue";
import { isString, isNumber, isPlainObject } from "lodash";
import { reactive } from "vue";

const props = defineProps({
    entity: {
        type: Object,
        required: true,
    },
    definition: {
        type: Object,
        required: true,
    },
    dataService: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["refresh"]);
const data = reactive({
    showHelp: false,
    update: {
        error: false,
        success: false,
    },
});

function generateKey(direction, name) {
    return `${direction}-${name}`;
}
function getDefinition(name) {
    return props.definition.inputs
        ? props.definition.inputs.filter((i) => i?.name === name)[0]
        : [];
}
async function saveProperty(d) {
    try {
        await props.dataService.updateProperty(d);
        data.update.success = d.property;
        setTimeout(() => {
            data.update.success = false;
        }, 1500);
    } catch (error) {
        data.update.error = d.property;
        setTimeout(() => {
            data.update.error = false;
        }, 1500);
    }
}
async function createProperty({ property, value }) {
    if (isString(value)) {
        await props.dataService.createProperty({
            srcEntityId: props.entity.id,
            property,
            value,
        });
        emit("refresh");
    } else if (isPlainObject(value)) {
        await createEntity({
            name: "",
            etype: "URL",
            eid: value["@id"],
        });
    }
}
async function deleteProperty({ entityId, propertyId }) {
    await props.dataService.deleteProperty({
        entityId,
        propertyId,
    });
    emit("refresh");
}
async function createEntity({ property, entityName, etype, eid }) {
    let entity = {
        eid,
        etype,
        name: entityName,
    };
    ({ entity } = await props.dataService.createEntity(entity));
    await props.dataService.associate({
        srcEntityId: props.entity.id,
        property,
        tgtEntityId: entity.id,
    });
    emit("refresh");
}
async function createObject({ property, ...data }) {
    let { entity } = await props.dataService.createEntity({
        eid: data["@id"],
        etype: data["@type"],
        name: data.name,
    });
    await props.dataService.associate({
        srcEntityId: props.entity.id,
        property,
        tgtEntityId: entity.id,
    });

    let properties = Object.keys(data).filter((k) => !["@id", "@type", "name"].includes(k));
    for (let property of properties) {
        if (isString(data[property]) || isNumber(data[property])) {
            await props.dataService.createProperty({
                srcEntityId: entity.id,
                property: property,
                value: data[property],
            });
        }
    }
    emit("refresh");
}
async function linkEntity({ property, tgtEntityId }) {
    await props.dataService.associate({
        srcEntityId: props.entity.id,
        property,
        tgtEntityId,
    });
    emit("refresh");
}
async function addTemplate({ property, templateId }) {
    let { entity } = await props.dataService.addTemplate({ templateId });
    linkEntity({ property, tgtEntityId: entity.id });
}
</script>
