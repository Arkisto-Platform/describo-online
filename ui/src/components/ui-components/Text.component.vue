<template>
    <div class="flex flex-col">
        <div class="flex flex-row">
            <el-input
                class="w-full style-element"
                @input="debouncedSave"
                v-model="internalValue"
            ></el-input>
        </div>
    </div>
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

<style lang="scss" scoped>
.style-element {
    min-width: 400px;
}
</style>
