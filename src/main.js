import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './index.css'
import router from './router'
import 'animate.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

console.log(router)