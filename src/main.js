import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js' // CRITICAL LINE

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/styles/variables.scss'

const app = createApp(App)
app.use(createPinia()) // State management
app.use(router) // ROUTING - CRITICAL
app.mount('#app')
