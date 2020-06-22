import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../pages/Top.vue'

import Etrobo_2018_awards from '../pages/awards/Etrobo_2018_awards'
import Othlohack2019_awards from '../pages/awards/Othlohack2019_awards'
import Toyohashihack2019_awards from '../pages/awards/Toyohashihack2019_awards'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/Etrobo_2018_awards',
    name: 'Etrobo_2018_awards',
    component: Etrobo_2018_awards
  },
  {
    path: '/Othlohack2019_awards',
    name: 'Othlohack2019_awards',
    component: Othlohack2019_awards
  },
  {
    path: '/Toyohashihack2019_awards',
    name: 'Toyohashihack2019_awards',
    component: Toyohashihack2019_awards
  }




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
