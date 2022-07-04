<template>
    <div class="flex flex-row">
        <div class="flex flex-col w-full">
            <div class="flex flex-row" v-if="props.enableFileSelector">
                <div class="w-3/5 flex-grow px-2">
                    <div v-if="props.mode === 'openFile'">
                        <el-checkbox v-model="selectAllChildren">
                            Select all children when adding folders
                        </el-checkbox>
                    </div>
                    <div class="overflow-scroll">
                        <el-tree
                            v-loading="state.loading"
                            ref="tree"
                            empty-text="There are no files in this folder"
                            :props="leafNodeProps"
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
                <div class="w-2/5 flex flex-col space-y-2">
                    <information-component type="warning" v-if="props.mode === 'openFile'">
                        You must expand each subfolder to load the child nodes. If you don't you'll
                        only get the folders.
                    </information-component>
                    <information-component type="info" v-if="props.mode === 'openDirectory'">
                        Select a folder to work with.
                    </information-component>
                    <information-component
                        type="success"
                        v-if="props.mode === 'openFile' && state.partsAdded"
                    >
                        The crate parts list has been updated.
                    </information-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { cloneDeep, startsWith, debounce } from "lodash";
import InformationComponent from "../Information.component.vue";
import { ElMessage } from "element-plus";
import { ref, reactive, inject, onMounted } from "vue";
const $http = inject("$http");

const emit = defineEmits(["selected-folder", "selected-nodes"]);

const props = defineProps({
    resource: {
        type: String,
        required: true,
    },
    root: {
        type: String,
    },
    filterPaths: {
        type: Array,
        default: () => {
            return [];
        },
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
});

const filterFilePaths = [
    "ro-crate-metadata.json",
    "ro-crate-metadata.jsonld",
    "ro-crate-preview.html",
    ".DS_Store",
    ...props.filterPaths,
];
const debouncedAddParts = debounce(addParts, 1000);
let state = reactive({
    isLoading: false,
    partsAdded: false,
});
let selectAllChildren = ref(false);
const data = reactive([]);
const leafNodeProps = {
    label: "name",
    children: "children",
    isLeaf: "isLeaf",
};
const defaultExpandedKeys = [];
const selectedFolder = undefined;
const tree = ref(null);

async function loadNode(node, resolve) {
    state.loading = true;
    let content;
    if (node.level === 0) {
        await load({ resolve });
    } else if (node.level !== 0) {
        if (node.isLeaf) resolve();

        const path = node.data.parent ? `${node.data.parent}/${node.data.path}` : node.data.path;
        await load({ resolve, path });
    }
    state.loading = false;
}
async function load({ resolve, path }) {
    let body = {
        resource: props.resource,
    };
    if (props.root && path) {
        body.path = path;
    } else if (props.root) {
        body.path = props.root;
    } else {
        body.path = path;
    }

    let response = await $http.post({
        route: "/folder/read",
        body,
    });
    if (response.status === 200) {
        let content = (await response.json()).content;
        content = content.map((e) => {
            e.disabled = props.mode.value === "openDirectory" && e.isLeaf === true ? true : false;
            return e;
        });
        content = content.filter((e) => {
            return !filterFilePaths.includes(e.name);
        });
        resolve(content);
    } else if (response.status === 401) {
        // need to reauthenticate
        ElMessage.error(
            `You seem to be unauthorised - do you need to log in to the service again?`
        );
        resolve([]);
    } else {
        // something else went wrong
        ElMessage.error(`There is an issue at this time`);
        resolve([]);
    }
}
async function handleNodeSelection() {
    if (props.mode === "openDirectory") {
        state.loading = true;
        let node = tree.value.getCheckedNodes()[0];
        const path = node.parent ? `${node.parent}/${node.path}` : node.path;
        const id = node.id;
        if (startsWith(path, "/")) {
            emit("selected-folder", { path: `${path}`, id });
        } else {
            emit("selected-folder", { path: `/${path}`, id });
        }
    } else {
        await debouncedAddParts();
    }
}
async function addParts() {
    state.loading = true;
    state.partsAdded = false;
    await new Promise((resolve) => setTimeout(resolve, 100));
    let nodes = cloneDeep(tree.value.getCheckedNodes());
    nodes = nodes.map((n) => {
        n.parent = n.parent.replace(props.root, "");
        return n;
    });
    emit("selected-nodes", nodes);
    state.loading = false;
    state.partsAdded = true;
    await new Promise((resolve) => setTimeout(resolve, 4000));
    state.partsAdded = false;
}
</script>

<style>
.el-tree-node__label {
    @apply text-sm;
}
.el-tree-node__content {
    @apply mb-1;
}
.is-disabled + .el-tree-node__label {
    @apply text-sm text-gray-400 cursor-not-allowed;
}
</style>
