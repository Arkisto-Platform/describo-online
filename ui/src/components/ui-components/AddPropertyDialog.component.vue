<template>
    <el-dialog
        title="Add a property to this Entity"
        :visible="visible"
        width="80%"
        @close="close"
    >
        <div v-if="visible" class="flex flex-col">
            <el-select
                v-model="property"
                filterable
                clearable
                placeholder="Select a property to add"
                @change="handlePropertySelection"
            >
                <el-option
                    v-for="item in inputs"
                    :key="item.property"
                    :label="item.property"
                    :value="item.property"
                >
                    <div class="flex flex-row">
                        <div class="w-64 text-gray-600">
                            {{ item.property }}
                        </div>
                        <div class="w-96 text-gray-500">
                            {{ item.help }}
                        </div>
                    </div>
                </el-option>
            </el-select>
            <div v-if="selectedProperty" class="flex flex-col">
                <div class="text-sm text-gray-600">
                    {{ selectedProperty.help }}
                </div>
                <add-component
                    :property="property"
                    :definition="selectedProperty"
                    @create:property="createProperty"
                />
            </div>
        </div>
    </el-dialog>
</template>

<script>
import DataService from "./data.service.js";
import AddComponent from "./Add.component.vue";

export default {
    components: {
        AddComponent,
    },
    props: {
        inputs: {
            type: Array,
            required: true,
        },
        visible: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            property: undefined,
            selectedProperty: undefined,
            addType: undefined,
        };
    },
    methods: {
        close() {
            this.property = undefined;
            this.selectedProperty = undefined;
            this.addType = undefined;
            this.$emit("close");
        },
        handlePropertySelection() {
            this.selectedProperty = this.inputs.filter(
                (i) => i.property === this.property
            )[0];
        },
        add({ type }) {
            console.log("add type", type);
            this.addType = type;
        },
        createProperty(value) {
            this.$emit("create:property", value);
            this.close();
        },
    },
};
</script>
