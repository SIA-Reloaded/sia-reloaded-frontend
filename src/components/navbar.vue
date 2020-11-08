<template>
  <header>
    <div class="logo">
      <img
        class="logo-img"
        src="../assets/img/logo.png"
        alt="Logo Universidad Nacional de Colombia"
      />
      <div class="logo-text">
        <div class="ancizar-font text-primary-dark logo-title">
          <span class="text-light">SISTEMA </span>
          <span class="text-bold">UNIFICADO </span>
          <span class="text-light">DE INFORMACIÓN </span>
          <span class="text-bold">ACADÉMICA</span>
        </div>
        <span class="ancizar-font text-italic text-grey3 logo-subtitle"
          >Universidad Nacional de Colombia</span
        >
      </div>
    </div>
    <div class="header__menu" v-if="user.user">
      <img
        class="profile-img"
        src="../assets/img/avatar.png"
        alt="Imagen de perfil"
      />
      <span class="ancizar-font text-light text-grey1">{{
        user.user.basicData.firstName
      }}</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "navbar",
  props: ["user"],
};
</script>



<style lang="scss" scoped>
header {
  background-color: $white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #707070;
}
.logo {
  max-width: 6rem;
  margin-left: 10px;
  padding: 7px;
  z-index: 10;
  background-color: white;
  display: flex;
  flex-direction: row;
}
.logo-img {
  max-height: 100%;
  max-width: auto;
  margin-right: 10px;
}
.profile-img {
  @extend .logo-img;
  margin-left: 10px;
}
.logo-text {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  justify-content: center;
}
.logo-title {
  font-size: 15px;
}
.logo-subtitle {
  font-size: 12px;
}
.cajoncito {
  position: absolute;
  max-height: 13%;
  max-width: 13%;
  padding-right: 5px;
}
.menu {
  color: white;
  background-color: #76232f;
  padding: 5px;
  font-family: AncizarSansItalic;
  max-height: 100%;
}

.header__menu {
  color: white;
  padding: 15px;
  font-family: AncizarSansItalic;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  cursor: pointer;
}
</style>
