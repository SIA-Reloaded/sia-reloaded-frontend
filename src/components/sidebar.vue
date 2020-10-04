<template>
  <nav id="sidebar-wrapper">
      <div class="item">
          Hoja de vida
      </div>
      <div class="item">
          Apoyo académico
      </div>
      <div class="subitem">
          Cursos asignados
      </div>
    <!-- <router-link
      class="item"
      v-for="item in items"
      v-bind:key="item.id"
      v-bind:to="item.link"
    >
      {{ item.label }}
    </router-link> -->
  </nav>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      items: [
        { id: 1, label: "Hoja de Vida", link: "" },
        { id: 2, label: "Apoyo Académico", link: "" },
        { id: 3, label: "Información Financiera", link: "" },
        { id: 4, label: "Encuestas", link: "" },
        { id: 5, label: "Otros", link: "" },
      ],
    };
  },
};
</script>

<style>
#sidebar-wrapper {
  background-color: #b1b2b0;
  height: auto;
}
.item {
  display: block;
  text-align: center;
  background-color: #94b43b;
  font-family: AncizarSansItalic;
  color: white;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 1px 1px 1px #777;
}
.subitem {
  display: block;
  text-align: center;
  font-family: AncizarSansItalic;
  color: white;
}
</style>