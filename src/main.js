import Vue from 'vue'

import VueRouter from 'vue-router'
import router from './router'

import App from './App.vue'

import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import aws_exports from './aws-exports'


Amplify.configure(aws_exports)

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render (h) { return h(App) }
}).$mount('#app')
