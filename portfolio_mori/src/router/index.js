import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../pages/Top.vue'

import Etrobo_2018_awards from '../pages/awards/Etrobo_2018_awards'
import Othlohack2019_awards from '../pages/awards/Othlohack2019_awards'
import Toyohashihack2019_awards from '../pages/awards/Toyohashihack2019_awards'

import Etrobo_2019_production from '../pages/production/Etrobo_2019_production'
import Geohack2019_production from '../pages/production/Geohack2019_production'
import Kanjilearning_production from '../pages/production/Kanjilearning_production'
import MusicLinker_production from '../pages/production/MusicLinker_production'
import Othlohack2019_production from '../pages/production/Othlohack2019_production'
import Toyohashihack2019_production from '../pages/production/Toyohashihack2019_production'


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
  },
  {
    path: '/Etrobo_2019_production',
    name: 'Etrobo_2019_production',
    component: Etrobo_2019_production
  },
  {
    path: '/Geohack2019_production',
    name: 'Geohack2019_production',
    component: Geohack2019_production
  },
  {
    path: '/Kanjilearning_production',
    name: 'Kanjilearning_production',
    component: Kanjilearning_production
  },
  {
    path: '/MusicLinker_production',
    name: 'MusicLinker_production',
    component: MusicLinker_production
  },
  {
    path: '/Othlohack2019_production',
    name: 'Othlohack2019_production',
    component: Othlohack2019_production
  },
  {
    path: '/Toyohashihack2019_production',
    name: 'Toyohashihack2019_production',
    component: Toyohashihack2019_production
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
