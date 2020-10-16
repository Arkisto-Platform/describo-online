import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const mutations = {
    saveConfiguration: (state, payload) => {
        state.configuration = { ...payload.configuration };
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

export default new Vuex.Store({
    state: {
        configuration: undefined,
    },
    mutations,
    actions,
    modules: {},
});
