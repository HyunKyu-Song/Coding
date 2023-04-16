<template>
  <div class="header">
    <ul class="header-button-left" v-if="tabNum == 1 || tabNum == 2">
      <li @click="prev">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="tabNum == 1" @click="next">Next</li>
      <li v-if="tabNum == 2" @click="postUpload">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container @send="newData = $event" :selFilter="selFilter" :postData="postData" :tabNum="tabNum" :imgURL="imgURL" />
  <!-- <div class="text-center mt-3">
    <button @click="tabNum=0" class="btn btn-outline-primary" >메인</button>
    <button @click="tabNum=1" class="btn btn-outline-primary mx-3">필터</button>
    <button @click="tabNum=2" class="btn btn-outline-primary">글작성</button>
  </div> -->
  <div class="text-center mt-4" v-if="tabNum == 0">
    <button @click="more" class="btn btn-outline-dark">more</button>
  </div>

  <div class="footer" v-if="tabNum == 0 || tabNum == 1">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import postData from "./assets/postData.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      postData: postData,
      cnt: 0,
      tabNum: 0,
      imgURL: '',
      newData:{},
      selFilter:'',
    };
  },
  mounted(){
    this.emitter.on('selectFilter', (data)=>{
      //console.log(data);
      this.selFilter = data;
    })
  }
  ,
  components: {
    Container,
  },
  methods: {
    postUpload(){
      this.postData.unshift(this.newData);
      this.tabNum = 0;
    },
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.cnt}.json`)
        .then((result) => {
          console.log(result.data);
          this.postData.push(result.data);
          this.cnt += 1;
        });
    },
    upload(e){
      let img = e.target.files;
      let url = URL.createObjectURL(img[0]);
      this.tabNum = 1;
      this.imgURL = url;
      this.selFilter = '';
    },
    next(){
      if(this.tabNum < 2){
        this.tabNum++;
      }
    },
    prev(){
      if(this.tabNum > 0){
        this.tabNum--;
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

.hide {
  display: none;
}

.show {
  display: block;
}
</style>
