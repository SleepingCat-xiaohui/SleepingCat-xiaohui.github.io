/* eslint no-new: 0 */

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />',
})
