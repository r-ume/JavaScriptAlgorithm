import Vue         from 'vue'
import App         from './App.vue'
import VueResource from 'vue-resource'
import VueRouter   from 'vue-router'
import Routes      from './routes'

// Setting a component globally.
// Vue.component('ninja', Ninjas);

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  // ページのリロード無しに URL 遷移を実現する
  mode: 'history'
});

// Custom directives
// Vue.directive('rainbow', {
//   bind(el, binding, vnode){
//     el.style.color = '#' + Math.random().toString().slice(2, 8);
//   }
// });	

Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = '1200px';  
    } else if (binding.value == 'narrow'){
      el.style.maxWidth = '560px';
    }
    if(binding.arg == 'column'){
      el.sytle.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

// Filters
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// });

Vue.filter('spinnet', function(value){
  return value.slice(0, 100) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
