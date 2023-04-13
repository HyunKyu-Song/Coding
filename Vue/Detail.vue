<template>
<div>
   <h4>Detail Page</h4>
   <h5>{{blogData[$route.params.id].title}}</h5>
   <p>{{blogData[$route.params.id].content}}</p>
</div>
</template>

<script>
export default {
   props:{
      blogData : Array,
   }
};
</script>

<style>
</style>