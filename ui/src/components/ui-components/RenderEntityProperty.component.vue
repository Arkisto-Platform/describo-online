<template>
    <div class="flex flex-row">
        <div v-if="property.value">
            <text-component
                :property="property.name"
                :value.sync="property.value"
                @save:property="saveProperty"
            />
        </div>
        <div v-else>
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
