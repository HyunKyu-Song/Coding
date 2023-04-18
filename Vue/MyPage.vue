/* eslint-disable */
<template>
   <div style="padding: 10px">
      <h4>팔로워</h4>
      <!-- <button @click="a">btn</button> -->
      <input @input="search" v-model="name" placeholder="닉네임 입력" />
      <div v-for="(item, i) in follower" :key="i" class="post-header mt-4">
         <div class="profile" :style="`background-image:url(${item.image})`"></div>
         <span class="profile-name">{{ item.name }}</span>
      </div>
   </div>
</template>


<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
   name: "MyPage",
   setup() {
      //컴포넌트를 시작하기 전에 이것부터 실행
      let follower = ref([]);

      onMounted(() => {
         axios.get("/follower.json")
            .then((result) => {
               //console.log(result.data);
               follower.value = result.data;

            })
            .catch(() => {
               console.log("fail!!!");
            });
      });

      function search(){

      }

      return { follower, search};
   },
};
</script>

<style>
</style>