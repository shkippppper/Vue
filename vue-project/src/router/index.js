import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { authAjax } from '../api/urls'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
  
})

router.beforeEach((to, from, next) => {
  if (to.meta.protected && !isAuthenticated()) { 
    next('/authentication') 
  } else {
    next()
  }
})


function isAuthenticated() {
  return localStorage.getItem('userToken') !== null
}


export default router
