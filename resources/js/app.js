import './bootstrap';
import { createApp } from 'vue'
import router from './router/index.js'
import home from './components/pages/index.vue'

import App from './App.vue'

createApp(App).use(router).mount("#app")
