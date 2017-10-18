import Vue from 'vue/dist/vue.esm'
import App from './app.vue'
// import VueResource from 'vue-resource'

Vue.use(VueResource);

document.addEventListener('DOMContentLoaded', () => {
  // Vue.component('greeting', {
  //   template: '<p>hey there, I am {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
  //   data: function() {
  //     "use strict";
  //
  //     return{
  //       name: 'Yoshi'
  //     }
  //   },
  //   methods: {
  //     changeName: function(){
  //       "use strict";
  //       this.name = 'Mario';
  //     }
  //   }
  //
  // });

  new Vue({
    el: '#app',
    render: h => h(App)
  });

  var employees = new Vue({
    el: '#employees',
    data: {
      employees: []
    },
    created() {
      this.$http.get('/employees.json').then(function(data){
        console.log(data);
      });
    }
  });
});
