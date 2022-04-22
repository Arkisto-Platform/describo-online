<template>
    <el-card class="box-card" v-if="msg">
        <div class="flex flex-row">
            <div class="ml-2 pt-2">{{ msg }}</div>
        </div>
    </el-card>
</template>

<script>
import { loadCollection } from "./session-handlers";
export default {
    data() {
        return {
            loading: false,
            msg: undefined,
        };
    },
    computed: {
        target() {
            return this.$store.state.target;
        },
    },
    mounted() {
        this.$socket.on("LOAD_ROUTE_HANDLER", (response) => {
            this.msg = `${response.msg}`;
        });
        if (!this.$store.state.collection.id) {
            this.loadFolder();
        }
    },
    methods: {
        async loadFolder() {
            this.loading = true;
            await loadCollection();
            this.loading = false;
            await new Promise((resolve) => setTimeout(resolve, 1000));
            this.msg = undefined;
        },
    },
};
</script>
