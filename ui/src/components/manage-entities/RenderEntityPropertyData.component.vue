<template>
    <div class="flex flex-row flex-grow p-1">
        <div class="w-64 flex flex-col">
            <div>
                <display-property-name-component
                    :label="name"
                    class="inline-block"
                    :class="{ 'text-red-600': isRequired && !isValid }"
                />
                <el-badge is-dot class="animate-pulse -ml-1 -mt-2" v-if="isRequired && !isValid">
                </el-badge>
            </div>
            <div v-if="!definition" class="text-red-600 text-xs">(not defined in profile)</div>
        </div>
        <div class="flex flex-col flex-grow space-y-2">
            <information-component type="info" align="left" v-if="showHelp">
                {{ help }}
            </information-component>
            <div class="flex flex-row space-x-2">
                <div v-if="help">
                    <el-button @click="showHelp = !showHelp" type="primary" size="mini">
                        <i class="fas fa-question-circle"></i>
                    </el-button>
                </div>
                <add-component
                    class="flex-grow"
                    :property="name"
                    :definition="definition"
                    :embedded="false"
                    @create:property="createProperty"
                    @create:entity="createEntity"
                    @link:entity="linkEntity"
                    @add:template="addTemplate"
                />
            </div>
            <render-entity-property-instance-component
                v-for="instance of values"
                :key="instance.id"
                :property="instance"
                :definition="definition"
                @save:property="saveProperty"
                @delete:property="deleteProperty"
                @refresh="$emit('refresh')"
            />
        </div>
    </div>
</template>

<script>
import RenderEntityPropertyInstanceComponent from "./RenderEntityPropertyInstance.component.vue";
import InformationComponent from "../Information.component.vue";
import AddComponent from "./Add.component.vue";
import DisplayPropertyNameComponent from "./DisplayPropertyName.component.vue";

export default {
    components: {
        RenderEntityPropertyInstanceComponent,
        InformationComponent,
        AddComponent,
        DisplayPropertyNameComponent,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        values: {
            type: Array,
            required: true,
        },
        definition: {
            type: Object,
        },
    },
    data() {
        return {
            help: this.definition?.help,
            showHelp: false,
        };
    },
    computed: {
        isValid() {
            return this.values.length ? true : false;
        },
        isRequired() {
            return this.definition?.required;
        },
    },
    methods: {
        createProperty(data) {
            this.$emit("create:property", data);
        },
        createEntity(data) {
            this.$emit("create:entity", data);
        },
        linkEntity(data) {
            this.$emit("link:entity", data);
        },
        addTemplate(data) {
            this.$emit("add:template", data);
        },
        saveProperty(data) {
            this.$emit("save:property", data);
        },
        deleteProperty(data) {
            this.$emit("delete:property", data);
        },
    },
};
</script>
