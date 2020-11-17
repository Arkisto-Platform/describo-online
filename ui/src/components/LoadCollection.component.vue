<template>
    <el-card class="box-card">
        <div class="flex flex-row">
            <div>
                <el-button @click="loadFolder" :disabled="loading">
                    load folder
                </el-button>
            </div>
            <div class="ml-2 pt-2">{{ msg }}</div>
        </div>
    </el-card>
</template>

<script>
import { round } from "lodash";

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
        this.$socket.on("loadRouteHandler", (response) => {
            this.msg = response.msg;
        });
    },
    methods: {
        async loadFolder() {
            this.loading = true;
            let response = await this.$http.post({
                route: "/load",
                body: {
                    resource: this.target.resource,
                    folder: this.target.folder.path,
                    id: this.target.folder.id,
                },
            });
            if (response.status !== 200) {
            }
            let { collection } = await response.json();
            console.log(JSON.stringify(collection, null, 2));
            this.msg = `Loaded collection: ${collection.name}`;
            this.$store.commit("setActiveCollection", collection);
            this.loading = false;
        },
    },
};
</script>
