<template>
    <div class="bg-white p-4 text-sm">
        <div v-if="!profile.file" class="flex flex-row my-2">
            <div class="flex flex-row space-x-2">Select a profile to apply</div>
            <div class="flex-grow mx-2">
                <el-select
                    class="w-full"
                    size="small"
                    v-model="data.pendingProfile"
                    placeholder="Select a profile to use with this crate"
                >
                    <el-option
                        v-for="profile in data.profiles"
                        :key="profile.file"
                        :label="`${profile.name} (${profile.version}): ${profile.description}`"
                        :value="profile.file"
                    >
                        <div>
                            {{ profile.name }} ({{ profile.version }}): {{ profile.description }}
                        </div>
                    </el-option>
                </el-select>
            </div>
            <div>
                <el-button
                    type="primary"
                    size="small"
                    @click="useProfile"
                    :disabled="!data.pendingProfile"
                >
                    Use profile
                </el-button>
            </div>
        </div>
        <div class="flex flex-row space-x-2 text-sm" v-show="profile.name">
            <div v-if="session.configuration.allowProfileChange">
                <el-button type="danger" @click="selectNewProfile" size="small">
                    <i class="fas fa-trash"></i>
                </el-button>
            </div>
            <div class="pt-1">Profile: {{ profile.name }} ({{ profile.version }})</div>
        </div>
    </div>
</template>

<script setup>
import { restoreSessionProfile, getProfiles, setProfile } from "./session-handlers";

import { onMounted, computed, reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();

const data = reactive({
    profiles: [],
    pendingProfile: undefined,
    selectedProfile: undefined,
});
const profile = computed(() => store.state.profile);
const session = computed(() => store.state.session);

onMounted(() => {
    init();
});
async function init() {
    await restoreSessionProfile();
    data.profiles = await getProfiles();
}
async function useProfile() {
    const profile = data.profiles.filter((p) => p.file === data.pendingProfile)[0];
    await setProfile({ profile });
}
async function selectNewProfile() {
    await setProfile({ profile: {} });
}
</script>
