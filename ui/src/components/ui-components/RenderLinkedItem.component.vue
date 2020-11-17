<template>
    <div
        class="flex flex-col bg-yellow-200 p-4 cursor-pointer rounded"
        @click="loadEntity"
    >
        <!-- <div class="text-xs text-gray-600">
            {{ tgtEntity.id }}
        </div> -->
        <div class="text-sm">
            <span class="text-gray-800 mr-2">{{ tgtEntity.etype }}:</span
            >{{ tgtEntity.name }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
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
