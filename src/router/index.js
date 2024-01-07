import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Accueil",
      component: () => import('../views/AccueilView.vue')
    },
    {
      path: "/:pate",
      name: "Pate",
      component: () => import ('../views/CalculateurPate.vue')
    }
  ]
})

export default router
