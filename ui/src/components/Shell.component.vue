<template>
    <div class="flex flex-col">
        <navigation-component />
        <router-view class="m-2" />
    </div>
</template>

<script setup>
import NavigationComponent from "@/components/Navigation.component.vue";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
const route = useRoute();
const router = useRouter();
const store = useStore();

onMounted(() => {
    if (route.path === "/") router.replace({ path: "/select-target" });
});
</script>
