<template>
    <div class="flex flex-col p-4 bg-gray-100 w-screen h-screen">
        <router-view />
    </div>
</template>

<script>
import LoginComponent from "./Login.component.vue";

export default {
    components: {
        LoginComponent,
    },
    data() {
        return {};
    },
    computed: {
        route: function() {
            return this.$route.path;
        },
    },
    mounted() {
        if (!this.loggedIn) {
            this.$router.push("/admin/login").catch(() => {});
        }
    },
    methods: {},
};
</script>
