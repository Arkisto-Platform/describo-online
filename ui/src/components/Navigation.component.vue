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
export default {
    data() {
        return {
            siteName: this.$store.state.configuration.siteName,
        };
    },
    methods: {
        async logout() {
            this.$router.push({ name: "logout" });
        },
    },
};
</script>
