import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        mainMessage: 'Vuex title',
    },
    mutations: {
        changeMessage(state, payload) {
            state.mainMessage = payload;
        },
    },
    actions: {
        sendServer(context) {
            context.commit('changeMessage');
        },
    },
});

export default store;