<template>
  <div>
    <img
      @click="$emit('openModal', item.id)"
      :src="item.image"
      alt="room"
      style="cursor: pointer; margin-top: 40px"
    />
    <h4>{{ item.content }}</h4>
    <h4>{{ item.price }}</h4>
    <hr />
  </div>
</template>

<script>
export default {
  name: "CardBox",
  props: {
    item: Object
  },
};
</script>

<style>
</style>