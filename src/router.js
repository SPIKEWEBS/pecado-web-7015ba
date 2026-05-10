import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import PoliticaCookiesView from './views/PoliticaCookiesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/politica-de-cookies',
    name: 'politica-cookies',
    component: PoliticaCookiesView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
