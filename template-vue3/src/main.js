import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css' // CSS重置方案
import './styles/index.scss' // 全局样式

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
