<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import{onMounted} from 'vue';

onMounted(()=>{
  document.body.style.setProperty('--el-color-primary','#e6a312')
})
</script>

<template>


  <RouterView />
</template>

<style lang="scss">

*{
  padding: 0px;
  margin: 0px;
}
html,body,#app{
  width: 100%;
  height: 100%;
}


</style>
