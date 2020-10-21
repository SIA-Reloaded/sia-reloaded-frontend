<template>
    <header>
        <div class="cajoncito" style="width:100%;height:100%;">
            <svg width='40%' height='40%' viewBox="0 0 120 120" preserveAspectRatio="none" style='background-color:  transparent'>
                <polygon points="0,0 40,0 40,38 0,35" style="fill:white" />
            </svg>
        </div>
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
  name: "navbar",
};
</script>



<style>

    header {
        color: white;
        background-color: #94B43B;
        display: grid;
        grid-template-columns: 2vw repeat(7, 1fr) 2vw;
        grid-template-rows: 1fr;
        border-bottom: 1px solid #707070;
    }
    .header-title {
        grid-column: 3/-2;
        grid-row: 1;
        font-family: AncizarSansItalic;
        padding-top: 25px;
        text-align: center;
        font-size: 250%;
        font-display: auto ;
    }
   .logo {
        grid-column: 2/3;
        grid-template-columns: 2vw repeat(7, 1fr) 2vw;
        grid-template-rows: 1fr;
        position: absolute;
        height:20%;
        width:13%;
        padding-left: 10px;
        padding-right: 10px;
        z-index: 10;
    }
    .logo-img {
        width: 100%;
        height: 60%;
    }
    .cajoncito{
        grid-template-columns: 2vw repeat(7, 1fr) 2vw;
        position: absolute;
        height:13%;
        width:13%;
        padding-left: 10px;
        padding-right: 5px; 
    }
   
</style>