<template>
  <div>
    <h1>List of employess</h1>
    <ul>
      <li v-for='employee in employees'>{{ employee }}</li>
    </ul>
  </div>

</template>

<script>
  export default{
    data(){
      return{
        employees: ['roy', 'yuta', 'jio', 'dafa', 'fuga']
      }
    }
  }
</script>
