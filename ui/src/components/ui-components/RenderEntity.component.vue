<template>
    <el-card
        class="flex flex-col space-y-4"
        :class="{ 'pb-16': loading }"
        v-loading="loading"
    >
        <!-- <div>render entity '{{ id }}'</div> -->
        <!-- <div><el-button @click="getEntity">get entity</el-button></div> -->
        <div v-if="entity && entity.eid" class="flex flex-col space-y-2">
            <span v-if="entity.eid !== './'">
                <div class="flex flex-row">
                    <div class="w-64">@id:</div>
                    <entity-id-component
                        :value.sync="entity.eid"
                        @save:property="saveEntityProperty"
                    />
                </div>
                <div class="flex flex-row">
                    <div class="w-64">@type:</div>
                    <div>{{ entity.etype }}</div>
                </div>
            </span>
            <div class="flex flex-row">
                <div class="w-64">name:</div>

                <text-component
                    property="name"
                    :value.sync="entity.name"
                    @save:property="saveEntityProperty"
                />
            </div>

            <!-- render entity properties -->
            <div
                v-for="(properties, name) of entity.forwardProperties"
                :key="generateKey('forward', name)"
                class="flex flex-row"
            >
                <div class="w-64">{{ name }}</div>
                <div class="flex flex-col space-y-1">
                    <render-entity-property-component
                        v-for="property of properties"
                        :key="property.id"
                        :property="property"
                    />
                </div>
            </div>

            <!--render entities it links to  -->
            <div class="mt-4 text-lg">This entity is referenced by:</div>
            <div
                v-for="(properties, name) of entity.reverseProperties"
                :key="generateKey('reverse', name)"
                class="flex flex-row"
            >
                <div class="flex flex-col">
                    <render-entity-reverse-property-component
                        v-for="property of properties"
                        :key="property.id"
                        :linkingPropertyName="name"
                        :property="property"
                    />
                </div>
            </div>
            <!-- <div>
                <pre>{{ entity }}</pre>
            </div> -->
        </div>
    </el-card>
</template>

<script>
import { groupBy } from "lodash";
import { isUUID } from "validator";
import TextComponent from "./Text.component.vue";
import EntityIdComponent from "./EntityId.component.vue";
import RenderEntityPropertyComponent from "./RenderEntityProperty.component.vue";
import RenderEntityReversePropertyComponent from "./RenderEntityReverseProperty.component.vue";

export default {
    components: {
        RenderEntityPropertyComponent,
        RenderEntityReversePropertyComponent,
        EntityIdComponent,
        TextComponent,
    },
    props: {
        id: {
            type: String,
            required: true,
            validator: (val) => {
                return val === "RootDataset" || isUUID(val);
            },
        },
    },
    data() {
        return {
            loading: false,
            entity: undefined,
        };
    },
    watch: {
        id: function() {
            this.getEntity();
        },
    },
    mounted() {
        this.getEntity();
    },
    methods: {
        async getEntity() {
            this.loading = true;
            this.entity = {};
            let response = await this.$http.get({
                route: `/entity/${this.id}`,
            });
            if (response.status !== 200) {
                // handle error
            }
            let { entity } = await response.json();
            const forwardProperties = entity.properties.filter(
                (p) => p.direction !== "R"
            );
            const reverseProperties = entity.properties.filter(
                (p) => p.direction === "R"
            );
            entity.forwardProperties = groupBy(forwardProperties, "name");
            entity.reverseProperties = groupBy(reverseProperties, "name");
            delete entity.properties;
            this.entity = entity;
            this.loading = false;
        },
        async saveEntityProperty(data) {
            console.log(this.entity.id, data.property, data.value);
        },
        generateKey(direction, name) {
            return `${direction}-${name}`;
        },
    },
};
</script>
