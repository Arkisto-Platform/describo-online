<template>
    <div v-if="visible">
        <div class="flex flex-row space-x-2 flex-grow" v-if="entityCount < maxEntitiesPerTemplate">
            <div class="text-sm pt-1">Save this crate as a template for re-use</div>
            <div class="flex-grow">
                <el-input
                    class="w-full"
                    v-model="crateName"
                    size="mini"
                    placeholder="provide a name for the crate template"
                />
            </div>
            <div>
                <el-button @click="save" size="mini" :disabled="!crateName">
                    <i class="fas fa-save"></i>
                    Save Crate as Template
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        entity: {
            type: Object,
            required: true,
        },
        visible: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            entityCount: 0,
            maxEntitiesPerTemplate: this.$store.state.configuration.maxEntitiesPerTemplate,
            crateName: undefined,
        };
    },
    methods: {
        close() {
            this.$emit("close");
        },
        save() {
            this.$emit("save:crate-as-template", { name: this.crateName });
        },
    },
};
</script>
