import Vue from 'vue'
import App from './App.vue'

// Setting a component globally.
// Vue.component('ninja', Ninjas);

new Vue({
  el: '#app',
  render: h => h(App)
})
