<template>
  <div id = "ninjas">
    <ul>
      <li v-for='ninja in ninjas' v-on:click = "ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show='ninja.show'>{{ ninja.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click = "deleteNinja">Delete Ninja</button>
  </div>  
</template>

<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    deleteNinja: function(){
      this.ninjas.pop();
    }
  }
}
</script>

<style scoped>
#ninjas{
  width: 100%;
  max-width: 100%;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul{
  display: flex;
  /* flex-wrap プロパティは、flex アイテムを単一ラインに押し込むか、あるいは複数ラインに折り返してもよいかを指定します */
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
