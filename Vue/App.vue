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

    <transition name="fade">
      <ModalBox
        @closeModal="modal = false"
        v-if="modal === true"
        :oneroom="oneroom"
        :num="num"
      />
    </transition>

    <!-- <div class="hide" :class="{ show: modal }">
      <ModalBox
        @closeModal="modal = false"
        v-if="modal === true"
        :oneroom="oneroom"
        :num="num"
      />
    </div> -->

    <nav class="nav">
      <li v-for="(item, i) in menu" :key="i">{{ item }}</li>
    </nav>

    <DiscountAd v-if="discount == true" :disPer="disPer" />

    <button @click="goodsSort">상품정렬</button>
    <button @click="originSort">정렬 초기화</button>

    <CardBox
      @openModal="
        modal = true;
        num = $event;
      "
      v-for="item in oneroom"
      :key="item"
      :item="item"
    />

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
      originOneroom: [...oneroomData],
      oneroom: oneroomData,
      styleColor: "color : coral",
      menu: ["home", "contact", "about"],
      modal: false,
      num: 0,
      discount: true,
      disPer: 20,
    };
  },
  methods: {
    goodsSort() {
      this.oneroom.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    originSort() {
      this.oneroom = [...this.originOneroom];
    },
  },
  // mounted() {
  //   setInterval(() => {
  //     if (this.disPer > 0) {
  //       this.disPer -= 1;
  //     }
  //   }, 1000);
  // },
  // mounted(){
  //   setTimeout(() => {
  //     this.discount = false;
  //   }, 3000);
  // },

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

/* .hide {
  opacity: 0;
  transition: all 1s;
}

.show {
  opacity: 1;
} */

.fade-enter {
  opacity: 0;
  transform: translateX(-1000px);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
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
