import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Etrobo_2018_awards from '../pages/Etrobo_2018_awards'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/Etrobo_2018_awards',
    name: 'Etrobo_2018_awards',
    component: Etrobo_2018_awards
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
