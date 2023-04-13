<template>
  <div
    @click="$router.push(`/detail/${i}`)"
    class="my-4"
    v-for="(item, i) in blogData"
    :key="i"
  >
    <hr />
    <h5>{{ item.title }}</h5>
    <p>{{ item.content }}</p>
    <p>{{ item.date }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    blogData: Array,
  },
};
</script>

<style>
h5, p {
  cursor: pointer;
}
</style>