<template>
    <header>
        <div class="logo">
            <img class="logo-img" src="../assets/img/logo.png" alt="Logo Universidad Nacional de Colombia">
        </div>
        <div class="header-title">
            <span>Sistema Unificado de Información Académica</span>
        </div>
        <div class="header__menu">
            <div class="header__menu--profile">
                <p>Usuario</p>
            </div>
            <ul>
                <div v-if="user.user.roles">
                    <li v-for="role in user.user.roles" :key="role"><a href="/">{{ role }}</a></li>
                </div>
                <li><a href="/login">Cerrar sesión</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
  name: "navbar",
  props: ['user'],
  mounted() {
      console.log(this.user);
  }
};
</script>



<style>

    header {
        color: white;
        background-color: #94B43B;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #707070;
    }
    .header-title {
        font-family: AncizarSansItalic;
        align-self: center;
        text-align: center;
        font-display: auto ;
        font-size: 150%;
    }
   .logo {
        max-width: 6rem;
        padding-left: 10px;
        padding-right: 10px;
        z-index: 10;
        background-color: white;
    }
    .logo-img {
        max-height: 100%;
        max-width: auto;
    }
    .cajoncito{
        position: absolute;
        max-height:13%;
        max-width:13%;
        padding-left: 10px;
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
        background-color: #76232f;
        padding: 5px;
        font-family: AncizarSansItalic;
        max-height: 100%;
        display: flex;
        align-items: center;
    }
    .header__menu ul {
    display: none;
    list-style: none;
    padding: 0px;
    position: absolute;
    width: 100px;
    text-align: right;
    margin: 12vh 0 0 -41px;
    background-color: #76232f;
    }
    .header__menu li {
    margin: 10px 0;
    }
    .header__menu li a {
    color: white;
    text-decoration: none;
    }
    .header__menu li a:hover {
    text-decoration: underline;
    }

    .header__menu:hover ul,
    ul:hover {
    display: block;
    }

    .header__menu--profile {
    margin-right: 8px;
    display: flex;
    align-items: center;
    }
    .header__menu--profile img {
    margin-right: 8px;
    width: 40px;
    }
    .header__menu--profile p {
    margin: 0;
    color: white;
    }


</style>