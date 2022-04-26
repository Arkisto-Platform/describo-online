<template>
    <div></div>
</template>

<script setup>
import { setSessionSID } from "./http.service";
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

onMounted(async () => {
    setSessionSID({ sid: route.query.sid });
    router.replace({ path: "/login" });
});
</script>
