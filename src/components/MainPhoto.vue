<template>
  <div class="Main-photo">
    <MainPhotoItem v-for="Itemlist in Itemlist" :key="Itemlist.id" :Itemlist="Itemlist"/>
    
  </div>
</template>
<script>
import MainPhotoItem from './MainPhotoItem.vue';


export default {
  components:{
    MainPhotoItem,
    
  },
  data(){
    return{
      Itemlist: [
        {id:'1', codeName: 'KARINA', Birth:' 2000.04.11', EMBLEM:'💘', href:'https://www.instagram.com/katarinabluu/'},
        {id:'2', codeName: 'WINTER', Birth:' 2001.01.01', EMBLEM:'✨', href:'https://www.instagram.com/imwinter/'},
        {id:'3', codeName: 'GISELLE', Birth:' 2000.10.30', EMBLEM:'🌙', href:'https://www.instagram.com/aerichandesu/'},
        {id:'4', codeName: 'NINGNING', Birth:' 2002.10.23', EMBLEM:'🦋', href:'https://www.instagram.com/imnotningning/'},
      ]
    }
  } 
}
</script>
<style lang="scss" scoped>
  
</style>