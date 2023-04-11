<template>
  <div class="black-bg">
    <div class="white-bg">
      <h2>{{ oneroom[num].title }}</h2>
      <h4>{{ oneroom[num].content }}</h4>
      <!-- <input type="text" @input="month = $event.target.value"/> 개월 -->
      <input type="text" v-model="month"/> 개월
      <p>월세: {{ oneroom[num].price }}원</p>
      <p>값: {{ oneroom[num].price * month }} 원</p>
      <img
        :src="oneroom[num].image"
        alt="room"
        style="cursor: pointer; margin-top: 40px"
      />
    </div>
    <button @click="$emit('closeModal')" style="cursor: pointer;">닫기</button>
  </div>
</template>

<script>
export default {
  name: "ModalBox",
  data(){
    return{
      month : 0,
    }
  },
  beforeUpdate(){
    if(this.month == 2){
      this.month = 0;
      alert('2개월은 안됨');
    }
  },
  watch:{
    month(data){
      //month라는 데이터가 변하면 여기있는 코드 실행됨

      //파라미터 1개 적으면
      //파라미터에는 month값이 들어감.

      //파라미터 2개 적으면
      //첫 번째 파라미터는 변경 될 month의 데이터
      //두 번째 파라미터는 변경 전 month의 데이터

      if(isNaN(data)){
        alert('숫자만 입력하세요!');
        this.month = 0;
      }
    }
  },
  props: {
    oneroom: Object,
    num: Number
  },
};
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>