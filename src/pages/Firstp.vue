<template>

  <div class="container">
    <Dropdown v-model="selectedUser" :options="users" @change="fetchSortPosts(selectedUser)" optionLabel="name"
      placeholder="Выберите пользователя" style="width: auto;"/>

    <Cart v-if="loader" :post='post' v-for="post in posts" :key="post.id" />
    <ProgressSpinner v-else />

  </div>



</template>


<script>

import axios from 'axios';
import Cart from '../components/Cart.vue'
export default {
  components: {
    Cart
  },

  data() {
    return {
      posts: [],
      search: '',
      users:[],
      loader:false,
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        }
        
      ],
      selectedUser: null,
    
    }

  },

  methods: {
    async fetchposts() {
      const respon = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      this.posts = respon.data
      this.loader = true
    },

    async fetchSortPosts(post) {
      this.loader = false
      const respon = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${post.id}`);
      this.posts = respon.data
      this.loader = true
    },
    async fetchusers() {
      const respon = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.users = respon.data

    },
  },

  mounted() {
    this.fetchposts()
    this.fetchusers() 
  },
 

}



</script>

<style lang = 'scss'>
  
    .block {
      display: flex;
      height: 10%;
      background-color: rgb(118, 129, 233);
      width: 100%;
      border-radius: 20px;
      align-items: center;
    }
  
    .search {
      margin: 0 auto;
      border-radius: 20px;
      border-color: rgb(3, 3, 3);
      padding: 5px;
      height: 80%;
  
    }
  
    .container {
      display: flex;
      margin: 0 auto;
      width: 80%;
      align-items: center;
      flex-direction: column;
    }
  
    .cart {
      display: flex;
      flex-direction: row;
      column-gap: 20px;
      margin-top: 100px;
      border-radius: 20px;
  
  
    }


</style>