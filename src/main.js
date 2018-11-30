import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
 
window.toastr = require('toastr')
 
Vue.use(VueToastr2)

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.http.options.root = 'https://hacknic-restapi.herokuapp.com/api'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
