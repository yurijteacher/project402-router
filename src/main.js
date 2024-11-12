import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import store from './store'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
