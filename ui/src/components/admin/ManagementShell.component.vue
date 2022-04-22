<template>
    <div>
        <div class="flex flex-row mb-2" v-if="route !== '/admin/login'">
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

<script>
import AdminProfileComponent from "./AdminProfile.component.vue";
import CollectionManagerComponent from "./CollectionManager.component.vue";
import { removeToken } from "@/components/http.service";

export default {
    components: {
        AdminProfileComponent,
        CollectionManagerComponent,
    },
    data() {
        return {
            activeTab: "collections",
        };
    },
    computed: {
        route: function() {
            return this.$route.path;
        },
    },
    methods: {
        updateRoute(tab) {
            this.$router.push({ path: `/admin/${tab.name}` }).catch(() => {});
        },
        goToDescribo() {
            removeToken();
            this.$router.push("/");
        },
        logout() {
            removeToken();
            this.$router.push("/admin/login");
        },
    },
};
</script>
