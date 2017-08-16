import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// Setting a component globally.
// Vue.component('ninja', Ninjas);

Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
