new Vue({
  el: '#vue-app',
  data: {
    name: 'baymax',
    job: 'robot',
    website: 'https://www.yahoo.co.jp/',
    websiteTag: '<a href = "http://www.thenetninja.co.uk">The Net Ninja Website</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});

