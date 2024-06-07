import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn';
import locale from 'element-plus/es/locale/lang/zh-cn';
import './style.css'
import App from './App.vue'
import './tailwind.css'


createApp(App).use(ElementPlus,{locale}).mount('#app')