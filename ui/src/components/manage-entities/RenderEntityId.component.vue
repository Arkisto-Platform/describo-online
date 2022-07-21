<template>
    <div class="flex flex-col">
        <!-- entity id -->
        <div
            class="flex flex-row"
            :class="{
                'bg-green-200 p-1 rounded': update.success === 'eid',
                'bg-red-200 p-1 rounded': update.error === 'eid',
            }"
        >
            <div class="w-1/3 xl:w-1/5">Identifier</div>
            <text-component
                class="w-2/3 xl:w-4/5"
                type="text"
                property="eid"
                :value.sync="entity.eid"
                @save:property="saveEntityProperty"
                v-if="!['Dataset', 'File'].includes(entity.etype)"
            />
            <div v-if="['Dataset', 'File'].includes(entity.etype)" class="">
                {{ entity.eid }}
            </div>
        </div>
    </div>
</template>

<script>
import TextComponent from "./Text.component.vue";

export default {
    components: {
        TextComponent,
    },
    props: {
        entity: {
            type: Object,
            required: true,
        },
        dataService: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            update: {
                error: false,
                success: false,
            },
        };
    },
    methods: {
        async saveEntityProperty(data) {
            try {
                await this.dataService.updateEntityProperty({
                    id: this.entity.id,
                    property: data.property,
                    value: data.value,
                });
                this.update.success = data.property;
                setTimeout(() => {
                    this.update.success = false;
                }, 1500);
            } catch (error) {
                this.update.error = data.property;
                setTimeout(() => {
                    this.update.error = false;
                    this.$emit("getEntity");
                }, 1500);
            }
        },
    },
};
</script>
