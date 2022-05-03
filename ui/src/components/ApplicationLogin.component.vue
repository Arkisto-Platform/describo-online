<template>
    <div></div>
</template>

<script setup>
import { setSessionSID } from "./http.service";
import { restoreSessionTarget } from "@/components/session-handlers";
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

onMounted(async () => {
    if (!route.query.sid) {
        router.push("/login");
    } else {
        setSessionSID({ sid: route.query.sid });
        await restoreSessionTarget();
    }
});
</script>
