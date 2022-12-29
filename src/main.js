import { createApp } from 'vue'
import '../style.css'
import App from "./App.vue"
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state:{
        playing: '',
        line: ''
    },
})

// 将 store 实例作为插件安装

const app = createApp(App)
app.use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.mount("#app")
