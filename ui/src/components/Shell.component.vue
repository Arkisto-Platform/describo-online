<template>
    <div class="flex flex-col" v-if="ready">
        <navigation-component />
        <router-view class="m-2" />
    </div>
</template>

<script>
import NavigationComponent from "@/components/Navigation.component.vue";

export default {
    components: {
        NavigationComponent,
    },
    data() {
        return {
            ready: false,
        };
    },
    computed: {
        collectionId() {
            return this.$store.state.collection?.id;
        },
        target() {
            return this.$store.state.target;
        },
        profile: function() {
            return this.$store.state.profile.file ? true : false;
        },
        selectedEntityId() {
            return this.$store.state.selectedEntity.id;
        },
    },
    beforeMount() {
        this.restoreSession();
    },
    mounted() {
        this.$store.dispatch("loadConfiguration");
    },
    methods: {
        async restoreSession() {
            let response = await this.$http.get({ route: "/session" });
            if (response.status !== 200) {
            }
            let { session, embeddedSession } = await response.json();
            if (session?.profile) {
                let profile = { ...session.profile };
                this.$store.commit("setProfile", { ...profile });
                delete session.profile;
            }
            if (session) {
                session = { ...session, embedded: embeddedSession };
                this.$store.commit("setSessionInformation", { ...session });
            }
            if (this.$route.path === "/") this.$router.replace({ path: "/select-target" });
            this.ready = true;
        },
    },
};
</script>
