import * as ElementIcons from '@element-plus/icons-vue'
import App from './App.vue'
import directives from './directives'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css' // CSS重置方案
import './styles/index.scss' // 全局样式

const app = createApp(App)

// 将 element-plus 的图标库注册到全局
Object.keys(ElementIcons).forEach(key => {
  app.component(`IEp${ElementIcons[key].name}`, ElementIcons[key])
})

// 遍历注册全局指令
directives.forEach(directive => {
  app.use(directive)
})

app.use(router)
app.use(store)
app.mount('#app')
