<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import type { TabsPaneContext } from 'element-plus'
import { defineComponent } from 'vue';


const input1 = ref('');
const SearchIcon = Search;
const router=useRouter();
console.log(router.getRoutes);
const list=router.getRoutes().filter(v=>v.meta.isShow);
console.log(list);
const activeName = ref(''); // Initialize as per your default route
const handleTabClick = (tab: TabsPaneContext) => {
  // Update the route when a tab is clicked
  router.push({ path: tab.props.name as string });
};
// // Define the type for a single post
// type Post = {
//   Id: number;
//   title: string;
//   author:string;
//   content: string;
//   createdAt: string;
 
// };

// Create a ref for the posts array
// const posts = ref<Array<Post>>([]);

// // Axios request and data retrieval code here
// axios.get('http://ec2-3-90-247-48.compute-1.amazonaws.com/GetAll')
//   .then(response => {
//     // TypeScript will now understand the structure of the response
//     posts.value = response.data; // Just assign the entire response data to posts
//     console.log('Posts Data:', posts.value);
//   })
//   .catch(error => {
//     console.error('Error fetching posts:', error);
//   });

  //
  





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
        <el-col :span="16" class="top_middle">
          <div class="demo-input-size">
            <el-input 
              v-model="input1"
              class="w-50 m-2  custom-input"
              size="large"
              placeholder="Please Input"
              :prefix-icon="Search"
              
            />
          </div>
        </el-col>
        <el-col :span="4">
          <el-row class="row-bg" justify="space-evenly">
            <el-col :span="1">
              <div class="create_btn" >
                <el-button type="warning" round>Create</el-button>
              </div>
            </el-col>
            <el-col :span="1">
              
             
            </el-col>
            <el-col :span="1">
              <div class="user_icon"><button class="log-out-btn">Xu</button></div>
              
              <el-icon><User /></el-icon>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      </el-header>
      <el-container class="body_container">
        
        <el-main>
          <div class="common-layout">
            <el-container>
              

              
                <div class="main2">
                
                  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleTabClick">
                    <el-tab-pane v-for="item in list" :key="item.name" :label="item.meta.title" :name="item.name">
                    </el-tab-pane>
                    
                    <!-- <div>
                      <h1> </h1> -->
                      <!-- <ul>
                        <li v-for="post in posts" :key="post.Id">
                          <h2>{{ post.title }}</h2>
                          <p>{{ post.content }}</p>
                          <p>Created on: {{ post.createdAt}}</p>
                          <p>Author: {{ post.author }}</p>
                          
                        </li>
                      </ul> -->
                      
                   
                    <!-- </div> -->
                  
                        
                  </el-tabs>
                  <router-view></router-view>
                </div>

             
              <!-- <el-header>
                <el-menu
                  class="el-menu-demo"
                  mode="horizontal"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                 
                >
                  <el-menu-item index="1">For you</el-menu-item>
                  
      
                </el-menu>
              </el-header> -->
              <!-- <el-main>
                Main
                <div>
                  <h1>Posts</h1>
                  <ul>
                    <li v-for="post in posts" :key="post.Id">
                      <h2>{{ post.title }}</h2>
                      <p>{{ post.content }}</p>
                      <p>Created on: {{ post.createdAt}}</p>
                      <p>Author: {{ post.author }}</p>
                      
                    </li>
                  </ul>
                </div>
              </el-main> -->
            </el-container>
          </div>
        </el-main>

      
        <el-aside width="470px">
          <div class="aside">
           <div class="aside2"></div>
          </div>
        </el-aside>       
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
  //background-color: rgb(240, 191, 92);
}

.custom-input{
  padding-top: 25px;
  
}

.create_btn{
  padding-top: 30px;
}
.log-out-btn{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: orange;
  color: white;
  border: 2cm;
 
}
.user_icon{
  padding-top:20px ;
}




.body_container{
  //background-color: #f2eded ;
  background-color: hsl(0, 8%, 95%) ;
  
}

.main2{
  padding-left: 50px;
  height: 600px;
  width: 900px;
  background-color: white;


}
.demo-tabs {
  padding-right: 40px;
 
}

.aside{
  background-color: hsl(0, 8%, 95%) ;
}
.aside2{
  height: 600px;
  background-color: white;
  margin-right: 20px;
  margin-top: 20px;
}

</style>
