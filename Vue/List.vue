<template>
   <div class="mt-4" v-for="(item, i) in blogData" :key="i">
      <h5>{{item.title}}</h5>
      <p>{{item.content}}</p>
      <p>{{item.date}}</p>
      <hr>
   </div>
   
</template>

<script>
export default {
   name: "List",
   props:{
      blogData:Array
   }
};
</script>

<style>
</style>