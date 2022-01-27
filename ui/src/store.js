import { cloneDeep } from "lodash";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

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
        state.session = { create: new Date() };
        state.target = { ...payload };
    },
    setActiveCollection(state, payload) {
        state.collection = { ...payload };
    },
    setSelectedEntity(state, payload) {
        state.selectedEntity = { ...payload };
    },
    setSessionInformation(state, payload) {
        state.session = { ...state.session, ...payload };
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

export const store = new Vuex.Store({
    state: {
        ...resetState(),
        configuration: undefined,
    },
    mutations,
    actions,
    modules: {},
});

function resetState() {
    return cloneDeep({
        session: {
            create: new Date(),
        },
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
        collection: {},
        selectedEntity: { id: "RootDataset" },
    });
}
