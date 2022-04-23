import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.js'
import './styles/styles.scss'
createApp(App)
    .use(store)    
    .mount('#app')
