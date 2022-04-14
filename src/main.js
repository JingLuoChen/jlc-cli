import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import xui from '../packages'
console.log(xui, 'xui')
// import mico from '../lib/mico-com.es.js'
// import '../dist/style.css'

createApp(App).use(xui).mount('#app')
