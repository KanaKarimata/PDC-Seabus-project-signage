import { createStore } from 'vuex'

export default createStore({
  state: {
    operationRuleId: {
      YOKOHAMA_STATION: 1,
      RED_BRICK: 2,
      YAMASHITA_PARK: 3
    },
  },
  getters: {
    getOperationRuleId: state => state.operationRuleId
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
