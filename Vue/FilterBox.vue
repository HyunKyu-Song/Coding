<template>
   <div :class="`${filterName} filter-item`" :style="`background-image:url(${imgURL})`">
      <button @click="shoot" class="btn btn-outline-dark">
         <slot></slot>
      </button>
   </div>
</template>

<script>
export default {
   name : 'FilterBox',
   methods:{
      shoot(){
         this.emitter.emit('selectFilter', this.filterName); //다른 컴포넌트로 이벤트 보내는 문법
      }
   },
   props : {
      imgURL:String,
      filterName : String,
   }
};
</script>

<style>
.filter-item {
   width: 100px;
   height: 100px;
   margin: 10px 10px 10px auto;
   padding: 8px;
   display: inline-block;
   color: white;
   background-size: cover;
   background-position: center;
}
</style>