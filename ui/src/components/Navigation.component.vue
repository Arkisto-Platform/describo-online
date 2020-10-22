<template>
    <div class="flex flex-row p-2">
        <div>{{ siteName }}</div>
        <div class="flex flex-grow"></div>
        <div>
            <el-button @click="logout" size="small">
                <i class="fas fa-sign-out-alt"></i>
            </el-button>
        </div>
    </div>
</template>

<script>
import AuthService from "./auth.service";
export default {
    data() {
        return {
            siteName: this.$store.state.configuration.siteName,
        };
    },
    methods: {
        async logout() {
            const as = new AuthService({ $auth: this.$auth });
            as.logout();
        },
    },
};
</script>
