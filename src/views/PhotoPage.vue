<template>
  <div class="photo-page">
    <div class="inner">
      <div class="button-group">
        <button @click="popOpen1()"><img src="../assets/karina_button.png" alt="" :title="karina"></button>
        <button @click="popOpen2()"><img src="../assets/winter_button.png" alt="" :title="winter"></button>
        <button @click="popOpen3()"><img src="../assets/giselle_button.png" alt="" :title="giselle"></button>
        <button @click="popOpen4()"><img src="../assets/ningning_button.png" alt="" :title="ningning"></button>
      </div>
    </div>
    <div class="photo-item" :class="{ isActive : isActiveA }" >
      <PhotoItem1 @close-popup="popOpen1()"/>
    </div>
    <div class="photo-item" :class="{ isActive : isActiveB }" >
      <PhotoItem2 @close-popup="popOpen2()"/>
    </div>
    <div class="photo-item" :class="{ isActive : isActiveC }" >
      <PhotoItem3 @close-popup="popOpen3()"/>
    </div>
    <div class="photo-item" :class="{ isActive : isActiveD }" >
      <PhotoItem4 @close-popup="popOpen4()"/>
    </div>
  </div>
</template>
<script>
import PhotoItem1 from '../components/PhotoItem1.vue';
import PhotoItem2 from '../components/PhotoItem2.vue';
import PhotoItem3 from '../components/PhotoItem3.vue';
import PhotoItem4 from '../components/PhotoItem4.vue';
export default {
  components:{
    PhotoItem1,
    PhotoItem2,
    PhotoItem3,
    PhotoItem4,
  },
  data: ()=>{
    return {
      isActiveA : false,
      isActiveB : false,
      isActiveC : false,
      isActiveD : false,
      title : ['karina','winter','giselle', 'ningning']
    }
  },
  methods: {
    popOpen(){
      this.isActive = (this.isActive) ? false : true
    },
    popOpen1(){
      this.isActiveA = (this.isActiveA) ? false : true
    },
    popOpen2(){
      this.isActiveB = (this.isActiveB) ? false : true
    },
    popOpen3(){
      this.isActiveC = (this.isActiveC) ? false : true
    },
    popOpen4(){
      this.isActiveD = (this.isActiveD) ? false : true
    },
  }
}

</script>
<style lang="scss" scoped>
  .photo-page{
    position:relative;
    transition:.5s;
    .inner{
  margin:0 auto;
      height:calc(100vh - 330px);
      .button-group{
        width:100%;
        position:absolute;
        flex-wrap: wrap;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        display:flex;
        align-items: center;
        justify-content: space-evenly;
        gap:20px;
        >button{
          width:25%;
          max-width:300px;
          min-width:150px;
          transition:.3s;
          border:1px solid transparent;
          position:relative;
          &:hover{
            border:1px solid #fff;
            border-radius: 50%;
          }
          &:hover:first-child::before{
            display:block;
          }
          &:first-child::before{
            display:none;
            position:absolute;
            content:'KARINA';
            color:#fff;
            top:50%;
            left:50%;
            font-size:30px;
            transform:translate(-50%,-50%);
          }
          &:hover:nth-of-type(2)::before{
            display:block;
          }
          &:nth-of-type(2)::before{
            display:none;
            position:absolute;
            content:'WINTER';
            color:#fff;
            top:50%;
            left:50%;
            font-size:30px;
            transform:translate(-50%,-50%);
          }
          &:hover:nth-of-type(3)::before{
            display:block;
          }
          &:nth-of-type(3)::before{
            display:none;
            position:absolute;
            content:'GISELLE';
            color:#fff;
            top:50%;
            left:50%;
            font-size:30px;
            transform:translate(-50%,-50%);
          }
          &:hover:nth-of-type(4)::before{
            display:block;
          }
          &:nth-of-type(4)::before{
            display:none;
            position:absolute;
            content:'NINGNING';
            color:#fff;
            top:50%;
            left:50%;
            font-size:30px;
            transform:translate(-50%,-50%);
          }
          img{
            width:100%;
          }
        }
      }
    }
    .photo-item{
      display:none;
      z-index:50;
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      overflow:hidden;
      }
    }
    .isActive{
      display:block !important;
    }

    
  
</style>