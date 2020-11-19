<template>
    <el-card class="flex flex-col style-panel" v-loading="loading">
        <!-- <div>render entity '{{ id }}'</div> -->
        <div class="my-8">
            <el-button @click="getEntity">get entity</el-button>
        </div>
        <div v-if="entity && entity.eid">
            <!-- render entity name and id -->
            <render-entity-header-component :entity="entity" class="my-1" />

            <!-- render entity properties -->
            <render-entity-properties-component
                :properties="entity.forwardProperties"
            />

            <!--render entities it links to  -->
            <render-entity-reverse-properties-component
                :properties="entity.reverseProperties"
            />
        </div>
        <div v-if="error" class="bg-red-200 p-2 text-center rounded">
            {{ error }}
        </div>
    </el-card>
</template>

<script>
import { isUUID } from "validator";
import TextComponent from "./Text.component.vue";
import EntityIdComponent from "./EntityId.component.vue";
import RenderEntityHeaderComponent from "./RenderEntityHeader.component.vue";
import RenderEntityPropertiesComponent from "./RenderEntityProperties.component.vue";
import RenderEntityReversePropertiesComponent from "./RenderEntityReverseProperties.component.vue";
import DataService from "./data.service.js";

export default {
    components: {
        RenderEntityHeaderComponent,
        RenderEntityPropertiesComponent,
        RenderEntityReversePropertiesComponent,
        EntityIdComponent,
        TextComponent,
    },
    props: {
        id: {
            type: String,
            required: true,
            validator: (val) => {
                return val === "RootDataset" || isUUID(val);
            },
        },
    },
    data() {
        return {
            loading: false,
            dataService: undefined,
            entity: undefined,
            error: undefined,
        };
    },
    watch: {
        id: function() {
            this.getEntity();
        },
    },
    mounted() {
        this.dataService = new DataService({
            $http: this.$http,
            $log: this.$log,
        });
        this.getEntity();
    },
    methods: {
        async getEntity() {
            this.error = undefined;
            this.loading = true;
            this.entity = {};
            try {
                this.entity = await this.dataService.getEntity({ id: this.id });
            } catch (error) {
                this.error = error.message;
            }
            this.loading = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.style-panel {
    min-height: 200px;
}
</style>
