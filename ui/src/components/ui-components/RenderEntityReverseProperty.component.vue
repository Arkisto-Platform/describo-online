<template>
    <div class="flex flex-row">
        <div v-loading="loading" class="py-2" v-if="loading"></div>
        <render-reverse-item-link-component
            :linkingPropertyName="linkingPropertyName"
            :tgtEntity="tgtEntity"
            v-if="tgtEntity"
        />
    </div>
</template>

<script>
import RenderReverseItemLinkComponent from "./RenderReverseItemLink.component.vue";

export default {
    components: {
        RenderReverseItemLinkComponent,
    },
    props: {
        linkingPropertyName: {
            type: String,
            required: true,
        },
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
        async saveProperty(data) {
            console.log(
                this.property.id,
                this.property.entityId,
                data.property,
                data.value
            );
        },
    },
};
</script>
