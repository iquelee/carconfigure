import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import HeadLights from '../views/HeadLights.vue'
import Doors from '../views/Doors.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'nav',
        name: 'Nav',
        component: Nav
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
