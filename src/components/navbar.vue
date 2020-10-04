<template>
  <header>
    <div class="logo">
      <img
        class="logo-img"
        src="../assets/img/logo.png"
        alt="Logo Universidad Nacional de Colombia"
      />
    </div>
    <div class="header-title">
      <span>Sistema Unificado de Información Académica</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
header {
  color: white;
  background-color: #94b43b;
  display: grid;
  grid-template-columns: 2vw repeat(8, 1fr) 2vw;
  grid-template-rows: 10vh;
  grid-template-areas: ". logo title title title title title title title .";
}
.header-title {
  grid-area: title;
  font-family: AncizarSansItalic;
  text-align: center;
  font-size: 2em;
}
.logo {
  grid-area: logo;
  background-color: white;
  box-shadow: 0px 1px 1px 1px #777;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
  text-align: center;
  z-index: 10;
}
.logo-img {
    height: 10vh;
  object-fit: fill;
}
</style>