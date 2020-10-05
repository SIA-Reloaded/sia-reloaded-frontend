<template>
  <div id="main">
    <navbar class="navbar"></navbar>
    <article>
      <router-view v-on:userReached="setUser" v-bind:user="user"></router-view>
    </article>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue"

export default {
  name: "App",
  components: {
    navbar,
  },
  methods: {
    setUser(user) {
      this.user = user
    }
  },
  data() {
    return {
      user: null,
    };
  },
}
</script>

<style>
@font-face {
  font-family: AncizarSansRegular;
  src: url("./assets/ancizar-font/AncizarSans-Regular.otf");
}
@font-face {
  font-family: AncizarSansLight;
  src: url("./assets/ancizar-font/AncizarSans-Light.otf");
}
@font-face {
  font-family: AncizarSansItalic;
  src: url("./assets/ancizar-font/AncizarSans-Italic.otf");
}
body {
  margin: 0;
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