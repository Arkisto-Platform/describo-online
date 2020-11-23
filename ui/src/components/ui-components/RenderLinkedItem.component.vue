<template>
    <div class="flex flex-row">
        <div
            class="flex flex-col bg-yellow-200 p-4 cursor-pointer rounded-l"
            @click="loadEntity"
            v-if="tgtEntity"
        >
            <!-- <div class="text-xs text-gray-600">
            {{ tgtEntity.id }}
        </div> -->
            <div class="text-sm flex flex-row">
                <!-- <span class="text-gray-800 mr-2">{{ tgtEntity.etype }}:</span -->
                <type-icon-component
                    class="mr-2 text-gray-700"
                    :type="tgtEntity.etype"
                />
                {{ tgtEntity.etype }}:
                {{ tgtEntity.name }}
            </div>
        </div>
        <delete-property-component
            class="bg-yellow-200 cursor-pointer rounded-r"
            :property="property"
            @refresh="$emit('refresh')"
        />
    </div>
</template>

<script>
import TypeIconComponent from "./TypeIcon.component.vue";
import DeletePropertyComponent from "./DeleteProperty.component.vue";
import DataService from "./data.service.js";

export default {
    components: {
        TypeIconComponent,
        DeletePropertyComponent,
    },
    props: {
        property: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            tgtEntity: undefined,
        };
    },
    mounted() {
        this.dataService = new DataService({ $http: this.$http });
        this.loadTgtEntity();
    },
    methods: {
        async loadTgtEntity() {
            this.loading = true;
            let response = await this.$http.get({
                route: `/entity/${this.property.tgtEntityId}?simple=true`,
            });
            if (response.status !== 200) {
                // handle error
            }
            let { entity } = await response.json();
            this.tgtEntity = entity;
            this.loading = false;
        },
        loadEntity() {
            this.$store.commit("setSelectedEntity", { id: this.tgtEntity.id });
        },
    },
};
</script>
