<template>
  <div id="app">
    <!-- <div class="black-bg" v-if="modal == true" @click="modal = false">
      <div class="white-bg">
        <DiscountAd />
        <h2>{{ oneroom[num].title }}</h2>
        <h4>{{ oneroom[num].content }}</h4>
        <p>월세: {{ oneroom[num].price }}원</p>
        <img
          :src="oneroom[num].image"
          alt="room"
          style="cursor: pointer; margin-top: 40px"
        />
      </div>
    </div> -->
    <ModalBox @closeModal="modal = false" v-if="modal === true" :oneroom="oneroom" :num="num" />

    <nav class="nav">
      <li v-for="(item, i) in menu" :key="i">{{ item }}</li>
    </nav>

    <DiscountAd />
    <CardBox @openModal="modal = true; num = $event" v-for="(item) in oneroom" :key="item" :item="item"/>

    <!-- <div v-for="(item, i) in oneroom" :key="item">
      <img
        @click="
          modal = true;
          num = i;
        "
        :src="item.image"
        alt="room"
        style="cursor: pointer; margin-top: 40px"
      />
      <h4>{{ item.content }}</h4>
      <hr />
    </div> -->
  </div>
</template>

<script>
import oneroomData from "./assets/oneroom.js";
import DiscountAd from "./components/DiscountAd.vue";
import ModalBox from "./components/ModalBox.vue";
import CardBox from "./components/CardBox.vue";

export default {
  name: "App",
  data() {
    return {
      oneroom: oneroomData,
      styleColor: "color : coral",
      menu: ["home", "contact", "about"],
      modal: false,
      num: 0,
    };
  },
  methods: {},
  components: {
    DiscountAd: DiscountAd, //왼쪽에 DiscountAd는 자유작명
    ModalBox: ModalBox,
    CardBox: CardBox,
  },
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

img {
  width: 40%;
}

.discount {
  background-color: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
}

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

.nav {
  display: flex;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  background-color: darkslateblue;
}

.nav li {
  color: white;
  list-style: none;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
