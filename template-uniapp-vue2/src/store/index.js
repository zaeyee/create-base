import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 自动导入模块
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  modules[moduleName] = modulesFiles(modulePath).default
  return modules
}, {})

const store = new Vuex.Store({
  modules
})

export default store
