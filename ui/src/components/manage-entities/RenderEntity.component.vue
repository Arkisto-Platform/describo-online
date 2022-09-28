<template>
    <div class="flex flex-col style-panel">
        <!-- <div>render entity '{{ id }}'</div> -->
        <div class="flex flex-row" v-if="!data.error">
            <div class="flex-grow" v-if="data.entity.id">
                <render-entity-controls-component
                    :entity="data.entity"
                    :definition="data.definition"
                    @refresh="getEntity"
                />

                <!-- render entity id -->
                <render-entity-id-component
                    class="px-1 pt-3 pb-4 border-b border-gray-200"
                    :entity="data.entity"
                    :data-service="dataService"
                    @get-entity="getEntity"
                    v-if="data.entity.eid !== './'"
                />

                <!-- render entity type -->
                <render-entity-type-component
                    class="px-1 pt-3 pb-4 border-b border-gray-200"
                    :entity="data.entity"
                />

                <!-- render entity name / label -->
                <render-entity-name-component
                    class="px-1 pt-3 pb-4 border-b border-gray-200"
                    :entity="data.entity"
                    :definition="data.definition"
                    :data-service="dataService"
                    @get-entity="getEntity"
                ></render-entity-name-component>

                <!-- render entity properties -->
                <render-entity-properties-component
                    :entity="data.entity"
                    :definition="data.definition"
                    :data-service="dataService"
                    @refresh="getEntity"
                />

                <!--render entities it links to  -->
                <render-entity-reverse-properties-component
                    class="mt-2"
                    v-if="data.entity.reverseProperties"
                    :entity="data.entity"
                />

                <render-entity-controls-component
                    class="mt-2"
                    :entity="data.entity"
                    :definition="data.definition"
                    @refresh="getEntity"
                />
            </div>
            <div class="flex flex-col flex-grow" v-if="data.tabs.length">
                <render-entity-controls-component
                    :entity="data.tabs[0].entity"
                    :definition="data.definition"
                    @refresh="getEntity"
                />
                <el-tabs tab-position="left" v-model="data.activeTab">
                    <el-tab-pane label="About" name="about">
                        <template #label>
                            <span class="cursor-pointerspace text-gray-600"> About </span>
                        </template>
                        <!-- render entity id -->
                        <render-entity-id-component
                            class="mb-2"
                            :entity="data.tabs[0].entity"
                            :data-service="dataService"
                            @get-entity="getEntity"
                        />
                        <!-- render entity type -->
                        <render-entity-type-component
                            class="mb-2"
                            :entity="data.tabs[0].entity"
                            v-if="data.entity.eid !== './'"
                        />

                        <!-- render entity name / label -->
                        <render-entity-name-component
                            class="mb-2"
                            :entity="data.tabs[0].entity"
                            :definition="data.definition"
                            :data-service="dataService"
                            @get-entity="getEntity"
                        ></render-entity-name-component>

                        <!--render entities it links to  -->
                        <render-entity-reverse-properties-component
                            class="mt-2"
                            v-if="data.tabs[0].entity.reverseProperties"
                            :entity="data.tabs[0].entity"
                        />
                    </el-tab-pane>
                    <el-tab-pane
                        :label="tab.name"
                        :name="tab.name"
                        v-for="(tab, idx) of data.tabs.slice(1)"
                        :key="idx"
                    >
                        <template #label>
                            <span class="cursor-pointer text-gray-600">{{ tab.name }}</span>
                        </template>
                        <!-- render entity properties -->
                        <render-entity-properties-component
                            v-if="data.activeTab === tab.name"
                            :entity="tab.entity"
                            :definition="data.definition"
                            :data-service="dataService"
                            @refresh="getEntity"
                        />
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div v-if="data.error" class="flex-grow bg-red-200 p-2 text-center rounded">
                {{ data.error }}
            </div>

            <!-- <div
                class="pl-2 flex flex-col justify-items-start"
                :class="{
                    'w-1/2 lg:w-2/5': data.entity.etype === 'File',
                    'w-0 hidden': data.entity.etype !== 'File',
                }"
            >
                <render-entity-preview-component :entity="data.entity" />
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { isUUID } from "validator";
import TextComponent from "./Text.component.vue";
import EntityIdComponent from "./EntityId.component.vue";
import RenderEntityIdComponent from "./RenderEntityId.component.vue";
import RenderEntityTypeComponent from "./RenderEntityType.component.vue";
import RenderEntityNameComponent from "./RenderEntityName.component.vue";
import RenderEntityPropertiesComponent from "./RenderEntityProperties.component.vue";
import RenderEntityReversePropertiesComponent from "./RenderEntityReverseProperties.component.vue";
import RenderEntityControlsComponent from "./RenderEntityControls.component.vue";
import RenderEntityPreviewComponent from "./RenderEntityPreview.component.vue";
import DataService from "./data.service.js";
import { merge, cloneDeep } from "lodash";
import { computed, watch, onMounted, reactive, inject } from "vue";
import { useStore } from "vuex";
const store = useStore();
const socket = inject("$socket");
const dataService = new DataService();

const props = defineProps({
    id: {
        type: String,
        required: true,
        validator: (val) => {
            return val === "RootDataset" || isUUID(val);
        },
    },
});
const data = reactive({
    activeTab: "about",
    entity: {
        forwardProperties: {},
        reverseProperties: {},
    },
    tabs: [],
    definition: {
        inputs: [],
    },
    error: undefined,
});
let profile = computed(() => {
    return store.state.profile;
});
watch(
    () => props.id,
    () => {
        data.entity = {
            forwardProperties: {},
            reverseProperties: {},
        };
        data.tabs = [];
        getEntity();
    }
);
watch(profile, () => {
    if (profile.value?.name) {
        data.entity = {
            forwardProperties: {},
            reverseProperties: {},
        };
        data.tabs = [];
        getEntity();
    }
});
onMounted(() => {
    // socket.on("ENTITY_UPDATED_HANDLER", (response) => {
    //     getEntity();
    // });
    getEntity();
});
function loadRootDataset() {
    store.commit("setSelectedEntity", { id: "RootDataset" });
}
async function getEntity() {
    data.error = undefined;
    await new Promise((resolve) => setTimeout(resolve, 200));
    try {
        let { entity } = await dataService.getEntity({
            id: props.id,
        });
        entity = { ...entity };

        const { definition } = await dataService.getEntityTypeDefinition({
            type: entity.etype,
        });
        data.definition = cloneDeep(definition);
        const { properties } = await dataService.getEntityProperties({
            id: entity.id,
        });
        entity = {
            ...entity,
            ...properties,
        };

        if (data.definition?.classDefinitionType === "override") {
            data.definition.inputs.forEach((input) => {
                if (input.name === "name") return;
                if (entity.forwardProperties[input.name]) {
                    entity.forwardProperties[input.name] = entity.forwardProperties[input.name];
                } else {
                    entity.forwardProperties[input.name] = [];
                }
            });
        }
        let forwardProperties = {};
        let propertyNames = [];
        Object.keys(entity.forwardProperties).map((k) => (propertyNames[k.toLowerCase()] = k));
        Object.keys(entity.forwardProperties)
            .map((k) => k.toLowerCase())
            .sort()
            .forEach(
                (k) =>
                    (forwardProperties[propertyNames[k]] =
                        entity.forwardProperties[propertyNames[k]])
            );
        entity.forwardProperties = forwardProperties;
        let layout = applyLayout({ layout: definition.layout, hide: definition.hide, entity });
        if (layout.entity) {
            data.entity = { ...data.entity, ...layout.entity };
        } else if (layout.tabs) {
            data.tabs = cloneDeep(layout.tabs);
        }
    } catch (error) {
        data.error = error.message;
    }
}

function applyLayout({ layout, hide = [], entity }) {
    if (!layout?.length) return { entity };

    let tabs = [];
    tabs.push({ name: "About", entity: cloneDeep(entity) });

    let mappedInputs = [];
    layout.forEach((section) => {
        let sectionEntity = cloneDeep(entity);
        sectionEntity.forwardProperties = {};
        tabs.push({
            name: section.name,
            description: section?.description,
            entity: sectionEntity,
        });
        section.inputs.forEach((input) => {
            let property = Object.keys(entity.forwardProperties).filter(
                (property) => property === input
            );
            if (property.length && !hide.includes(input)) {
                mappedInputs.push(input);
                sectionEntity.forwardProperties[input] = entity.forwardProperties[input];
            }
        });
    });

    let unmappedInputs = Object.keys(entity.forwardProperties).filter(
        (p) => !mappedInputs.includes(p)
    );
    if (unmappedInputs.length) {
        let sectionEntity = cloneDeep(entity);
        sectionEntity.forwardProperties = {};
        unmappedInputs.forEach((p) => {
            if (!hide.includes(p)) {
                sectionEntity.forwardProperties[p] = entity.forwardProperties[p];
            }
        });
        tabs.push({ name: "...", description: "", entity: sectionEntity });
    }

    return { tabs };
}
</script>

<style lang="scss" scoped>
.style-panel {
    min-height: 200px;
}
</style>
