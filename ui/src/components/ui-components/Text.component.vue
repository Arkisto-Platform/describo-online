<template>
    <el-input
        class="w-full"
        type="textarea"
        @input="debouncedSave"
        v-model="internalValue"
        resize="vertical"
    ></el-input>
</template>

<script>
import { debounce } from "lodash";

export default {
    props: {
        property: {
            type: String,
            required: true,
        },
        value: {
            type: String,
        },
    },
    data() {
        return {
            internalValue: this.value,
            debouncedSave: debounce(this.save, 1000),
        };
    },
    methods: {
        save() {
            this.$emit("save:property", {
                property: this.property,
                value: this.internalValue,
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
