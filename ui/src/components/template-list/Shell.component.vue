<template>
    <div class="flex flex-col">
        <navigation-component />
        <div class="p-2">
            <template-list-component />
        </div>
    </div>
</template>

<script setup>
import NavigationComponent from "@/components/Navigation.component.vue";
import TemplateListComponent from "./TemplateList.component.vue";
</script>
