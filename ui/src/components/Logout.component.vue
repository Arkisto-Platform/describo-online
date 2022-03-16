<template>
    <div class="w-full h-full flex flex-row justify-center items-center">
        <div class="">logging you out... one moment</div>
    </div>
</template>

<script>
import { removeSessionSID, removeToken } from "@/components/http.service";

export default {
    data() {
        return {};
    },
    mounted() {
        this.logout();
    },
    methods: {
        async logout() {
            removeSessionSID();
            removeToken();
            this.$store.commit("setTargetResource", { resource: undefined, folder: undefined });
            this.$store.commit("setProfile", {});
            this.$router.push("/login");
        },
    },
};
</script>
