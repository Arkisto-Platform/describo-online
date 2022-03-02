<template>
    <div
        class="flex flex-row"
        :class="{
            'bg-green-200 p-1 rounded': update.success === property,
            'bg-red-200 p-1 rounded': update.error === property,
        }"
        v-if="propertyDefinition"
    >
        <div class="w-64 pt-2">
            <div v-if="propertyDefinition.label">
                <display-property-name-component :label="propertyDefinition.label" />
            </div>
            <div v-else><display-property-name-component :label="property" /></div>
        </div>

        <div class="flex-grow">
            <text-component
                class="w-full"
                type="text"
                :property="property"
                :value.sync="entity.name"
                @save:property="saveEntityProperty"
            />
        </div>
    </div>
</template>

<script>
import TextComponent from "./Text.component.vue";
import DisplayPropertyNameComponent from "./DisplayPropertyName.component.vue";

export default {
    components: {
        TextComponent,
        DisplayPropertyNameComponent,
    },
    props: {
        entity: {
            type: Object,
            required: true,
        },
        inputDefinitions: {
            type: Array,
            required: true,
        },
        dataService: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            property: "name",
            propertyDefinition: this.inputDefinitions.filter((i) => i.name === "name")?.[0],
            update: {
                error: false,
                success: false,
            },
        };
    },
    methods: {
        async saveEntityProperty(data) {
            try {
                await this.dataService.updateEntityProperty({
                    id: this.entity.id,
                    property: data.property,
                    value: data.value,
                });
                this.update.success = data.property;
                setTimeout(() => {
                    this.update.success = false;
                }, 1500);
            } catch (error) {
                this.update.error = data.property;
                setTimeout(() => {
                    this.update.error = false;
                    this.$emit("getEntity");
                }, 1500);
            }
        },
    },
};
</script>
