import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Doors from '../views/Doors'
import HeadLights from '../views/HeadLights'
import Colors from '../views/Colors'
import VisualPacks from '../views/VisualPacks'
import Wheels from '../views/Wheels'
import colorsTitle from '../views/colorsTitle'
import doorsTitle from '../views/doorsTitle'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'doors',
        name: 'Doors',
        component: Doors,
        children: [
          {
            path: 'doorsTitle',
            name: 'doorsTitle',
            component: doorsTitle,
            props ($route) {
              return { doorsTitle: $route.query.doorsTitle }
            }
          }
        ]
      }, {
        path: 'headlights',
        name: 'HeadLights',
        component: HeadLights
      }, {
        path: 'colors',
        name: 'Colors',
        component: Colors,
        children: [
          {
            path: 'colorsTitle',
            name: 'colorsTitle',
            component: colorsTitle,
            props ($route) {
              return { colorsTitle: $route.query.colorsTitle }
            }
          }
        ]
      }, {
        path: 'visualpacks',
        name: 'VisualPacks',
        component: VisualPacks
      }, {
        path: 'wheels',
        name: 'Wheels',
        component: Wheels
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
