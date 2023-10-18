<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import axios from 'axios';
const input1 = ref('')


// Define the type for a single post
type Post = {
  Id: number;
  Title: string;
  Content: string;
  CreateDate: string;
  LikeCount: number;
  CollectionCount: number;
};

// Create a ref for the posts array
const posts = ref<Array<Post>>([]);


// Axios request and data retrieval code here
axios.get('https://localhost:7142/api/Posts')
  .then(response => {
    // TypeScript will now understand the structure of the response
    posts.value = response.data; // Just assign the entire response data to posts
    console.log('Posts Data:', posts.value);
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
  });
</script>



<template>
  <div class="common-layout">
    <el-container>
      <el-header>
      <el-row >
        <el-col :span="4">
          <el-row>
            <el-col :span="1">
              <img class="logo" src="../assets/logo.png"/>
            </el-col>
            <el-col :span="2">
              
            </el-col>
          </el-row>
          
        
        </el-col>
        <el-col :span="16">
          <div class="demo-input-size">
            <el-input
              v-model="input1"
              class="w-50 m-2"
              size="large"
              placeholder="Please Input"
              :prefix-icon="Search"
            />
          </div>
        </el-col>
        <el-col :span="4">
          <el-row class="row-bg" justify="space-between">
            <el-col :span="1">
              1
            </el-col>
            <el-col :span="1">
              2
            </el-col>
            <el-col :span="1">
              3
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      </el-header>
      <el-container>
        <el-main>
          <div class="common-layout">
            <el-container>
              <el-header>Header</el-header>
              <el-main>
                Main
                <div>
                  <h1>Posts</h1>
                  <ul>
                    <li v-for="post in posts" :key="post.Id">
                      <h2>{{ post.Title }}</h2>
                      <p>{{ post.Content }}</p>
                      <p>Created on: {{ post.CreateDate }}</p>
                      <p>Likes: {{ post.LikeCount }}</p>
                      <p>Collections: {{ post.CollectionCount }}</p>
                    </li>
                  </ul>
                </div>
              </el-main>
            </el-container>
          </div>
        </el-main>
        <el-aside width="470px">Aside</el-aside>       
      </el-container>
    </el-container>
  </div>

  
 
</template>

<style lang="scss" scoped>
.logo{
  height:80px ;
}
h2,.logout{
  text-align: center;
  height: 80px;
  line-height: 80px;
}

.el-header{
  height: 80px;
  background-color: rgb(240, 191, 92);
}

</style>
