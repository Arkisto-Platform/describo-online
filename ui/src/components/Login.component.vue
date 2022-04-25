<template>
    <div class="flex flex-col">
        <okta-login-component v-if="login === 'okta'" />
        <reva-login-component v-else-if="login === 'reva'" />
        <div v-else class="text-center text-xl m-20">{{ siteName }} mojumbo</div>
    </div>
</template>

<script setup>
import { setToken } from "@/components/http.service";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted, inject } from "vue";
const store = useStore();
const router = useRouter();
const $http = inject("$http");

const login = store.state.configuration.login;
const siteName = store.state.configuration.siteName;

async function loginLocalUser() {
    let response = await $http.post({ route: "/authenticate/local", body: {} });
    if (response.status === 200) {
        let { token } = await response.json();
        setToken({ token });
        router.push("/select-target");
    }
}

onMounted(() => {
    if (login === "localhost") loginLocalUser();
});
</script>
