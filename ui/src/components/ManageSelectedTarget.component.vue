<template>
    <div class="flex flex-row space-x-1 bg-white p-4 text-sm">
        <div v-if="target.resource && !revaDeployment && allowServiceChange">
            <el-button type="warning" size="small" @click="selectNewTarget">
                Use another service
            </el-button>
        </div>
        <div class="mr-2" v-if="allowServiceChange">
            <el-button type="danger" size="small" @click="selectNewTargetFolder">
                <i class="fas fa-trash"></i>
            </el-button>
        </div>
        <div class="pt-1">Resource:&nbsp;</div>
        <div class="pt-1">{{ target.resource }}:{{ target.folder }}</div>
    </div>
</template>

<script setup>
import { selectNewTarget, setFolderAndSaveToSession } from "./session-handlers";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const revaDeployment = store.state.configuration.login === "reva" ? true : false;
const allowServiceChange = computed(() => {
    return store.state.session?.configuration?.allowServiceChange === undefined
        ? true
        : store.state.session?.configuration?.allowServiceChange;
});
const target = computed(() => store.state.target);
const profile = computed(() => store.state.profile);

async function selectNewTargetFolder() {
    await setFolderAndSaveToSession({ folder: undefined });
}
</script>
