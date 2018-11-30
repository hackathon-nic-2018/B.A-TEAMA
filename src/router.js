import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Perfil from './views/Perfil.vue'
import Buscador from './views/Buscador.vue'
import PageNotFound from './views/PageNotFound'
import About from './views/About'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: false }
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil,
      meta: { requiresAuth: true }
    },
    {
      path: '/buscar',
      name: 'buscar',
      component: Buscador,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { requiresAuth: false }
    },
    {
      path: '/page-not-found',
      name: 'PageNotFound',
      component: PageNotFound,
      meta: { requiresAuth: false }
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
      meta: { requiresAuth: false }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
  let auth = to.meta.requiresAuth
  if (auth) {
    if (!authUser) {
      next({ name: 'PageNotFound' })
    }
    else {
      next()
    }
  }
  else {
    next()
  }
})

export default router