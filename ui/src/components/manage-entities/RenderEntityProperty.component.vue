<template>
    <div>
        <div v-if="property.value" class="flex flex-row">
            <date-component
                :property="property.name"
                :value.sync="property.value"
                @save:property="savePropertyValue"
                v-if="isDate(property.value)"
            />
            <text-component
                v-else
                :property="property.name"
                :value.sync="property.value"
                @save:property="savePropertyValue"
            />
            <delete-property-component
                class="pl-2"
                :property="property"
                @refresh="$emit('refresh')"
            />
        </div>
        <div v-else class="flex flex-row">
            <div v-loading="loading" class="py-2" v-if="loading"></div>
            <render-linked-item-component
                :entity="property"
                @refresh="$emit('refresh')"
            />
        </div>
    </div>
</template>

<script>
import RenderLinkedItemComponent from "./RenderLinkedItem.component.vue";
import RenderReverseItemLinkComponent from "./RenderReverseItemLink.component.vue";
import DeletePropertyComponent from "./DeleteProperty.component.vue";
import TextComponent from "./Text.component.vue";
import DateComponent from "./Date.component.vue";
import DataService from "./data.service.js";
import { parse, parseISO, isDate, isValid } from "date-fns";

export default {
    components: {
        RenderLinkedItemComponent,
        RenderReverseItemLinkComponent,
        DeletePropertyComponent,
        TextComponent,
        DateComponent,
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
        };
    },

    methods: {
        async savePropertyValue(data) {
            this.$emit("save:property", {
                entityId: this.property.entityId,
                propertyId: this.property.id,
                property: data.property,
                value: data.value,
            });
        },
        isDate(string) {
            const date = parseISO(string);
            return isValid(date);
        },
    },
};
</script>
