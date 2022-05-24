<template>
    <div class="flex flex-row self-stretch justify-center items-center h-64 mt-32">
        <div
            class="w-full md:w-3/5 lg:w-1/3 p-10 flex flex-col space-y-4 bg-indigo-200 rounded text-gray-700"
        >
            <div class="text-lg text-center">Administrator Login</div>
            <el-form
                :model="data.form"
                label-width="80px"
                @submit.prevent.native="login"
                class="flex-grow"
            >
                <div class="flex flex-row">
                    <el-form-item label="Password" class="flex-grow">
                        <el-input :type="data.passwordFieldType" v-model="data.password"></el-input>
                    </el-form-item>
                    <el-button @click="data.passwordFieldType = 'text'">
                        <div v-show="data.passwordFieldType === 'password'">
                            <i class="fa-solid fa-eye-slash"></i>
                        </div>
                        <div v-show="data.passwordFieldType === 'text'">
                            <i class="fa-solid fa-eye"></i>
                        </div>
                    </el-button>
                </div>
                <el-button @click.prevent="login" :disabled="!data.password"> login </el-button>
            </el-form>

            <router-link to="/login" class="text-blue-600">
                <i class="fas fa-home"></i> Describo
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { setToken, removeToken } from "@/components/http.service";
import { reactive, inject } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const $http = inject("$http");

const data = reactive({
    form: {},
    password: undefined,
    passwordFieldType: "password",
});

async function login() {
    removeToken();
    let response = await $http.post({
        route: "/admin/login",
        body: { password: data.password },
    });
    if (response.status === 200) {
        setToken({ token: data.password });
        router.push("/admin/collections");
    }
}
</script>
