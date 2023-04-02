import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VWave from 'v-wave'
import '@/assets/costom.scss'
import '@/assets/css/all.css'
import App from './App.vue'
import router from './router'

import './assets/costom.scss'

// Import Bootstrap to use 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js' 

const app = createApp(App)

app.use(createPinia())
app.use(router).use( VWave , {
      initialOpacity: 0.25,
      easing: 'ease-in',
})
app.mount('#app')
