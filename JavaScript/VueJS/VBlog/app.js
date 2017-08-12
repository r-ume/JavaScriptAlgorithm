new Vue({
  el: '#vue-app',
  data: {
    name: 'baymax',
    job: 'robot',
    website: 'https://www.yahoo.co.jp/',
    websiteTag: '<a href = "http://www.thenetninja.co.uk">The Net Ninja Website</a>',
    age: 25,
    x: 0,
    y: 0
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
    }
  }
});

