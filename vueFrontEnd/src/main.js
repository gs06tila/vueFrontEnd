// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Icon } from 'leaflet'
import BootstrapVue from 'bootstrap-vue'
import NProgress from 'nprogress'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/nprogress/nprogress.css'
import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = true

Vue.use(BootstrapVue)
/* eslint-disable no-new */

delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
