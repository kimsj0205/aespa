<template>
  <div class="Footer">
    <div class="inner">
      <h2>
        <img src="../assets/smlogo.svg" alt="">
      </h2>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .Footer{
    border-top:1px solid #ececec;
    width:100%;
    height:200px;
    box-sizing: border-box;
    .inner{
      h2{
        width:200px;
        img{
          filter: brightness(100);
        }
      }
    }
  }
</style>