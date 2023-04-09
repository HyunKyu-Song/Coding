<template>
  <div class="black-bg">
    <div class="white-bg">
      <h2>{{ oneroom[num].title }}</h2>
      <h4>{{ oneroom[num].content }}</h4>
      <!-- <input class="goods" type="text" @input="month = $event.target.value"/> 개월 -->
      <input class="goods" type="text" v-model="month"/> 개월
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
  props: {
    oneroom: Object,
    num: Number
  },
};
</script>

<style>
</style>