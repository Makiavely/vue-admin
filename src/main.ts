import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/';

//Тут обязательно надо ставить обратные кавычки у Bearer и писать axios.defaults.headers.COMMON['Authorization']
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

createApp(App).use(store).use(router).mount('#app')
