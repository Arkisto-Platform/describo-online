<template>
    <div v-if="this.types.length !== 1" class="flex flex-row space-x-1">
        <div class="flex flex-row flex-wrap space-x-1" v-if="allowedTypes.length < 8">
            <div v-for="(type, idx) of allowedTypes" :key="idx" class="my-1">
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
                v-model="selectedType"
                placeholder="Select a type to add"
                @change="add"
                clearable
                size="small"
                class="w-full"
            >
                <el-option
                    v-for="(type, idx) in allowedTypes"
                    :key="idx"
                    :label="type"
                    :value="type"
                >
                </el-option>
            </el-select>
        </div>
        <div class="my-1">
            <el-button @click="close" size="small" v-if="this.selectedType">
                <i class="fas fa-times fa-fw"></i>
            </el-button>
        </div>
    </div>
</template>

<script>
import { isArray, isString } from "lodash";
export default {
    props: {
        types: {
            type: [String, Array],
            required: true,
        },
    },
    data() {
        return {
            selectedType: undefined,
            allowedTypes: [],
            typeExclusions: ["File", "Dataset"],
        };
    },
    watch: {
        types: function () {
            this.init();
        },
    },
    mounted() {
        this.init();
        if (this.types.length === 1) this.add(this.types[0]);
    },
    methods: {
        init() {
            if (isArray(this.types)) {
                this.allowedTypes = this.types.filter(
                    (type) => !this.typeExclusions.includes(type)
                );
            }
        },
        add(type) {
            this.selectedType = type;
            this.$emit("add", { type });
        },
        close() {
            this.selectedType = undefined;
            this.$emit("close");
        },
    },
};
</script>

<style lang="scss" scoped></style>
