const state = () => ({
  token: ''
})

const getters = {
  hasToken: state => !!state.token
}

const mutations = {
  // 设置token
  SET_TOKEN: (state, token) => {
    state.token = token
    uni.setStorageSync('token', token)
  }
}

const actions = {
  // 退出登录
  logout({ commit }) {
    commit('SET_TOKEN', '')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
