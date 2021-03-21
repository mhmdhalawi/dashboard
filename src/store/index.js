import { createStore } from 'vuex';

export default createStore({
  state: {
    token: '',
  },
  mutations: {
    setToken(state) {
      state.token = 'token';
    },
  },
  actions: {},
  modules: {},
});
