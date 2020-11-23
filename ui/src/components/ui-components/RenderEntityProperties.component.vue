<template>
    <div class="flex flex-col space-y-1">
        <div
            v-for="(properties, name) of properties"
            :key="generateKey('forward', name)"
            class="flex flex-row"
            :class="{
                'bg-green-200 my-1 p-1 rounded': update.success === name,
                'bg-red-200 my-1 p-1 rounded': update.erro === name,
            }"
        >
            <div class="w-64">
                {{ name }}
            </div>
            <div class="w-full flex flex-col space-y-1">
                <div class="flex flex-row space-x-2">
                    <add-component
                        :property="name"
                        :definition="definition(name)"
                        @create:property="createProperty"
                    />
                    <div>
                        <el-button
                            @click="toggleHelp(name)"
                            type="primary"
                            size="mini"
                            ><i class="fas fa-question-circle"></i
                        ></el-button>
                    </div>
                    <div
                        class="text-sm text-gray-600 p-4 bg-green-100 rounded w-full"
                        v-if="showHelp === name"
                    >
                        {{ help(name) }}
                    </div>
                </div>
                <render-entity-property-component
                    v-for="property of properties"
                    :key="property.id"
                    :property="property"
                    @save:property="saveProperty"
                    @refresh="$emit('refresh')"
                />
            </div>
        </div>
    </div>
</template>

<script>
import RenderEntityPropertyComponent from "./RenderEntityProperty.component.vue";
import AddComponent from "./Add.component.vue";
import DataService from "./data.service.js";

export default {
    components: {
        RenderEntityPropertyComponent,
        AddComponent,
    },
    props: {
        entity: {
            type: Object,
            required: true,
        },
        properties: {
            type: Object,
            required: true,
        },
        inputs: {
            type: Array,
        },
    },
    data() {
        return {
            showHelp: false,
            update: {
                error: false,
                success: false,
            },
        };
    },
    mounted() {
        this.dataService = new DataService({
            $http: this.$http,
            $log: this.$log,
        });
    },
    methods: {
        generateKey(direction, name) {
            return `${direction}-${name}`;
        },
        definition(name) {
            return this.inputs
                ? this.inputs.filter((i) => i?.property === name)[0]
                : {};
        },
        help(name) {
            return this.definition(name)?.help;
        },
        async saveProperty(data) {
            console.log(data);
            try {
                await this.dataService.updateProperty(data);
                this.update.success = data.property;
                setTimeout(() => {
                    this.update.success = false;
                }, 1500);
            } catch (error) {
                this.update.error = data.property;
                setTimeout(() => {
                    this.update.error = false;
                }, 1500);
            }
        },
        async createProperty({ property, value }) {
            await this.dataService.createProperty({
                srcEntityId: this.entity.id,
                property,
                value,
            });
            this.$emit("refresh");
        },
        toggleHelp(name) {
            this.showHelp = this.showHelp !== name ? name : false;
        },
    },
};
</script>
