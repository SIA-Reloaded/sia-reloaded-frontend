<template>
  <div id="main">
    <navbar class="navbar"></navbar>
    <sidebar class="sidebar"></sidebar>
    <article>
      <router-view></router-view>
    </article>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import sidebar from "./components/sidebar.vue";

export default {
  name: "App",
  components: {
    navbar,
    sidebar,
  },
  data() {
    return {
      user: null,
    };
  },
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
  margin: 0;
}
#main {
  display: grid;
  grid-template-columns: 15vw 1fr;
  grid-template-rows: 10vh 1fr;
  grid-template-areas:
    "header header"
    "sidebar content";
}
.navbar {
  grid-area: header;
}
article {
  grid-area: content;
}
.sidebar {
  grid-area: sidebar;
}
</style>