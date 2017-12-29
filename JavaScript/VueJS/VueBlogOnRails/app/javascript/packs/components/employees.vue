<template>
  <div id = "employess">
    <h1>List of employess</h1>
    <ul>
      <li v-for='employee in employees' 
          v-on:click = 'employee.show = !employee.show'>
          <h2>{{ employee.name }}</h2>
          <h3 v-show='employee.show'>{{ employee.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click = 'deleteEmployee'>Delete an Employee</button> 
  </div>
</template>

<script>
  export default{
    props: {
      employees: {
        type: Array,
        required: true
      }
    },
    data(){
      return{

      }
    },
    methods: {
      deleteEmployee: function(){
        this.employees.pop();
      }
    }
  }
</script>

<style scoped>
  #ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
