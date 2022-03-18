import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Doors from '../views/Doors'
import HeadLights from '../views/HeadLights'
import Colors from '../views/Colors'
import VisualPacks from '../views/VisualPacks'
import Wheels from '../views/Wheels'
import ColorsTitle from '../views/ColorsTitle'
import DoorsTitle from '../views/DoorsTitle'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: { name: 'Colors' },
    component: Main,
    children: [
      {
        path: 'doors',
        name: 'Doors',
        component: Doors,
        children: [
          {
            path: 'doorsTitle',
            name: 'DoorsTitle',
            component: DoorsTitle,
            props ($route) {
              return { doorsTitle: $route.query.doorsTitle }
            }
          }
        ]
      }, {
        path: 'headLights',
        name: 'HeadLights',
        component: HeadLights
      }, {
        path: 'colors',
        name: 'Colors',
        redirect: { name: 'ColorsTitle', query: { id: 1, colorsTitle: 'Red' } },
        component: Colors,
        children: [
          {
            path: 'colorsTitle',
            name: 'ColorsTitle',
            component: ColorsTitle,
            props ($route) {
              return { id: $route.query.id, colorsTitle: $route.query.colorsTitle }
            }
          }
        ]
      }, {
        path: 'visualPacks',
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
