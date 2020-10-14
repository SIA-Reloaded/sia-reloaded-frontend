<template>
  <div>
    <navbar></navbar>
    <article>
      <router-view></router-view>
    </article>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    navbar,
  },
  data() {
    return {
      user: null
    }
  }
};
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
  width:100%;
}
#app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 90vh;
}
navbar {
  grid-row: 1/2;
}
article {
  grid-row: 2/3;
}
</style>