
<script lang="ts">
import { defineComponent, ref, onMounted,reactive } from 'vue'
import {InitPosts} from  "../type/posts";
import {getPostList} from "../request/api";
import axios from 'axios';


export default defineComponent({
  name:"ForYour",
  setup () {
   
    const posts = reactive(new InitPosts());
    


    // Axios request and data retrieval code here
      axios.get('http://ec2-3-90-247-48.compute-1.amazonaws.com/GetAll')
        .then(response => {
          // TypeScript will now understand the structure of the response
          posts.list = response.data; // Just assign the entire response data to posts
          console.log('Posts Data:', posts.list);
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });



    // const data= reactive(new InitPosts());
    // onMounted(()=>{
    //   getPosts()
    // });

    // const getPosts=()=>{
    //   getPostList().then((res)=>{
    //     if (res.data && res.data.code !== 200) {
    //       console.error('Request error:', res.data.message);
    //     } else {
    //       data.list = res.data;
    //       console.log("Posts data: "+ data.list );
    //     }

    //   }).catch(e => {
    //     console.error('Request error:', e);     
    //   })
    // }
    return {posts}
  }
})
</script>

<template>
  <div>
    ForYouView
    <div>
      <ul>
        <li v-for="post in posts.list" :key="post.Id">
         <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
            <p>Created on: {{ post.createdAt}}</p>
            <p>Author: {{ post.author }}</p>
            <button>Create</button>
            <button>Update</button> 
            <button>Delete</button>                
        </li>
     </ul>
    </div>
    
  </div>
</template>

<style scoped>

</style>