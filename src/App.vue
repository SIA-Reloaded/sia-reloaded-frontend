<template>
  <div id="main">
    <navbar class="navbar" :user="user" :key="JSON.stringify(user)"></navbar>
    <article>
      <router-view v-on:userReached="setUser" v-bind:user="user"></router-view>
    </article>
  </div>
</template>

<script>
import "./styles/styles.scss";
import navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    navbar,
  },
  methods: {
    setUser(user) {
      this.user = user;
    },
  },
  data() {
    return {
      user: {},
    };
  },
};
</script>

<style lang="scss">
@import "./styles/fonts.css";

body {
  margin: 0;
  width: 100%;
}
#main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 90vh;
  grid-template-areas:
    "header"
    "content";
}
.navbar {
  grid-area: header;
}
article {
  grid-area: content;
}
</style>
