import Vue from 'vue'
import VueRouter from "vue-router"
import Home from '../views/Home.vue'

import Top from '../pages/Top'
import Etrobo2018_awards from '../pages/awards/Etrobo2018_awards'


Vue.use(VueRouter);
// Vue.use(Router);

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Top',
    name: Top,
    component: Top
  },
  {
    path: '/Etrobo2018_awards',
    name: Etrobo2018_awards,
    component: Etrobo2018_awards
  },
]

const router = new VueRouter({
  router : routes,
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/Top',
    //   name: Top,
    //   component: Top
    // },
    // {
    //   path: '/Etrobo2018_awards',
    //   name: Etrobo2018_awards,
    //   component: Etrobo2018_awards
    // },

  ]

})

export default router
