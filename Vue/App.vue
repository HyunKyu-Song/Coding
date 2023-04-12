<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/">
        <a class="navbar-brand">Home</a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/list">
              <a class="nav-link">list</a>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view :blogData="blogData"></router-view>
</template>


<script>
export default {
  name: "App",
  data() {
    return {
      blogData: [
        {
          title: "첫 째 프로젝트 : 허위매물 전문 부동산 앱",
          content: "Vue를 이용하면 비누같이 매끈한 앱을 만들 수 있습니다",
          date: "September 24, 2021",
          number: 0,
        },
        {
          title: "둘 째 프로젝트 : 오마카세 배달 앱",
          content: "음식이 아니라 셰프를 직접 배달해드립니다",
          date: "October 20, 2020",
          number: 1,
        },
        {
          title: "셋 째 프로젝트 : 현피 앱",
          content:
            "거리를 설정하면 가장 가까운 파이터를 소개해드려요! 서로 싸워보세요",
          date: "April 24, 2019",
          number: 2,
        },
      ],
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a{
  text-decoration: none;
}
</style>
