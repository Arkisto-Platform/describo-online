<template>
    <div class="flex flex-row self-stretch justify-center items-center h-64 mt-32">
        <div class="w-full md:w-3/5 lg:w-1/3 p-10 flex flex-col space-y-4 bg-white">
            <div class="text-lg text-center">Administrator Login</div>
            <div class="flex flex-row">
                <el-input
                    placeholder="Password"
                    :type="passwordFieldType"
                    v-model="password"
                    size="small"
                ></el-input>
                <el-button @click="passwordFieldType = 'text'" size="small">
                    <div v-show="passwordFieldType === 'password'">
                        <i class="fas fa-eye-slash"></i>
                    </div>
                    <div v-show="passwordFieldType === 'text'">
                        <i class="fas fa-eye"></i>
                    </div>
                </el-button>
            </div>
            <el-button @click.prevent="login" size="small" :disabled="!password">
                login
            </el-button>
        </div>
    </div>
</template>

<script>
import { setToken } from "@/components/http.service";

export default {
    data() {
        return {
            siteName: this.$store.state.configuration.siteName,
            password: undefined,
            passwordFieldType: "password",
        };
    },
    methods: {
        async login() {
            let response = await this.$http.post({
                route: "/admin/login",
                body: { password: this.password },
            });
            if (response.status === 200) {
                setToken({ token: this.password });
                this.$emit("loggedin");
            }
        },
    },
};
</script>
