<template>
    <el-select
        class="w-full"
        v-model="selection"
        placeholder=""
        filterable
        clearable
        default-first-option
        automatic-dropdown
        allow-create
        remote
        :remote-method="querySearch"
        @change="handleSelect"
    >
        <el-option-group v-for="group in options" :key="group.label" :label="group.label">
            <el-option
                v-for="item in group.options"
                :key="item.id"
                :label="item.name"
                :value="item"
                :value-key="item.id"
            >
                <template>
                    <div class="flex flex-row space-x-2 my-1">
                        <div class="text-sm">{{ item.etype }}:</div>
                        <div class="text-sm" v-if="item.name">{{ item.name }}</div>
                        <div class="text-sm text-right" v-else>{{ item.eid }}</div>
                    </div>
                </template>
            </el-option>
        </el-option-group>
    </el-select>
</template>

<script>
import DataService from "./data.service.js";

export default {
    props: {
        type: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            selection: undefined,
            entities: undefined,
            options: [],
        };
    },
    mounted() {
        this.dataService = new DataService({
            $http: this.$http,
            $log: this.$log,
        });
        this.querySearch();
    },
    methods: {
        async querySearch(queryString) {
            this.selection = undefined;
            this.entities = undefined;
            let query = {};
            if (this.by === "id") query.eid = queryString;
            if (this.by === "name") query.name = queryString;
            let { entities } = await this.dataService.findEntity({
                limit: 5,
                hierarchy: this.type,
                etype: queryString,
                eid: queryString,
                name: queryString,
            });
            let { templates, total } = await this.dataService.getTemplates({
                type: this.type,
                filter: queryString,
                limit: 5,
            });
            entities = entities.map((e) => ({ ...e, type: "internal" }));
            templates = templates.map((e) => ({ ...e, type: "template" }));
            let options = [
                {
                    label: "Create new entity",
                    options: [],
                },
                {
                    label: "Entities in this crate",
                    options: entities,
                },
                {
                    label: "Saved templates",
                    options: templates,
                },
            ];
            this.entities = entities;
            this.templates = templates;
            this.options = options;
        },
        handleSelect() {
            if (this.selection.type === "internal") {
                let entity = this.entities.filter((e) => e.id === this.selection.id)[0];
                if (entity) this.$emit("link:entity", { entity });
            } else if (this.selection.type === "template") {
                let template = this.templates.filter((t) => t.id === this.selection.id)[0];
                if (template) this.$emit("add:template", { template });
            } else {
                this.$emit("create:entity", { name: this.selection });
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
