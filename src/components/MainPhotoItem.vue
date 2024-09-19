<template>
  <div class="Main-photo-item">
    <div class="main-img">
    </div>
    <div class="text">
      <img src="" alt="">
      <h2>{{ Itemlist.codeName }}</h2>
      <p>BIRTH: {{ Itemlist.Birth }}</p>
      <p>EMBLEM: {{ Itemlist.EMBLEM }}</p>
      <p>INSTA: <a :href="`${Itemlist.href}`" target="_blank">LINK</a> </p>
    </div>
    <MainEffect ref="main" :main="main"/>
  </div>
</template>
  
<script>
import MainEffect from './MainEffect.vue';

export default {
  data(){
    return {
      CAM : ['1', '2', '3', '4'],
    }
  },
  props:{
    Itemlist:{
      type:Object,
      required :true,
      default:''
    }
  },
  components:{
    MainEffect
  }
  
}
</script>
<style lang="scss" scoped>
  .Main-photo-item{
    position:relative;
    width:100%;
    height:100vh;
    .main-img{
      width:100%;
      height:100%;
      background:url(../assets/main_karina.jpg) no-repeat left/cover
    }
    .text{
      width:400px;
      height:400px;
      position:absolute;
      display:flex;
      align-items: center;
      justify-content: center;
      top:30%;
      right:20%;
      z-index:30;
      background-color:#ffffff;
      color:#000;
      flex-direction: column;
      border-radius: 50%;
      h2{
        font-size:70px;
      }
      p{
        margin-bottom:10px;
        a{
          color:#000;
        }
      }
    }
  }
  .Main-photo-item:nth-child(2){
    .main-img{
      width:100%;
      height:100%;
      background:url(../assets/main_winter.jpg) no-repeat left/cover
    }
    .text{
      position:absolute;
      top:30%;
      left:20%;
      h2{
        font-size:70px;
      }
      p{
        margin-bottom:10px;
      }
    }
  }
  .Main-photo-item:nth-child(3){
    .main-img{
      width:100%;
      height:100%;
      background:url(../assets/main_giselle.jpg) no-repeat left/cover
    }

  }
  .Main-photo-item:nth-child(4){
    .main-img{
      width:100%;
      height:100%;
      background:url(../assets/main_ningning.jpg) no-repeat left/cover
    }
    .text{
      position:absolute;
      top:30%;
      left:20%;
    }
  }
</style>