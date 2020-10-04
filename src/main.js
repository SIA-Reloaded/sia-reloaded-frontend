import Vue from 'vue'

import VueRouter from 'vue-router'
import router from './router'

import App from './App.vue'

import Amplify, { Auth } from 'aws-amplify'
import '@aws-amplify/ui-vue'
// import aws_exports from './aws-exports'


// Amplify.configure(aws_exports)
Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:3e2b4338-299f-4ce1-8e38-c7514fb58a07',
    region: 'us-east-1',
    userPoolId: 'us-east-1_1H3phOiUI',
    userPoolWebClientId: '50i73pu4cr3okmf8lm9q5cpb5k'
  },
  API: {
    endpoints: [
      {
        name: "suia-api",
        endpoint: "https://letl8nmtdb.execute-api.us-east-1.amazonaws.com/dev",
        custom_header: async () => { 
          // return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
          return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
        }
      }
    ]
  }
})

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render (h) { return h(App) }
}).$mount('#app')
