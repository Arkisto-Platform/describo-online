<template>
    <div class="flex flex-row">
        <div class="flex flex-col w-full">
            <div
                class=" flex flex-col space-y-3 my-2 pb-2 border-b-2"
                v-if="enableFileSelector"
            >
                <div
                    v-if="mode === 'openFile'"
                    class="text-lg text-gray-800 bg-yellow-200 text-center p-8"
                >
                    You must expand each subfolder to load the child nodes.
                    <br />If you don't you'll only get the folders.
                </div>
                <div
                    v-if="mode === 'openDirectory'"
                    class="text-lg text-gray-800 bg-yellow-200 text-center p-8"
                >
                    Select a folder to work with.
                </div>
                <!-- <div
                    v-if="selectedFolder"
                    class="text-lg text-gray-800 bg-yellow-200 text-center p-8"
                >
                    Select a folder to work with.
                </div>
                <div
                    v-if="mode === 'openFile' && partsAdded"
                    class="text-center text-xl text-gray-700 font-light bg-green-200 p-4 rounded-lg"
                >
                    The crate parts list has been updated.
                </div> -->
                <div v-if="mode === 'openFile'">
                    <el-checkbox v-model="selectAllChildren">
                        Select all children
                    </el-checkbox>
                </div>
            </div>
            <div class="overflow-scroll">
                <el-tree
                    v-loading="loading"
                    ref="tree"
                    :props="props"
                    node-key="path"
                    :load="loadNode"
                    :lazy="true"
                    :show-checkbox="enableFileSelector"
                    :check-strictly="!selectAllChildren"
                    :default-checked-keys="checkedNodes"
                    :default-expanded-keys="defaultExpandedKeys"
                    @check="handleNodeSelection"
                ></el-tree>
            </div>
        </div>
    </div>
</template>

<script>
// import Worker from "./file-tree.worker";
// import path from "path";
import { flattenDeep, uniq, uniqBy, compact, debounce } from "lodash";
import HTTPService from "../http.service";

export default {
    props: {
        resource: {
            type: String,
            required: true,
            validator: (v) => ["onedrive"].includes(v),
        },
        mode: {
            type: String,
            validator: (v) => ["openFile", "openDirectory"].includes(v),
            default: "openFile",
        },
        enableFileSelector: {
            type: Boolean,
            default: true,
        },
        checkedNodes: {
            type: Array,
        },
    },
    data() {
        return {
            debouncedAddParts: debounce(this.addParts, 1000),
            loading: false,
            partsAdded: false,
            selectAllChildren: false,
            data: [],
            httpService: undefined,
            props: {
                label: "path",
                children: "children",
                isLeaf: "isLeaf",
            },
            defaultExpandedKeys: [],
            selectedFolder: undefined,
        };
    },
    async beforeMount() {
        this.httpService = new HTTPService({ $auth: this.$auth });
    },
    methods: {
        async loadNode(node, resolve) {
            let content;
            if (node.level === 0) {
                await this.load({ resolve });
            } else if (node.level !== 0) {
                if (node.isLeaf) resolve();

                const path = node.data.parent
                    ? `${node.data.parent}/${node.data.path}`
                    : node.data.path;
                await this.load({ resolve, path });
            }
        },
        async load({ resolve, path }) {
            let body = {
                resource: this.resource,
            };
            if (path) body.path = path;
            let response = await this.httpService.post({
                route: "/folder/read",
                body,
            });
            if (response.status === 200) {
                let content = (await response.json()).content;
                content = content.map((e) => {
                    e.disabled =
                        this.mode === "openDirectory" && e.isLeaf === true
                            ? true
                            : false;
                    return e;
                });
                resolve(content);
            } else if (response.status === 401) {
                // need to reauthenticate
                this.$log.error("need to authenticate");
                this.$notify({
                    title: "Error",
                    type: "error",
                    message: "Please log into onedrive",
                    showClose: false,
                    position: "top-left",
                });
                resolve([]);
            } else {
                // something else went wrong
                this.$notify({
                    title: "Error",
                    type: "error",
                    message: "There is an issue at this time.",
                    showClose: false,
                    position: "top-left",
                });
                resolve([]);
            }
        },
        async handleNodeSelection() {
            if (this.mode === "openDirectory") {
                this.loading = true;
                let node = this.$refs.tree.getCheckedNodes()[0];
                const path = node.parent
                    ? `${node.parent}/${node.path}`
                    : node.path;
                this.$emit("selected-folder", path);
            } else {
                await this.debouncedAddParts();
            }
        },
        async addParts() {
            this.loading = true;
            this.partsAdded = false;
            await new Promise((resolve) => setTimeout(resolve, 100));
            let selectedNodes = this.$refs.tree.getCheckedNodes();
            selectedNodes = selectedNodes.filter((n) => n.path !== this.target);
            selectedNodes = selectedNodes.map((node) => node.uuid);
            selectedNodes = uniq(selectedNodes);
            selectedNodes = selectedNodes.filter((n) => n != "/");
            let nodes = [];
            selectedNodes.forEach((n) => {
                if (n) getNodeAndParent({ tree: this.$refs.tree, node: n });
            });
            nodes = flattenDeep(nodes);
            nodes = uniqBy(nodes, "uuid");
            this.$emit("selected-nodes", nodes);
            this.loading = false;
            this.partsAdded = true;
            setTimeout(() => {
                this.partsAdded = false;
            }, 3000);
            function getNodeAndParent({ tree, node }) {
                node = tree.getNode(node).data;
                nodes.push(node);
                if (node.parent !== "") {
                    let parent = tree.getNode(node.parent).data;
                    nodes.push(parent);
                    getNodeAndParent({ tree, node: parent });
                }
            }
        },
    },
};
</script>

<style>
.el-tree-node__label {
    @apply text-lg;
}
.el-tree-node__content {
    @apply mb-1;
}
</style>
