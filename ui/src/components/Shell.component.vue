<template>
    <div class="flex flex-col">
        <navigation-component />
        <div class="p-2 flex flex-col space-y-1">
            <select-target-component />
            <!-- <onedrive-file-preview-component
                style="width: 500px; height: 500px;"
                path="/test-rocrate/data/NT1-20003-002.jpg"
            /> -->
            <!-- <onedrive-file-preview-component
                style="width: 500px; height: 500px;"
                id="b!-4xxhXFx5kKSQwwAuO7Ek9AvCPQ0yFpGrxxa6HLjh4QGAuTlRxZhQ59yKADIuZ49#01K7QV4XMU2HLRHYXGTVAY4LGNFZOOIF6Z"
            /> -->
            <load-collection-component v-if="target.resource" />
            <render-entity-component
                :id="selectedEntityId"
                v-if="collectionId"
            />
        </div>
    </div>
</template>

<script>
import NavigationComponent from "@/components/Navigation.component.vue";
import SelectTargetComponent from "@/components/select-target/Shell.component.vue";
import LoadCollectionComponent from "@/components/LoadCollection.component.vue";
import RenderEntityComponent from "@/components/ui-components/RenderEntity.component.vue";
import HTTPService from "./http.service";

export default {
    components: {
        NavigationComponent,
        SelectTargetComponent,
        LoadCollectionComponent,
        RenderEntityComponent,
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
        selectedEntityId() {
            return this.$store.state.selectedEntity?.id;
        },
    },
    mounted() {
        this.$store.dispatch("loadConfiguration");
    },
    methods: {},
};
</script>
