<template>
    <div class="flex flex-col">
        <el-pagination
            v-model:currentPage="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next"
            :total="total"
            @size-change="pageSizeChange"
            @current-change="init"
        >
        </el-pagination>
        <el-table :data="collections" class="w-full">
            <el-table-column prop="name" label="Name"> </el-table-column>
            <el-table-column prop="updatedAt" label="Updated At" width="300">
                <template slot-scope="scope">
                    {{ formatDate(scope.row.updatedAt) }}
                </template>
            </el-table-column>
            <el-table-column prop="actions" label="Actions" width="300">
                <template slot-scope="scope">
                    <el-popconfirm
                        title="Are you sure you want to remove this collection from Describo (the data on the storage is not touched)?"
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

<script>
import { parseISO, format } from "date-fns";
export default {
    data() {
        return {
            collections: [],
            currentPage: 1,
            pageSize: 10,
            total: 0,
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            let limit = this.pageSize;
            let offset = (this.currentPage - 1) * this.pageSize;

            let response = await this.$http.post({
                route: "/admin/collections",
                params: { offset, limit },
            });
            if (response.status === 200) {
                let { collections, total } = await response.json();
                this.total = total;
                this.collections = [...collections];
            }
        },
        pageSizeChange() {
            this.currentPage = 1;
            this.init();
        },
        formatDate(date) {
            return format(parseISO(date), "PPpp");
        },
        async deleteCollection(collectionId) {
            let response = await this.$http.delete({
                route: `/admin/collections/${collectionId}`,
            });
            if (response.status === 200) {
                this.init();
            }
        },
    },
};
</script>
