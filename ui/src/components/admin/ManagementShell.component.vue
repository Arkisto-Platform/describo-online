<template>
    <div>
        <div class="flex flex-row mb-2" v-if="routePath !== '/admin/login'">
            <div>
                <el-button @click="goToDescribo"><i class="fas fa-home"></i> </el-button>
            </div>
            <div class="flex flex-grow"></div>
            <div>
                <el-button @click="logout"> <i class="fas fa-sign-out-alt"></i></el-button>
            </div>
        </div>

        <el-tabs type="border-card" v-model="activeTab" @tab-click="updateRoute">
            <el-tab-pane label="Collections" name="collections">
                <collection-manager-component />
            </el-tab-pane>
            <el-tab-pane label="Profiles" name="profiles">
                <admin-profile-component />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import AdminProfileComponent from "./AdminProfile.component.vue";
import CollectionManagerComponent from "./CollectionManager.component.vue";
import { removeToken } from "@/components/http.service";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const activeTab = ref("collections");
let routePath = computed(() => route.path);

function updateRoute(tab) {
    router.push({ path: `/admin/${tab.paneName}` }).catch(() => {});
}
function goToDescribo() {
    removeToken();
    router.push("/login").catch(() => {});
}
function logout() {
    removeToken();
    router.push("/admin/login").catch(() => {});
}
</script>
