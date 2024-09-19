<template>
    <div class="PhotoItem">
      <button @click="closePopup()">X</button>
      <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      }"
      :navigation="true"
      :modules="modules"
      >
      <swiper-slide v-for="i in karina" :key="i">
        <div class="img-box">
          <img :src="`${i.src}`" />
        </div>
      </swiper-slide>
      </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
// Import Swiper styles

import 'swiper/css/effect-coverflow';
// import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    title:{
      type:Array,
      default:''
    }
  },  
  data(){
    return {
      isActive: false,
      disActive: true,
      karina:[
      {id : '1', src: require('../assets/karina1.jpg')},
      {id : '2', src: require('../assets/karina2.jpg')},
      {id : '3', src: require('../assets/karina3.jpg')},
      {id : '4', src: require('../assets/karina4.jpg')},
      {id : '5', src: require('../assets/karina5.jpg')},
      {id : '6', src: require('../assets/karina6.jpg')},
      {id : '7', src: require('../assets/karina7.jpg')},
      {id : '8', src: require('../assets/karina8.jpg')},
      ]
    }
  },
  setup() {
    return {
      modules: [EffectCoverflow,  Navigation],
    };
  },
  methods:{
      closePopup: function(){
        this.$emit('close-popup')
      },
    },
  }
</script>
<style lang="scss" scoped>
  .PhotoItem{
    height:100%;
    button{
      z-index:50;
      position:fixed;
      color:#fff;
      background:blue;
      padding:10px;
      font-size:20px;
      top:10px;
      right:30px;
    }
    .swiper {
        height:100%;
        margin:0;
        padding:0;
        padding: 20px;
        box-sizing: border-box;
        background-color:#00000083
    }
    
    .swiper-slide{
      background-position: center;
      background-size: cover;
      height:100%;
      .img-box{
        height:100%; 
      }
        img {
          padding-top:10px;
          border:10px solid #ffffff;
          height:100%;
          padding:calc(20 / 1800* 100* var(--unit));
          display: block;
          margin:0 auto;
          object-fit:contain;
          box-sizing:border-box
      }
    }
  }

</style>