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
NETFLIX

<script>
export default {
  name: "App",
  data() {
    return {
      blogData: [
        {
          title: "첫 째 프로젝트 : VueFLIX 앱",
          content: "넷플릭스를 클론해서 만든 OTT 앱",
          date: "March 31, 2021",
          number: 0,
        },
        {
          title: "둘 째 프로젝트 : 요리조리 앱",
          content: "음식 레시피를 일려드립니다.",
          date: "October 20, 2020",
          number: 1,
        },
        {
          title: "셋 째 프로젝트 : 뉴진스에 하입보이요 앱",
          content:
            "자신이 듣는 노래를 다른 사람에게 추천해주며, 좋은 노래를 공유해드립니다.",
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
