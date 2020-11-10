<template>
  <div id="main">
    <navbar id="navbar" @new-role="newRole"></navbar>
    <article>
      <div id="home">
        <sidebar class="sidebar" :key="role"></sidebar>
        <div class="wrapper">
          <router-view />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import sidebar from "../components/sidebar";
import navbar from "../components/navbar";
export default {
  name: "SignedIn",
  components: {
    sidebar,
    navbar,
  },
  methods: {
    newRole(role) {
      this.role = role;
    },
  },
  data() {
    return {
      role: "",
    };
  },
};
</script>

<style>
#main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 90vh;
  grid-template-areas:
    "header"
    "content";
}
#navbar {
  grid-area: header;
}
article {
  grid-area: content;
}
#home {
  display: grid;
  grid-template-columns: 25vw 75vw;
  grid-template-rows: 1fr;
  grid-template-areas: "sidebar content";
  height: 100%;
}
.sidebar {
  grid-area: sidebar;
}
.wrapper {
  grid-area: content;
}
</style>
