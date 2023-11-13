<template>
 
    <div class="login-box">
      <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="90px"
    class="demo-ruleForm"
  >
  <h2>Sign in to your Account</h2>
    <el-form-item label="UserName" prop="username">
      <el-input v-model="ruleForm.username"  autocomplete="off" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input
        v-model="ruleForm.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    
    <el-form-item>
      <el-button class="login-btn" type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >
      <el-button class="reset-btn" @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
      
  </div>
 
  
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs,ref } from 'vue';
import{LoginData} from '../type/login';
import type{FormInstance} from 'element-plus';
import {login} from '../request/api';
import {useRouter} from "vue-router";
export default defineComponent({
  name:'Login',
  setup () {
    const data=reactive(new LoginData());
    const  rules={
          username: [
              { 
                required: true,
                 message: 'Please input your User Name', 
                 trigger: 'blur' 
                },
              { 
                min: 3, 
                max: 10,
                 message: 'Length should be 3 to 10',
                  trigger: 'blur' 
                },
            ],
            password:[
              { 
                required: true,
                 message: 'Please input Password', 
                 trigger: 'blur' 
                },
              { 
                min: 3, 
                max: 10,
                 message: 'Length should be 3 to 10',
                  trigger: 'blur' 
                },
            ]
        };
        //login
        const ruleFormRef= ref<FormInstance>();
        const router =useRouter();
        const submitForm = (formEl: FormInstance | undefined) => {
            if (!formEl) return;
            formEl.validate((valid) => {
              if (valid) {
               // console.log('submit!');
                
                login(data.ruleForm).then((res)=>{
                 // console.log(res);
                   // 将token进行保存
                  localStorage.setItem("token", res.data.token)
                  // 跳转页面
                  router.push('/');
                  
                });                
              } else {
                console.log('error submit!')
                return false;
              }
            })
          }
        //reset
        const resetForm = (formEl: FormInstance | undefined) =>{
          data.ruleForm.username="";
          data.ruleForm.password="";
        };


    return {...toRefs(data),rules,ruleFormRef,submitForm, resetForm};
  }
});
</script>

<style lang='scss' scoped>


  .login-box{
    width: 100%;
    height: 100%;
    background: url("../assets/background1.jpg");
    background-size: cover;
    background-size: 100% 100%; 
    padding:1px;
    text-align: center;
    /*
    background: linear-gradient(to bottom, #ff0000, #00ff00);
    */
    .demo-ruleForm{
      width:500px;
      margin:200px auto;
      background-color: rgb(217, 223, 238);
      padding:40px;
      border-radius: 20px;
    }
    .login-btn,.reset-btn{
      width: 48%;
    }

    h2{
      margin-bottom: 20px;
    }

    
  }
  

  

 
</style>