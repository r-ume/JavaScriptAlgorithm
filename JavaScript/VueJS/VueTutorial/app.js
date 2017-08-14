var data = {
  componentName: 'Yoshi'
};

Vue.component('greeting', {
  template: '<p>Hey there, I am {{ componentName }}. <button v-on:click="changeName">Change Name</button></p>',
  // In a component, data section should return an OBJECT.
  data: function(){
    return{
      componentName: 'Yoshi'
    }
    // If you write like below, properties will be affected in all the ranges this component is used.
    // return data
  },
  methods:{
    changeName: function(){
      this.componentName = "Mario";
    }
  }
});

const one = new Vue({
  el: '#vue-app-one',
  data: {
    name: 'baymax',
    job: 'robot',
    website: 'https://www.yahoo.co.jp/',
    websiteTag: '<a href = "http://www.thenetninja.co.uk">The Net Ninja Website</a>',
    age: 25,
    x: 0,
    y: 0,
    log_name: '',
    log_age: '',
    a: 0,
    b: 0,
    computatedAge: 20,
    available: false,
    nearby: false,
    success: false,
    error: false,
    characters: [
      'Mario', 'Luigi', 'Yoshi', 'Bowser'
    ],
    ninjas: [
      { name: 'Ryu', age: 25 },
      { name: 'Yoshi', age: 35},
      { name: 'Ken', age: 55}
    ],
    output: 'Your fav food'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    },
    add: function(increment){
      this.age += increment;
    },
    subtract: function(decrement){
      this.age -= decrement;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function(){
      alert('You clicked me');
    },
    logName: function(){
      console.log('you entered your name');
    },
    logAge: function(){
      console.log('your entered your log');
    },
    readRefs: function(){
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    }
  },
  computed: {
    addToA: function(){
      return this.a + this.computatedAge;
    },
    addToB: function(){
      return this.b + this.computatedAge;
    },
    compClasses: function(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});

const two = new Vue({
  el: "#vue-app-two",
  data: {
    title: 'Vue App Two'
  },
  methods: {
    changeName: function(){
      // a way of accessing the instance one
      one.name = "Title Change";
    }
  }
});

two.title = "Changed from outside";

