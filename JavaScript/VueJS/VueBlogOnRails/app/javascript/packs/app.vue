<template>
  <div>
    <!-- <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p> -->
    <app-header></app-header>
    <employees></employees>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Employees from './components/employees.vue';

export default {
  components:{
    'app-header': Header,
    'employees': Employees
  },
  data () {
    return {
      // title: "My first vue file",
    }
  },
  methods: {
    greeting: function(){
      return 'hoge';
    }
  }
}
</script>

<style lang = 'scss'>
  @import './home.scss'

</style>
