<template>
    <div class="flex flex-row p-1 pr-2 pt-3 pb-4 border-b border-gray-200">
        <div class="w-1/3 xl:w-1/5">Type</div>
        <div class="w-2/3 xl:w-4/5 flex-grow">{{ entity.etype }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    entity: {
        type: Object,
        required: true,
    },
});
</script>
