import { createApp } from 'vue'
import 'virtual:windi.css'
import App from './App.vue'
import Hantao from './index'

createApp(App)
.use(Hantao)
.mount('#app')
