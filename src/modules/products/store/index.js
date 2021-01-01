const INCREMENT = "INCREMENT";
const SET_COUNTER = "SET_COUNTER";

export default {
  namespaced: true,

  state: () => ({
    counter: 0
  }),

  mutations: {
    [INCREMENT](state) {
      state.counter++;
    },

    [SET_COUNTER](state, value) {
      state.counter = value;
    }
  }
};
