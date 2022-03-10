import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from "@/views/FormView";
import SuccessView from "@/views/SuccessView";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form',
    component: FormView
  },
  {
    path: '/success',
    component: SuccessView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
