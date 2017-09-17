<template>
  <header>
    <h1>{{ headerTitle }}</h1>
  </header>
</template>

<script>
  export default{
    data(){
      return{
        headerTitle: 'Vue Ninjas'
      }
    }
  }
</script>

<style>
header{
  background: green;
  padding: 10px;
}

h1{
  color: #222;
  text-align: center;
}
</style>

