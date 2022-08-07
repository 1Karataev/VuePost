import { createRouter, createWebHistory } from "vue-router"
import Firstp from '../pages/Firstp.vue'
import PostPage from '../pages/PostPage.vue'
const routes = [
  {
    path:'/',
    component:Firstp
  },
   {
    path:'/:id',
    component:PostPage
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
  
})


export default router