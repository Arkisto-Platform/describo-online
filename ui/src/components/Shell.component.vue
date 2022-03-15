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
        if (this.$route.path === "/") this.$router.replace({ path: "/select-target" });
    },
    methods: {
        async restoreSession() {
            let response = await this.$http.get({ route: "/session" });
            if (response.status !== 200) {
            }
            let { session, embeddedSession } = await response.json();
            this.$store.commit("setSessionInformation", { ...session, embedded: embeddedSession });
            this.ready = true;
        },
    },
};
</script>
