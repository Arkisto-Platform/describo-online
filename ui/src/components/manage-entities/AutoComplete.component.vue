<template>
    <el-autocomplete
        class="w-full"
        v-model="selection"
        :clearable="true"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="true"
        value-key="id"
        placeholder="Please Input"
        @select="handleSelect"
    >
        <template slot-scope="{ item }">
            <div class="flex flex-col my-2">
                <div class="text-sm">{{ item.etype }}</div>
                <div class="text-sm">{{ item.name }}</div>
                <div class="text-sm text-right">{{ item.eid }}</div>
            </div>
        </template>
    </el-autocomplete>
</template>

<script>
import { debounce } from "lodash";
import DataService from "./data.service.js";

export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        by: {
            type: String,
            required: true,
            validator: (val) => {
                return ["id", "name"].includes(val);
            },
        },
    },
    data() {
        return {
            selection: undefined,
            entities: undefined,
        };
    },
    mounted() {
        this.dataService = new DataService({
            $http: this.$http,
            $log: this.$log,
        });
    },
    methods: {
        async querySearch(queryString, cb) {
            this.selection = undefined;
            this.entities = undefined;
            let query = {};
            if (this.by === "id") query.eid = queryString;
            if (this.by === "name") query.name = queryString;
            let { entities } = await this.dataService.findEntity({
                etype: this.type,
                eid: queryString,
                name: queryString,
            });
            this.entities = entities;
            cb(entities);
        },
        handleSelect() {
            let entity = this.entities.filter((e) => e.id === this.selection)[0];
            this.$emit("link:entity", { entity });
        },
    },
};
</script>

<style lang="scss" scoped></style>
