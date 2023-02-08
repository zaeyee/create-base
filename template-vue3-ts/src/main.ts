import App from './App.vue'
import router from './router'

import 'normalize.css' // CSS重置方案
import 'uno.css' // UnoCSS
import './style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
