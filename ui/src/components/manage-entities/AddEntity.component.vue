<template>
    <el-autocomplete
        class="w-full"
        v-model="selection"
        :clearable="true"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        value-key="id"
        placeholder="Lookup entity types"
        size="small"
        @select="handleSelect"
    >
        <template slot-scope="{ item }">
            <div class="flex flex-col py-2">
                <div class="text-sm">{{ item.name }}</div>
                <p class="ml-10 text-sm w-full truncate overflow-ellipsis">
                    {{ item.help }}
                </p>
            </div>
        </template>
    </el-autocomplete>
</template>

<script>
import DataService from "./data.service.js";

export default {
    props: {},
    data() {
        return {
            selection: undefined,
            types: [],
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
            let { matches } = await this.dataService.lookupType({
                query: queryString,
            });
            cb(matches);
        },
        handleSelect(selection) {
            console.log(selection);
        },
    },
};
</script>
