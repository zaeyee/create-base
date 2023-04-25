import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind-compat.css'
import 'uno.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
