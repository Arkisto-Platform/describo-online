<template>
    <div
        class="flex flex-row text-gray-800 px-2 py-1 rounded text-sm"
        :class="{
            'justify-left': props.align === 'left',
            'justify-center': props.align === 'center',
            'justify-right': props.align === 'right',
            'bg-blue-200': props.type === 'info',
            'bg-green-200': props.type === 'success',
            'bg-yellow-200': props.type === 'warning',
            'bg-red-200': props.type === 'danger',
        }"
    >
        <div class="text-blue-600 text-xl" v-show="props.type === 'info'">
            <i class="fas fa-info-circle"></i>
        </div>
        <div class="text-green-600 text-xl" v-show="props.type === 'success'">
            <i class="far fa-check-circle"></i>
        </div>
        <div class="text-yellow-600 text-xl" v-show="props.type === 'warning'">
            <i class="fas fa-exclamation-triangle"></i>
        </div>
        <div class="text-red-600 text-xl" v-show="props.type === 'danger'">
            <i class="fas fa-radiation-alt"></i>
        </div>
        <div class="ml-2 pt-1">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    align: {
        type: String,
        default: "center",
        validator: (val) => {
            return ["left", "center", "right"].includes(val);
        },
    },
    type: {
        type: String,
        required: true,
        validator: (val) => {
            return ["info", "success", "warning", "danger"].includes(val);
        },
    },
});
</script>
