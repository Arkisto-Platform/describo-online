<template>
    <el-card
        class="flex flex-col space-y-4"
        :class="{ 'pb-16': loading }"
        v-loading="loading"
    >
        <!-- <div>render entity '{{ id }}'</div> -->
        <div class="my-8">
            <el-button @click="getEntity">get entity</el-button>
        </div>
        <div v-if="entity && entity.eid" class="flex flex-col space-y-2">
            <span v-if="entity.eid !== './'">
                <div
                    class="flex flex-row"
                    :class="{
                        'bg-green-200 p-1 rounded': success === 'eid',
                        'bg-red-200 p-1 rounded': error === 'eid',
                    }"
                >
                    <div class="w-64 pt-1">
                        @id:
                    </div>
                    <entity-id-component
                        :value.sync="entity.eid"
                        @save:property="saveEntityProperty"
                    />
                </div>
                <div class="flex flex-row">
                    <div class="w-64 pt-1">@type:</div>
                    <div>{{ entity.etype }}</div>
                </div>
            </span>
            <div
                class="flex flex-row"
                :class="{
                    'bg-green-200 p-1 rounded': success === 'name',
                    'bg-red-200 p-1 rounded': error === 'name',
                }"
            >
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
import { isUUID } from "validator";
import TextComponent from "./Text.component.vue";
import EntityIdComponent from "./EntityId.component.vue";
import RenderEntityPropertyComponent from "./RenderEntityProperty.component.vue";
import RenderEntityReversePropertyComponent from "./RenderEntityReverseProperty.component.vue";
import DataService from "./data.service.js";

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
            dataService: undefined,
            entity: undefined,
            error: false,
            success: false,
        };
    },
    watch: {
        id: function() {
            this.getEntity();
        },
    },
    mounted() {
        this.dataService = new DataService({
            $http: this.$http,
            $log: this.$log,
        });
        this.getEntity();
    },
    methods: {
        async getEntity() {
            this.loading = true;
            this.entity = {};
            this.entity = await this.dataService.getEntity({ id: this.id });
            this.loading = false;
        },
        async saveEntityProperty(data) {
            try {
                await this.dataService.updateEntityProperty({
                    id: this.entity.id,
                    property: data.property,
                    value: data.value,
                });
                this.success = data.property;
                setTimeout(() => {
                    this.success = false;
                }, 1500);
            } catch (error) {
                this.error = data.property;
                setTimeout(() => {
                    this.error = false;
                    this.getEntity();
                }, 1500);
            }
        },
        generateKey(direction, name) {
            return `${direction}-${name}`;
        },
    },
};
</script>
