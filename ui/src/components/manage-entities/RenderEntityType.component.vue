<template>
    <div class="flex flex-row">
        <div class="w-64">Type</div>
        <div class="flex-grow">{{ entity.etype }}</div>
    </div>
</template>

<script>
export default {
    props: {
        entity: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
};
</script>
