<template>
    <div class="w-full h-full flex flex-row justify-center items-center">
        <div class="">logging you out... one moment</div>
    </div>
</template>

<script setup>
import { removeSessionSID, removeToken } from "@/components/http.service";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();

onMounted(() => {
    logout();
});
async function logout() {
    removeSessionSID();
    removeToken();
    store.commit("setTargetResource", { resource: undefined, folder: undefined });
    store.commit("setProfile", {});
    router.push("/login");
}
</script>
