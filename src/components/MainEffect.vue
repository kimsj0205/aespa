<template>
  <div class="main center" ref="main">
    <div class="MainEffect box-1">
      <h5>CAM</h5>
    </div>
    <div class="MainEffect box-2">
      <h5>CAM</h5>
    </div>
    <div class="MainEffect box-3">
      <h5>CAM</h5>
    </div>
    <div class="MainEffect box-4">
      <h5>CAM</h5>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes1 = self.selector('.box-1');
    boxes1.forEach((box) => {
      gsap.to(box, {
        x: 0,
        y:-600,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 0',
          scrub: true,
        },
      });
    });
  }, main.value);
  ctx = gsap.context((self) => {
    const boxes2 = self.selector('.box-2');
    boxes2.forEach((box) => {
      gsap.to(box, {
        x: 0,
        y:-600,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 0',
          scrub: true,
        },
      });
    });
  }, main.value);
  ctx = gsap.context((self) => {
    const boxes2 = self.selector('.box-3');
    boxes2.forEach((box) => {
      gsap.to(box, {
        x: 0,
        y:-600,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 0',
          scrub: true,
        },
      });
    });
  }, main.value);
  ctx = gsap.context((self) => {
    const boxes2 = self.selector('.box-4');
    boxes2.forEach((box) => {
      gsap.to(box, {
        x: 0,
        y:-600,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 0',
          scrub: true,
        },
      });
    });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert(); 
});



</script>
<style lang="scss" scoped>
  .Main-photo-item{
    position:relative;
    .MainEffect{
      position:absolute;
      z-index:1;
      outline:1px solid gray;
      width:250px;
      height:500px;
      &.box-1{
        background: url(../assets/main_effect_karina.jpg) no-repeat center/cover;
        right:100px;
        bottom:100px;
      }
      &.box-2{
        background: url(../assets/main_effect_karina2.jpg) no-repeat center/cover;
        right:200px;
        bottom:300px;
        width:500px;
        height:200px;
      }
      &.box-3{
        background: url(../assets/main_effect_karina3.jpg) no-repeat center/cover;
        left:100px;
        bottom:-200px;
        width:500px;
        
      }
      &.box-4{
        background: url(../assets/main_effect_karina4.jpg) no-repeat center/cover;
        right:500px;
        bottom:-100px;
      }
      h5{
        display:inline-block;
        padding:5px;
        background-color:gray;
        color:#fff;
      }
      
    }
  }
  .Main-photo-item:nth-child(2){
    .MainEffect{
      width:450px;
      height:300px;
      
      &.box-1{
        background: url(../assets/main_effect_winter.jpg) no-repeat center/cover;
        right:500px;
        bottom:100px;
      }
      &.box-2{
        background: url(../assets/main_effect_winter2.jpg) no-repeat center/cover;
        left:50px;
        bottom:300px;
        width:100px;
        height:300px;
      }
      &.box-3{
        background: url(../assets/main_effect_winter3.jpg) no-repeat center/cover;
        left:100px;
        bottom:-200px;
      }
      &.box-4{
        background: url(../assets/main_effect_winter4.jpg) no-repeat center/cover;
        right:20px;
        bottom:-100px;
        width:250px;
      height:100px;
      }
    }
  }
  .Main-photo-item:nth-child(3){
    .MainEffect{
      width:450px;
      height:300px;
      
      &.box-1{
        background: url(../assets/main_effect_giselle.jpg) no-repeat center/cover;
        right:500px;
        top:200px;
      }
      &.box-2{
        background: url(../assets/main_effect_giselle2.jpg) no-repeat center/cover;
        left:50px;
        bottom:300px;
        width:200px;
        height:300px;
      }
      &.box-3{
        background: url(../assets/main_effect_giselle3.jpg) no-repeat center/cover;
        left:100px;
        bottom:-200px;
      }
      &.box-4{
        background: url(../assets/main_effect_giselle4.jpg) no-repeat center/cover;
        right:20px;
        bottom:-100px;
        width:250px;
        height:100px;
      }
    }
  }
  .Main-photo-item:nth-child(4){
    .MainEffect{
      width:450px;
      height:300px;
      &.box-1{
        background: url(../assets/main_effect_ningning.jpg) no-repeat center/cover;
        right:500px;
        top:200px;
      }
      &.box-2{
        background: url(../assets/main_effect_ningning2.jpg) no-repeat center/cover;
        right:50px;
        bottom:300px;
        width:200px;
        height:300px;
      }
      &.box-3{
        background: url(../assets/main_effect_ningning3.jpg) no-repeat center/cover;
        right:-500px;
        bottom:300px;
        width:100px;
      }
      &.box-4{
        background: url(../assets/main_effect_ningning4.jpg) no-repeat center/cover;
        left:500px;
        top:300px;
        width:250px;
        height:100px;
      }
    }
  }
</style>