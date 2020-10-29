<template>
    <div class="flex flex-col">
        <navigation-component />
        <div class="p-2">
            <select-target-component />
        </div>
    </div>
</template>

<script>
import NavigationComponent from "@/components/Navigation.component.vue";
import SelectTargetComponent from "@/components/select-target/Shell.component.vue";

export default {
    components: {
        NavigationComponent,
        SelectTargetComponent,
    },
    data() {
        return {};
    },

    mounted() {
        this.$store.dispatch("loadConfiguration");
    },
};
</script>
