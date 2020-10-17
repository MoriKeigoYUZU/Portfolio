import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../pages/Top.vue'

import CA_Tech_Dojo_2020 from '../pages/internship/CA_Tech_Dojo_2020'
import CA_Tech_Challenge_2020 from '../pages/internship/CA_Tech_Challenge_2020'

import Etrobo_2018_awards from '../pages/awards/Etrobo_2018_awards'
import Othlohack2019_awards from '../pages/awards/Othlohack2019_awards'
import Toyohashihack2019_awards from '../pages/awards/Toyohashihack2019_awards'

import Etrobo_2019_production from '../pages/production/Etrobo_2019_production'
import Geohack2019_production from '../pages/production/Geohack2019_production'
import Kanjilearning_production from '../pages/production/Kanjilearning_production'
import MusicLinker_production from '../pages/production/MusicLinker_production'
import Othlohack2019_production from '../pages/production/Othlohack2019_production'
import Toyohashihack2019_production from '../pages/production/Toyohashihack2019_production'
import Saikyonote_production from '../pages/production/Saikyonote_production'
import templatemail_production from '../pages/production/templatemail_production'
import sukka_production from '../pages/production/sukka_production'
import HRR_production from '../pages/production/HRR_production'

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
  {
    path: '/Saikyonote_production',
    name: 'Saikyonote_production',
    component: Saikyonote_production
  },
  {
    path: '/sukka_production',
    name: 'sukka_production',
    component: sukka_production
  },
  {
    path: '/templatemail_production',
    name: 'templatemail_production',
    component: templatemail_production
  },
  {
    path: '/HRR_production',
    name: 'HRR_production',
    component: HRR_production
  },
  {
    path: '/CA_Tech_Challenge_2020',
    name: 'CA_Tech_Challenge_2020',
    component: CA_Tech_Challenge_2020
  },
  {
    path: '/CA_Tech_Dojo_2020',
    name: 'CA_Tech_Dojo_2020',
    component: CA_Tech_Dojo_2020
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
