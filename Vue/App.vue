<template>
  <div id="app">

    <nav class="nav">
      <li v-for="(item, i) in menu" :key="i">{{ item }}</li>
    </nav>

    <div v-for="(item, i) in products" :key="item">
      <h3 :style="styleColor">{{ item }}</h3>
      <p>월세: {{ price[i] }}만원</p>
      <button @click="increase(i)">허위매물신고량</button> <span>{{신고횟수[i]}}회</span>
      <hr>
    </div>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      price: [10, 30, 50],
      styleColor: "color : coral",
      products: ["ㄱ원룸", "ㄴ원룸", "ㄷ원룸"],
      menu: ["home", "contact", "about"],
      신고횟수 : [10, 20, 30],
      신고 : 0
    };
  },
  methods : {
    increase(i){
      this.신고횟수[i] += 1; //함수안에서 데이터 쓸 땐 this.데이터명
      this.$forceUpdate(); //강제로 화면을 갱신
      //this.$set(this.신고횟수, i, this.신고횟수[i] += 10);
    }
  },
  components: {},
};
</script>

<style>
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
