import {createRouter, createWebHashHistory} from 'vue-router'

// 导入组件
import Index from '../components/Index.vue'
import Playlist from "../components/Playlist.vue";
import Play from "../components/Play.vue";

// 定义路由表
const routes = [
  {path: '/', component: Index},
  {path: '/acg/:id', component: Playlist},
  {path: '/play', component: Play},
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 最后需要导出，注意导出的语法
export default router;