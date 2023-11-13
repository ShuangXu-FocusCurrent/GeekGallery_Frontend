
<script lang="ts">
import { defineComponent,reactive,onMounted } from 'vue'
import {InitPosts} from  "../type/posts"
import {getPostList} from "../request/api"

export default defineComponent({
  name:"ForYour",
  setup () {
    const data= reactive(new InitPosts());
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
    return {}
  }
})
</script>

<template>
  <div>
    ForYouView
  </div>
</template>

<style scoped>

</style>