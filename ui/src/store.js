import { cloneDeep } from "lodash";
import { createStore } from "vuex";
import router from "@/routes";

const mutations = {
    reset: (state) => {
        const s = resetState();
        Object.keys(s).forEach((key) => {
            state[key] = s[key];
        });
    },
    saveConfiguration: (state, payload) => {
        state.configuration = { ...payload.configuration };
    },
    setTargetResource: (state, payload) => {
        state.target = { ...payload };
    },
    setActiveCollection(state, payload) {
        state.collection = { ...payload };
    },
    setSelectedEntity(state, payload) {
        state.selectedEntity = { ...payload };
        router.push({ query: { eid: state.selectedEntity.id } }).catch(() => {});
    },
    setSessionInformation(state, payload) {
        state.session = { ...payload, created: new Date() };
    },
    setProfile(state, payload) {
        state.profile = { ...payload };
    },
};

const actions = {
    async loadConfiguration({ commit }) {
        let response = await fetch("/api/configuration");
        if (response.status === 200) {
            let { configuration } = await response.json();
            commit("saveConfiguration", { configuration });
        }
    },
};

const store = new createStore({
    state: resetState(),
    mutations,
    actions,
    modules: {},
    // plugins: [vuexLocal.plugin],
});

function resetState() {
    return cloneDeep({
        session: {},
        target: {
            resource: undefined,
            folder: undefined,
        },
        profile: {
            name: undefined,
            version: undefined,
            description: undefined,
            file: undefined,
        },
        configuration: undefined,
        collection: {},
        selectedEntity: { id: "RootDataset" },
    });
}

export default store;
