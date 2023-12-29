import { createRouter, createWebHistory } from 'vue-router'
import {store} from "@/store.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: store.routes
})

export default router
