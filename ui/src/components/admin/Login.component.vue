<template>
    <div class="flex flex-row self-stretch justify-center items-center h-64 mt-32">
        <div
            class="w-full md:w-3/5 lg:w-1/3 p-10 flex flex-col space-y-4 bg-indigo-200 rounded text-gray-700"
        >
            <div class="text-lg text-center">Administrator Login</div>
            <el-form
                ref="form"
                :model="form"
                label-width="80px"
                @submit.prevent.native="login"
                class="flex-grow"
            >
                <div class="flex flex-row">
                    <el-form-item label="Password" class="flex-grow">
                        <el-input :type="passwordFieldType" v-model="password"></el-input>
                    </el-form-item>
                    <el-button @click="passwordFieldType = 'text'">
                        <div v-show="passwordFieldType === 'password'">
                            <i class="fa-solid fa-eye-slash"></i>
                        </div>
                        <div v-show="passwordFieldType === 'text'">
                            <i class="fa-solid fa-eye"></i>
                        </div>
                    </el-button>
                </div>
                <el-button @click.prevent="login" :disabled="!password"> login </el-button>
            </el-form>

            <router-link to="/login" class="text-blue-600">
                <i class="fas fa-home"></i> Describo
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { setToken, removeToken } from "@/components/http.service";
import { ref, reactive, inject } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const $http = inject("$http");

let password = ref("");
const passwordFieldType = ref("password");
const form = reactive({});

async function login() {
    removeToken();
    let response = await $http.post({
        route: "/admin/login",
        body: { password: password.value },
    });
    if (response.status === 200) {
        setToken({ token: password.value });
        router.push("/admin/collections");
    }
}
</script>
