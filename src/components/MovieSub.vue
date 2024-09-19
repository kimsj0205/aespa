<template>
  <MovieItem v-for="MovieItemList in MovieItemList" :key="MovieItemList.id" :MovieItemList="MovieItemList"/>
</template>
<script>
import MovieItem from './MovieItem.vue';


export default({
  components:{
    MovieItem
  },
  data(){
    return{
      MovieItemList: [
        {id:'1', title: 'Armageddon', ex:"타이틀 곡 ‘Armageddon’은 강렬한 신스 베이스 사운드와 올드 스쿨하면서도 트렌디한 트랙이 돋보이는 힙합 댄스곡으로, aespa 세계관 시즌2의 서사를 담아 각기 다른 세계 속 다른 ‘나’를 만나 무한한 가능성을 마주하고 ‘완전한 나’로 거듭나며 ‘나는 오직 나만이 정의할 수 있다’는 메세지를 담은 가사와 거칠고 절제된 음색이 잘 어우러진다.",videoId:'nFYwcndNuOY'},
        {id:'2', title: 'Supernova', ex:"더블 타이틀 곡 ‘Supernova’는 무게감 있는 킥과 베이스기반의 미니멀한 트랙 사운드가 인상적인 댄스곡으로, 캐치한 탑라인과 신스 멜로디가 매력적이며, 가사는 다른 차원의 문이 열리는 사건의 시작을 초신성에 빗대어 aespa 세계관 시즌 2의 본격적인 스토리텔링을 예고, 내 안의 대폭발이 시작되었음을 aespa만의 힙한 무드로 표현했다.",videoId:'phuiiNCxRMg'},
        {id:'3', title: 'Long Chat(#♥)', ex:"'Long Chat (#♥)'은 기분 좋은 멜로디와 밝은 트랙 사운드가 돋보이는 댄스곡으로, 가사에는 밤새 끊임없이 이어지는 우정 어린 대화를 담아 에스파의 통통 튀는 보컬 매력과 시너지를 느낄 수 있다.",videoId:'USr5C0QXMVw'},
        {id:'4', title: 'Licorice', ex:"‘Licorice’는 빈티지한 일렉기타 사운드와 강렬한 트랩 비트가 돋보이는 댄스곡으로, 묘한 매력을 가진 상대를 감초에 비유, 자꾸 끌리는 마음을 에스파의 개성 넘치는 보컬로 위트 있게 표현했다.",videoId:'sU0FVs9Enq8'},
        {id:'5', title: 'Live My Life', ex:"‘Live My Life’는 경쾌한 기타 기반의 팝 펑크 곡으로, 후렴에서 도드라지는 청량한 보컬과 시원한 드럼 라인의 조화가 인상적이며, 가사에는 인생에 정답은 없으니 기존의 틀을 벗어나 주체적인 삶을 살자는 당당한 외침을 담았다.",videoId:'YEA1ROHi0Eg'},
      ]
    }
  } 
})
</script>

<style lang="scss" scoped>

</style>