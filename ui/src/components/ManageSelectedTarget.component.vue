<template>
    <div class="flex flex-row space-x-1 bg-white p-4">
        <div v-if="target.resource && !revaDeployment && !session.embedded">
            <el-button type="warning" size="mini" @click="selectNewResourceAndTarget">
                Use another service
            </el-button>
        </div>
        <div class="flex flex-row text-sm" v-if="target.resource && target.folder">
            <div class="mr-2">
                <el-button type="danger" @click="selectNewTargetFolder" size="mini">
                    <i class="fas fa-trash"></i>
                </el-button>
            </div>
            <div class="pt-1">Resource:&nbsp;</div>
            <div class="pt-1">{{ target.resource }}:{{ target.folder }}</div>
        </div>
    </div>
</template>

<script>
import { selectNewTarget, setFolderAndSaveToSession } from "./session-handlers";
export default {
    data() {
        return {
            revaDeployment: this.$store.state.configuration.login === "reva" ? true : false,
        };
    },
    computed: {
        session: function() {
            return this.$store.state.session;
        },
        target: function() {
            return this.$store.state.target;
        },
    },
    methods: {
        async selectNewTargetFolder() {
            await setFolderAndSaveToSession({ folder: undefined });
        },
        async selectNewResourceAndTarget() {
            await selectNewTarget();
        },
    },
};
</script>
