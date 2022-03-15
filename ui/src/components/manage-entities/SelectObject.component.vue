<template>
    <div>
        <el-select
            class="w-full"
            size="mini"
            v-model="internalValue"
            placeholder="Select"
            @change="save"
        >
            <el-option
                v-for="(item, idx) in definition.values"
                :key="idx"
                :value="item"
                :value-key="item['@id']"
            >
                <span>{{ item.name }} ({{ item["@id"] }})</span>
            </el-option>
        </el-select>
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
            required: true,
        },
    },
    data() {
        return {
            internalValue: this.value,
        };
    },
    methods: {
        save() {
            this.$emit("create:object", {
                property: this.property,
                ...this.internalValue,
            });
        },
    },
};
</script>
