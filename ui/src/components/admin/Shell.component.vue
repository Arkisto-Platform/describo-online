<template>
    <div class="flex flex-col p-4 bg-gray-100 w-screen h-screen">
        <router-view />
    </div>
</template>

<script setup>
import { removeToken } from "@/components/http.service";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onMounted(() => {
    removeToken();
    router.push("/admin/login").catch(() => {});
});
</script>
