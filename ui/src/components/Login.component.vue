<template>
    <div class="flex flex-col">
        <okta-login-component v-if="login === 'okta'" />
        <reva-login-component v-else-if="login === 'reva'" />
        <div
            v-else-if="login === 'localhost'"
            class="w-screen h-screen flex flex-col space-y-4 items-center mt-40"
        >
            <div class="text-3xl text-gray-600">{{ siteName }}</div>
            <div>
                <el-button @click="loginLocalUser">login</el-button>
            </div>
        </div>
        <div v-else class="text-center text-xl m-20">{{ siteName }}</div>
    </div>
</template>

<script>
import { setToken } from "@/components/http.service";

export default {
    data() {
        return {
            login: this.$store.state.configuration.login,
            siteName: this.$store.state.configuration.siteName,
        };
    },
    methods: {
        async loginLocalUser() {
            let response = await this.$http.post({ route: "/authenticate/local", body: {} });
            if (response.status === 200) {
                let { token } = await response.json();
                setToken({ token });
                this.$router.push("/");
            }
        },
    },
};
</script>
