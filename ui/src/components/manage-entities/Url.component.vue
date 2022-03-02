<template>
    <div class="flex flex-row flex-grow space-x-2">
        <div class="flex-grow">
            <el-input
                class="w-full"
                type="text"
                v-model="internalValue"
                resize="vertical"
                :rows="5"
            ></el-input>
        </div>
        <el-button @click="save" type="success" size="mini">
            <i class="fas fa-check fa-fw"></i>
        </el-button>
    </div>
</template>

<script>
export default {
    props: {
        property: {
            type: String,
            required: true,
        },
        value: {
            type: String,
        },
        definition: {
            type: Object,
        },
    },
    data() {
        return {
            internalValue: this.value,
        };
    },
    watch: {
        value: function() {
            this.internalValue = this.value;
        },
    },
    methods: {
        save() {
            this.$emit("save:property", {
                property: this.property,
                value: { "@id": this.internalValue },
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
