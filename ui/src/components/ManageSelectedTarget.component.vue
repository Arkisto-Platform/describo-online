<template>
    <div class="flex flex-row space-x-1 bg-white p-4">
        <div v-if="target.resource && !revaDeployment">
            <el-button type="warning" size="mini" @click="selectNewResourceAndTarget">
                Use another service
            </el-button>
        </div>
        <div class="flex flex-row space-x-2 text-sm" v-if="target.resource && target.folder">
            <div>
                <el-button type="danger" @click="selectNewTargetFolder" size="mini">
                    <i class="fas fa-trash"></i>
                </el-button>
            </div>
            <div class="pt-1">Resource:</div>
            <div class="pt-1">{{ target.resource }}:{{ target.folder.path }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            revaDeployment: this.$store.state.configuration.login === "reva" ? true : false,
        };
    },
    computed: {
        target: function() {
            return this.$store.state.target;
        },
    },
    methods: {
        selectNewTargetFolder() {
            const targetResource = this.target.resource;
            this.$store.commit("reset");
            this.$store.commit("setTargetResource", {
                resource: targetResource,
                folder: undefined,
            });
            this.$router.push({ path: "/select-target" });
        },
        selectNewResourceAndTarget() {
            this.$store.commit("reset");
            this.$router.push({ path: "/select-target" });
        },
    },
};
</script>
