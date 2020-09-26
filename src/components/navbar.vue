<template>
    <header>
        <div class="logo">
            <img class="logo-img" src="../assets/img/logo.png" alt="Logo Universidad Nacional de Colombia">
        </div>
        <div class="header-title">
            <span>Sistema Unificado de Información Académica</span>
        </div>
    </header>
</template>

<script>
export default {
  name: 'navbar',
}
</script>

<style>
    header {
        color: white;
        background-color: #94B43B;
        display: grid;
        grid-template-columns: 2vw repeat(7, 1fr) 2vw;
        grid-template-rows: 1fr;
    }
    .header-title {
        grid-column: 3/-2;
        font-family: AncizarSansItalic;
        text-align: center;
        font-size: 2em;
    }
    .logo {
        grid-column: 2/3;
        background-color: white;
        box-shadow: 0px 1px 1px 1px #777;
        padding-left: 10px;
        padding-right: 10px;
        z-index: 10;
    }
    .logo-img {
        width: 100%;
    }

</style>