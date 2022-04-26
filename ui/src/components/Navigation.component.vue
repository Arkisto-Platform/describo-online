<template>
    <div>
        <div
            class="flex flex-row space-x-4 bg-indigo-100 p-4 text-xl text-gray-800"
            v-if="!session.embedded"
        >
            <div>{{ siteName }}</div>
            <div class="flex flex-grow"></div>
            <div
                @click="navTo({ name: 'logout' })"
                class="text-base pt-1 cursor-pointer"
                v-if="login !== 'localhost'"
            >
                <i class="fas fa-sign-out-alt"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
const route = useRoute();
const router = useRouter();
const store = useStore();

const login = store.state.configuration.login;
const siteName = store.state.configuration.siteName;
const currentRoute = computed(() => route.name);
const session = computed(() => store.state.session);
function navTo(path) {
    router.push(path).catch((err) => {});
}
</script>
