<template>
  <!-- Be careful that wide should be in 'wide" -->
  <div v-theme:column = "'narrow'" id = 'show-blogs'>
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for = 'blog in filteredBlogs' class = 'single-blog'>
      <router-link v-bind:to = "'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <article>{{ blog.body | spinnet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data(){
    return{
      blogs: [],
      search: ''
    }
  },
  methods: {

  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0, 10);
    })
  },
  computed: {
    // filteredBlogs: function(){
    //   return this.blogs.filter((blog) => {
    //     return blog.title.match(this.search);
    //   })
    // }
  },
  // local registrations
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  // local registrations
  directives: {
    'rainbow': {
      bind(el, binding, vnode){
       el.style.color = '#' + Math.random().toString().slice(2, 8);
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}

.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
