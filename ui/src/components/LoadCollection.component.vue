<template>
    <el-card class="box-card" v-if="state.msg">
        <div class="flex flex-row">
            <div class="ml-2 pt-2">{{ state.msg }}</div>
        </div>
    </el-card>
</template>

<script setup>
import { loadCollection } from "./session-handlers";
import { reactive, inject, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const $socket = inject("$socket");

const state = reactive({
    loading: false,
    msg: undefined,
});
onMounted(() => {
    $socket.on("LOAD_ROUTE_HANDLER", (response) => {
        state.msg = `${response.msg}`;
    });
    if (!store.state.collection.id) {
        loadFolder();
    }
});
async function loadFolder() {
    state.loading = true;
    await loadCollection({ clientId: $socket.id });
    state.loading = false;
    state.msg = undefined;
}
</script>
