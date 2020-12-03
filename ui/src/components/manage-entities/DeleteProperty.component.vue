<template>
    <div class="">
        <el-button @click="deleteProperty" type="danger" size="mini">
            <i class="fas fa-unlink"></i>
        </el-button>
    </div>
</template>

<script>
import DataService from "./data.service.js";

export default {
    props: {
        property: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    mounted() {
        this.dataService = new DataService({
            $http: this.$http,
            $log: this.$log,
        });
    },
    methods: {
        async deleteProperty() {
            await this.dataService.deleteProperty({
                entityId: this.property.entityId,
                propertyId: this.property.id,
            });
            this.$emit("refresh");
        },
    },
};
</script>
