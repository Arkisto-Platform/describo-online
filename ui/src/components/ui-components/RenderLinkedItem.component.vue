<template>
    <div class="flex flex-row">
        <div
            class="flex flex-col bg-yellow-200 p-4 cursor-pointer rounded-l"
            @click="loadEntity"
        >
            <div class="text-sm flex flex-row">
                <type-icon-component
                    class="mr-2 text-gray-700"
                    :type="entity.tgtEntityType"
                    v-if="entity.tgtEntityType"
                />
                {{ entity.tgtEntityType }}:
                {{ entity.tgtEntityName }}
            </div>
        </div>
        <delete-property-component
            class="bg-yellow-200 cursor-pointer rounded-r"
            :property="entity"
            @refresh="$emit('refresh')"
        />
    </div>
</template>

<script>
import TypeIconComponent from "./TypeIcon.component.vue";
import DeletePropertyComponent from "./DeleteProperty.component.vue";

export default {
    components: {
        TypeIconComponent,
        DeletePropertyComponent,
    },
    props: {
        entity: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        loadEntity() {
            this.$store.commit("setSelectedEntity", {
                id: this.entity.tgtEntityId,
            });
        },
    },
};
</script>
