import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export enum TestEnum {
    TEST_VALUE = 'testValue',
}


export default new Vuex.Store({
  state: {
      versionString: '3.1.5',
  },
  mutations: {
    setVersion(state, value: string) {
      state.versionString = value;
    }
  },
  actions: {
    async setVersionAction({commit}, value) {
      await commit('setVersion', value);
    }
  },
});
