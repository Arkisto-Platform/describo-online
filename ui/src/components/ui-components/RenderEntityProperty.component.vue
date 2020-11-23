<template>
    <div>
        <div v-if="property.value" class="flex flex-row">
            <text-component
                :property="property.name"
                :value.sync="property.value"
                @save:property="savePropertyValue"
            />
        </div>
        <div v-else class="flex flex-row">
            <div v-loading="loading" class="py-2" v-if="loading"></div>
            <render-linked-item-component
                :tgtEntity="tgtEntity"
                v-if="tgtEntity"
            />
        </div>
    </div>
</template>

<script>
import RenderLinkedItemComponent from "./RenderLinkedItem.component.vue";
import RenderReverseItemLinkComponent from "./RenderReverseItemLink.component.vue";
import TextComponent from "./Text.component.vue";
import DataService from "./data.service.js";

export default {
    components: {
        RenderLinkedItemComponent,
        RenderReverseItemLinkComponent,
        TextComponent,
    },
    props: {
        property: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            loading: false,
            tgtEntity: undefined,
        };
    },
    mounted() {
        this.dataService = new DataService({ $http: this.$http });
        if (this.property.tgtEntityId) {
            this.loadTgtEntity();
        }
    },
    methods: {
        async loadTgtEntity() {
            this.loading = true;
            let response = await this.$http.get({
                route: `/entity/${this.property.tgtEntityId}?simple=true`,
            });
            if (response.status !== 200) {
                // handle error
            }
            let { entity } = await response.json();
            this.tgtEntity = entity;
            this.loading = false;
        },
        async savePropertyValue(data) {
            this.$emit("save:property", {
                entityId: this.property.entityId,
                propertyId: this.property.id,
                property: data.property,
                value: data.value,
            });
        },
    },
};
</script>
