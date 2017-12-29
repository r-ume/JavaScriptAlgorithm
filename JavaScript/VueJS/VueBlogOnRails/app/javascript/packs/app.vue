<template>
  <div>
    <app-header v-bind:title='title' v-on:changeTitle="updateTitle($event)"></app-header>
    <employees  v-bind:employees='employees'></employees>
    <app-footer v-bind:title='title'></app-footer>
  </div>
</template>

<script>
import Header    from './components/header.vue';
import Employees from './components/employees.vue';
import Footer    from './components/footer.vue';

export default {
  components:{
    'app-header': Header,
    'employees':  Employees,
    'app-footer': Footer
  },
  data () {
    return {
      employees: [
        {name: 'roy',     speciality: 'Vue Components', show: false },
        {name: 'crystal', speciality: 'HTML Wizardry',  show: false },
        {name: 'Hitoshi', speciality: 'Click Events',   show: false },
        {name: 'Tango',   speciality: 'Conditionals',   show: false },
        {name: 'Kami',    speciality: 'Webpack',        show: false },
        {name: 'Yoshi',   speciality: 'Data Diggin',    show: false }
      ],
      title: 'Vue Wizards'
    }
  },
  methods: {
    updateTitle: function(updateTitle){
      this.title = updateTitle;
    }
  }
}
</script>

<style lang = 'scss'>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>
