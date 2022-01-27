<template>
    <div class="flex flex-col p-4">
        <login-component v-if="!loggedIn" @loggedin="setupUserSession" />
        <el-tabs type="border-card" v-if="loggedIn">
            <el-tab-pane label="Profiles"><admin-profile-component /></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import LoginComponent from "./Login.component.vue";
import AdminProfileComponent from "./AdminProfile.component.vue";
export default {
    components: {
        LoginComponent,
        AdminProfileComponent,
    },
    data() {
        return {
            loggedIn: false,
        };
    },
    methods: {
        setupUserSession() {
            this.loggedIn = true;
        },
    },
};
</script>
