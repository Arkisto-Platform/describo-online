<template>
    <div class="bg-white p-4 text-sm">
        <div v-if="!profile.file" class="flex flex-row my-2">
            <div class="flex flex-row space-x-2">
                Select a profile to apply
            </div>
            <div class="flex-grow mx-2">
                <el-select
                    class="w-full"
                    size="mini"
                    v-model="pendingProfile"
                    placeholder="Select a profile to use with this crate"
                >
                    <el-option
                        v-for="profile in profiles"
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
                    size="mini"
                    @click="useProfile"
                    :disabled="!pendingProfile"
                >
                    Use profile
                </el-button>
            </div>
        </div>
        <div class="flex flex-row  space-x-2 text-sm" v-show="profile.name">
            <div>
                <el-button type="danger" @click="selectNewProfile" size="mini">
                    <i class="fas fa-trash"></i>
                </el-button>
            </div>
            <div class="pt-1">Profile: {{ profile.name }} ({{ profile.version }})</div>
        </div>
    </div>
</template>

<script>
import { restoreSessionProfile, getProfiles, setProfile } from "./session-handlers";
export default {
    data() {
        return {
            profiles: [],
            pendingProfile: undefined,
            selectedProfile: undefined,
        };
    },
    computed: {
        profile: function() {
            return this.$store.state.profile;
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            await restoreSessionProfile();
            this.profiles = await getProfiles();
        },
        async useProfile() {
            const profile = this.profiles.filter((p) => p.file === this.pendingProfile)[0];
            await setProfile({ profile });
        },
        async selectNewProfile() {
            await setProfile({ profile: {} });
        },
    },
};
</script>
