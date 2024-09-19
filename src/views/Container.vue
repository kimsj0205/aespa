<template>
  <div class="container">
    <MainVideo/>
    <MainPhoto/>
    <div class="glass">
      <img src="../assets/glass.png" alt="">
    </div>
    <ScrollDown/>
  </div>
</template>
<script>

import ScrollDown from '@/components/ScrollDown.vue';
import MainPhoto from '../components/MainPhoto.vue';
import MainVideo from '../components/MainVideo.vue';


export default {
  components:{
    MainVideo,
    MainPhoto,
    ScrollDown
  }
}
</script>
<style lang="scss" scoped>
  .container{
    .glass{
      position:fixed;
      z-index:3;
      top:20%;
      transform: translateX(-50%);
      right:50%;
      img{
        width:80%;
      }
    }
  }
</style>