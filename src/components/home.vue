<template>
  <div id="home">
    <sidebar class="sidebar"></sidebar>
    <div class="wrapper">
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script>
// import { API, Auth } from "aws-amplify";
import sidebar from './sidebar'
export default {
  name: "HomeComponent",
  methods: {},
  mounted() {},
  props: ['user'],
  components: {
    sidebar
  },
  data: function () {
    return {
      message: "",
    };
  },
};
</script>

<style>
#home {
  display: grid;
  grid-template-columns: 15vw 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "sidebar content";
  height: 100%;
}
.sidebar {
  grid-area: sidebar;
}
.wrapper {
  grid-area: content;
  background: url("../assets/img/background-login.jpeg") no-repeat;
  /* Todo: Nueva imagen */
  background-size: cover;
}
</style>
