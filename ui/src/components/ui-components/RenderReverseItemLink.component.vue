<template>
    <div
        class="flex flex-col bg-red-200 p-4 cursor-pointer rounded"
        @click="loadEntity"
    >
        <!-- <div class="text-xs text-gray-600">
            {{ tgtEntity.id }}
        </div> -->
        <div class="text-sm">
            <span class="text-gray-800 mr-2 flex flex-row">
                <type-icon-component
                    class="mr-2 text-gray-700"
                    :type="tgtEntity.etype"
                />
                {{ tgtEntity.etype }}
                - {{ tgtEntity.name }}:
                {{ linkingPropertyName }}
            </span>
        </div>
    </div>
</template>

<script>
import TypeIconComponent from "./TypeIcon.component.vue";

export default {
    components: {
        TypeIconComponent,
    },
    props: {
        linkingPropertyName: {
            type: String,
            required: true,
        },
        tgtEntity: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        loadEntity() {
            this.$store.commit("setSelectedEntity", { id: this.tgtEntity.id });
        },
    },
};
</script>
