import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'aos/dist/aos.css'
import AOS from "aos";
import axios from 'axios'
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

import Vue3Autocounter from 'vue3-autocounter';

const app = createApp(App)

app.use(router)

AOS.init();


const pinia = createPinia();
pinia.use(createPersistedState());

app.use(pinia);

app.component('vue3-autocounter', Vue3Autocounter)
app.mount('#app')
