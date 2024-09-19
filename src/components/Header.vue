<template>
  <div class="header">
    <div class="inner">
      <h1><RouterLink to="/"><img src="../assets/aespalogo.png" alt=""></Routerlink></h1>
      <ul class="menu">
        <li><RouterLink to="/photo" active-class="active">PHOTO</RouterLink></li>
        <li><RouterLink to="/movie" active-class="active">MOVIE</RouterLink></li>
        <li><RouterLink to="/schedule" active-class="active">SCHEDULE</RouterLink></li>
        <li @click="click()">GOODS</li>
        <li @click="click()">NEWS</li>
      </ul>
    </div>
  </div>

</template>
<script>
export default {
  methods:{
    click(){
      alert('준비중입니다');
    }
  }
}
</script>
<style lang="scss" scoped>
  .header{
    width:100%;
    height:130px;
    border-bottom:1px solid #d8d8d8;
    box-sizing:border-box;
    .inner{
      height:100%;
      h1{
      width:150px;
      line-height:180px;
      img{
        width:150px;
      }
    }
    ul{
      width: calc(100% - 300px);
      position:absolute;
      display:flex;
      bottom:30%;
      right:0;justify-content: space-evenly;
      li{
        color:#fff;
        font-size:20px;
      }
      &:hover{
        cursor:pointer;
      }
    }
    }
    
  }
</style>