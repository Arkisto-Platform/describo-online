<template>
    <el-card>
        <div class="flex flex-col space-y-4">
            <div class="flex flex-col">
                <div class="flex flex-row space-x-2">
                    <el-input
                        placeholder="filter by name and @id"
                        v-model="filter"
                        @input="debouncedGetTemplates"
                        :clearable="true"
                        size="small"
                    >
                    </el-input>
                    <el-pagination
                        class="ml-2"
                        layout="total, prev, pager, next"
                        :total="data.total"
                        @current-change="nextPage"
                    >
                    </el-pagination>
                </div>
            </div>
            <el-table :data="data.templates" highlight-current-row v-loading="loading">
                <template #empty>You don't have any saved templates </template>
                <el-table-column prop="etype" label="@type" width="180"> </el-table-column>
                <el-table-column prop="eid" label="@id" width="400"> </el-table-column>
                <el-table-column prop="name" label="Name"> </el-table-column>
                <el-table-column prop="src" label="Entity Data" type="expand" width="120">
                    <template #default="scope">
                        <pre>{{ JSON.stringify(scope.row.src, null, 2) }}</pre>
                    </template>
                </el-table-column>
                <el-table-column label="Actions" width="100" align="center">
                    <template #default="scope">
                        <div class="flex flex-row space-x-2">
                        <div>
                                <el-button
                                    @click="applyCrateTemplate(scope.row.id)"
                                    size="small"
                                    type="primary"
                                :disabled="scope.row.etype && scope.row.eid"
                                >
                                    <i class="fas fa-check-double"></i>
                                </el-button>
                            </div>
                            <div>
                                <el-button
                                    @click="deleteTemplate(scope.row.id)"
                                    size="small"
                                    type="danger"
                                :disabled="scope.row.eid == './'"
                                >
                                    <i class="fas fa-trash"></i>
                                </el-button>
                            </div>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </el-card>
</template>

<script setup>
import AddEntityComponent from "@/components/manage-entities/AddEntity.component.vue";
import DataService from "@/components/manage-entities/data.service.js";
import { debounce } from "lodash";
import { useStore } from "vuex";
import { onMounted, ref, reactive } from "vue";
const dataService = new DataService();
const store = useStore();

let loading = ref(false);
const debouncedGetTemplates = debounce(getTemplates, 1000);
const data = reactive({
    total: 0,
    templates: [],
});
const filter = ref("");
const page = 0;
const pageSize = 10;
const orderBy = ["etype", "name"];
const orderDirection = ["asc"];

onMounted(() => {
    getTemplates();
});

async function getTemplates() {
    let { templates, total } = await dataService.getTemplates({
        filter: filter.value,
        page: page * pageSize,
        limit: pageSize,
        orderBy: orderBy,
        orderDirection: orderDirection,
    });
    data.templates = [...templates];
    data.total = total;
}
function nextPage(page) {
    page = page - 1;
    getTemplates();
}
async function deleteTemplate(id) {
    await dataService.deleteTemplate({ id });
    getTemplates();
}
async function applyCrateTemplate(templateId) {
    loading = true;
    await dataService.replaceCrateWithTemplate({ templateId });
    store.commit("setSelectedEntity", { id: "RootDataset" });
    loading = false;
}
</script>
