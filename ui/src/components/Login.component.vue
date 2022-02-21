<template>
    <div class="flex flex-col">
        <okta-login-component v-if="login === 'okta'" />
        <reva-login-component v-else-if="login === 'reva'" />
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
    mounted() {
        if (this.login === "localhost") this.loginLocalUser();
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
