<template>
    <div class="flex flex-col">
        <okta-login-component v-if="login === 'okta'" />
        <reva-login-component v-else-if="login === 'reva'" />
        <div v-else class="text-center text-xl m-20">{{ siteName }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: this.$store.state.configuration.login,
            siteName: this.$store.state.configuration.siteName,
        };
    },
    mounted() {},
};
</script>
