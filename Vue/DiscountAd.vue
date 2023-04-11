<template>
  <div class="discount">
    <h4>지금 결제하면 {{disPer}}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: "DiscountAd",
  props:{
    disPer : Number
  }
};
</script>

<style>
</style>