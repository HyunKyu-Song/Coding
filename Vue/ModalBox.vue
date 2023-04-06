<template>
  <div class="black-bg" @click="$emit('closeModal')">
    <div class="white-bg">
      <h2>{{ oneroom[num].title }}</h2>
      <h4>{{ oneroom[num].content }}</h4>
      <p>월세: {{ oneroom[num].price }}원</p>
      <img
        :src="oneroom[num].image"
        alt="room"
        style="cursor: pointer; margin-top: 40px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalBox",
  props: {
    oneroom: Object,
    num: Number
  },
};
</script>

<style>
</style>