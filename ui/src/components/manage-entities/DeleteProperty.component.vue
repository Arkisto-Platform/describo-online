<template>
    <div class="">
        <el-button @click="deleteProperty" type="danger" size="mini">
            <div v-show="type === 'unlink'" class="inline-block">
                <i class="fas fa-unlink"></i>
            </div>
            <div v-show="type === 'delete'" class="inline-block">
                <i class="fas fa-trash"></i>
            </div>
        </el-button>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "unlink",
            validator: (val) => {
                return ["delete", "unlink"].includes(val);
            },
        },
        property: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        async deleteProperty() {
            this.$emit("delete:property", {
                entityId: this.property.entityId,
                propertyId: this.property.id,
            });
        },
    },
};
</script>
