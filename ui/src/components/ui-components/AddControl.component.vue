<template>
    <div>
        <el-button
            v-for="(type, idx) of allowedTypes"
            :key="idx"
            @click="add(type)"
            type="success"
            size="mini"
            class="focus:outline-none focus:border-2 focus:border-green-600"
        >
            <i class="fas fa-plus"></i>&nbsp;{{ type }}
        </el-button>
    </div>
</template>

<script>
export default {
    props: {
        types: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            allowedTypes: [],
            typeExclusions: ["File", "Dataset"],
        };
    },
    watch: {
        types: function() {
            this.init();
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.allowedTypes = this.types.filter(
                (type) => !this.typeExclusions.includes(type)
            );
        },
        add(type) {
            this.$emit("add", { type });
        },
    },
};
</script>

<style lang="scss" scoped></style>
