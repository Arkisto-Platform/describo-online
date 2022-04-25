<template>
    <div class="flex flex-col">
        <div class="flex flex-col space-y-2">
            <add-entity-component @add-entity="addNewEntity" />

            <div class="flex flex-row space-x-2">
                <el-input
                    placeholder="filter by name and @id"
                    v-model="filter"
                    @input="debouncedGetEntities"
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
        <el-table :data="data.entities" highlight-current-row>
            <el-table-column prop="etype" label="@type" width="180"> </el-table-column>
            <el-table-column prop="eid" label="@id" width="400"> </el-table-column>
            <el-table-column prop="name" label="Name"> </el-table-column>
            <el-table-column prop="isConnected" label="Connected" width="100">
                <template #default="scope">
                    <div class="flex flex-row justify-center">
                        <div v-show="scope.row.isConnected" class="text-green-600">
                            <i class="fas fa-check"></i>
                        </div>
                        <div v-show="!scope.row.isConnected" class="text-red-600">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Actions" width="150">
                <template #default="scope">
                    <div class="flex flex-row space-x-2">
                        <div>
                            <el-button @click="editEntity(scope.row.id)" size="small">
                                <i class="fas fa-edit"></i>
                            </el-button>
                        </div>
                        <div>
                            <el-button
                                @click="deleteEntity(scope.row.id)"
                                size="small"
                                type="danger"
                                v-if="scope.row.eid !== './'"
                            >
                                <i class="fas fa-trash"></i>
                            </el-button>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import AddEntityComponent from "@/components/manage-entities/AddEntity.component.vue";
import DataService from "@/components/manage-entities/data.service.js";
import { debounce } from "lodash";
import { onMounted, ref, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmits(["manage-data"]);
const dataService = new DataService();
const debouncedGetEntities = debounce(getEntities, 1000);

let data = reactive({
    total: 0,
    entities: [],
});
const filter = ref("");
const page = 0;
const pageSize = 10;
const orderBy = ["etype", "name"];
const orderDirection = ["asc"];

onMounted(async () => {
    await getEntities();
});

async function getEntities() {
    let response = await dataService.getEntities({
        filter: filter.value,
        page: page * pageSize,
        limit: pageSize,
        orderBy: orderBy,
        orderDirection: orderDirection,
    });
    data.entities = [...response.entities];
    data.total = response.total;
}
function nextPage(page) {
    page = page - 1;
    getEntities();
}
function editEntity(id) {
    store.commit("setSelectedEntity", { id });
    emit("manage-data");
}
async function deleteEntity(id) {
    if (store.state.selectedEntity.id === id) {
        store.commit("setSelectedEntity", { id: "RootDataset" });
    }
    await dataService.deleteEntity({ id });
    getEntities();
}
async function addNewEntity({ type }) {
    let { entity } = await dataService.createEntity({
        name: "new entity",
        etype: type,
    });
    editEntity(entity.id);
}
</script>
