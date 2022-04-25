<template>
    <div class="flex flex-col">
        <el-pagination
            :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next"
            :total="data.total"
            @size-change="pageSizeChange"
            @current-change="init"
        >
        </el-pagination>
        <el-table :data="data.collections" class="w-full">
            <el-table-column prop="name" label="Name"> </el-table-column>
            <el-table-column prop="updatedAt" label="Updated At" width="300">
                <template #default="scope">
                    {{ formatDate(scope.row.updatedAt) }}
                </template>
            </el-table-column>
            <el-table-column prop="actions" label="Actions" width="100">
                <template #default="scope">
                    <el-popconfirm
                        title="Are you sure you want to remove this collection from Describo (the data on the storage is not deleted)?"
                        @confirm="deleteCollection(scope.row.id)"
                    >
                        <template #reference>
                            <el-button type="danger" size="small">
                                <i class="fas fa-trash"></i>
                            </el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { parseISO, format } from "date-fns";
import { reactive, onMounted, inject } from "vue";
const $http = inject("$http");

const data = reactive({
    collections: [],
    total: 0,
});
const currentPage = 1;
const pageSize = 10;

onMounted(() => {
    init();
});
async function init() {
    let limit = pageSize;
    let offset = (currentPage - 1) * pageSize;

    let response = await $http.post({
        route: "/admin/collections",
        params: { offset, limit },
    });
    if (response.status === 200) {
        let { collections, total } = await response.json();
        data.total = total;
        data.collections = [...collections];
    }
}
function pageSizeChange() {
    currentPage = 1;
    init();
}
function formatDate(date) {
    return format(parseISO(date), "PPpp");
}
async function deleteCollection(collectionId) {
    let response = await $http.delete({
        route: `/admin/collections/${collectionId}`,
    });
    if (response.status === 200) {
        init();
    }
}
</script>
