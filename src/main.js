import Vue from 'vue'
import App from './App.vue'
import { Switch, Slider } from 'element-ui'
import router from './router'
import store from './store'
import './assets/css/style.scss'
import './assets/iconfont/iconfont.css'
import './assets/css/element-variables.scss'

Vue.prototype.$ELEMENT = { size: 'default', zIndex: 3000 }
Vue.use(Switch)
Vue.use(Slider)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
