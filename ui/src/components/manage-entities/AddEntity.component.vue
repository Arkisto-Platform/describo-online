<template>
    <div class="flex flex-row space-x-2 p-4 bg-indigo-100 rounded">
        <div class="text-gray-600 w-1/3 pt-1">Add an entity to this collection:</div>
        <el-autocomplete
            class="w-full"
            v-model="selection"
            :clearable="true"
            :fetch-suggestions="querySearch"
            :trigger-on-focus="false"
            value-key="id"
            placeholder=""
            size="small"
            @select="handleSelect"
        >
            <template #default="{ item }">
                <div class="flex flex-col py-2">
                    <div class="text-sm">{{ item.name }}</div>
                    <p class="ml-10 text-sm w-full truncate overflow-ellipsis">
                        {{ item.help }}
                    </p>
                </div>
            </template>
        </el-autocomplete>
    </div>
</template>

<script setup>
import DataService from "./data.service.js";
const dataService = new DataService();
import { ref, reactive } from "vue";

const emit = defineEmits(["add-entity"]);
const selection = ref(undefined);

async function querySearch(queryString, cb) {
    selection.value = undefined;
    let { matches } = await dataService.lookupType({
        query: queryString,
    });
    cb(matches);
}
function handleSelect(selection) {
    emit("add-entity", { type: selection.name });
}
</script>
