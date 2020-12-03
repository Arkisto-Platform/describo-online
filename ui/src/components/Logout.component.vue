<template>
    <div class="w-full h-full flex flex-row justify-center items-center">
        <div class="">logging you out... one moment</div>
    </div>
</template>

<script>
import AuthService from "./auth.service";

export default {
    data() {
        return {};
    },
    mounted() {
        const as = new AuthService({ $auth: this.$auth });
        window.localStorage.removeItem("vuex");
        as.logout();
    },
};
</script>
