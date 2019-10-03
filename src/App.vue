<template>
  <div id="app">
    <PostForm/>
    <h1>{{ postsCount }}</h1>
    <div class="post" v-for="post in allPosts" :key="post.id">
       <h2>{{ post.title }}</h2>
       <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import PostForm from './components/PostForm';
export default {
  name: 'app',
  computed: mapGetters(['allPosts','postsCount']),
  methods: mapActions(['fetchPosts']),
  components: { PostForm },
  async mounted(){
    this.fetchPosts();
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px auto;
  width: 400px;
}
.post {
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 15px;
}
</style>
