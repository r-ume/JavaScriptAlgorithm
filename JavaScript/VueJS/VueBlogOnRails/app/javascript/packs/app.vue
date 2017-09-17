<template>
  <div>
    <app-header></app-header>
    <employees></employees>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Employees from './components/employees.vue';
import Footer from './components/footer.vue';

export default {
  components:{
    'app-header': Header,
    'employees':  Employees,
    'app-footer': Footer
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang = 'scss'>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>
