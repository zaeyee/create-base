import App from './App.vue'
import router from './router'

import 'normalize.css/normalize.css' // CSS重置方案
import './styles/index.scss' // 全局样式

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
