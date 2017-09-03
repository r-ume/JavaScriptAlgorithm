import Vue from 'vue/dist/vue.esm'
// import App from './app.vue'
//

document.addEventListener('DOMContentLoaded', () => {
  Vue.component('greeting', {
    template: '<p>hey there, I am {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
    data: function() {
      "use strict";

      return{
        name: 'Yoshi'
      }
    },
    methods: {
      changeName: function(){
        "use strict";
        this.name = 'Mario';
      }
    }

  });

  new Vue({
    el: '#vue-app-one',
    data: {
      name: 'roy',
      job: 'disney'
    },
  });

  new Vue({
    el: '#vue-app-two'
  });
});
