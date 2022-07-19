<template>
    <div class="flex flex-row space-x-1">
        <div class="flex flex-row flex-wrap space-x-1" v-if="data.allowedTypes.length < 8">
            <div v-for="(type, idx) of data.allowedTypes" :key="idx" class="my-1">
                <el-button
                    @click="add(type)"
                    type="primary"
                    size="small"
                    class="focus:outline-none focus:border-2 focus:border-green-600"
                >
                    <i class="fas fa-plus"></i>&nbsp;{{ type }}
                </el-button>
            </div>
        </div>
        <div v-else>
            <el-select
                v-model="data.selectedType"
                placeholder="Select a type to add"
                @change="add"
                clearable
                size="small"
                class="w-full"
            >
                <el-option
                    v-for="(type, idx) in data.allowedTypes"
                    :key="idx"
                    :label="type"
                    :value="type"
                >
                </el-option>
            </el-select>
        </div>
        <div class="my-1">
            <el-button @click="close" size="small" v-if="data.selectedType">
                <i class="fas fa-times fa-fw"></i>
            </el-button>
        </div>
    </div>
</template>

<script setup>
import { isArray, isString } from "lodash";
import { reactive, onMounted, watch } from "vue";
const props = defineProps({
    types: {
        type: [String, Array],
        required: true,
    },
});

const emit = defineEmits(["add", "close"]);
const data = reactive({
    selectedType: undefined,
    allowedTypes: [],
    typeExclusions: ["File", "Dataset"],
});
watch(props.types, () => {
    init();
});
onMounted(() => {
    init();
});
function init() {
    if (isArray(props.types)) {
        data.allowedTypes = props.types.filter((type) => !data.typeExclusions.includes(type));
    }
}
function add(type) {
    data.selectedType = type;
    emit("add", { type });
}
function close() {
    data.selectedType = undefined;
    emit("close");
}
</script>
