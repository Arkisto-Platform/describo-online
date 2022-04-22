<template>
    <div class="flex flex-col">
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
        return {};
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
    mounted() {
        if (this.$route.path === "/") this.$router.replace({ path: "/select-target" });
        this.$store.dispatch("loadConfiguration");
    },
};
</script>
