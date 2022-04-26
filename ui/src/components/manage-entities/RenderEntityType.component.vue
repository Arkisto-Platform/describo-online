<template>
    <div class="flex flex-row">
        <div class="w-64">Type</div>
        <div class="flex-grow">{{ entity.etype }}</div>
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
