<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <div class="form">
        <h1 class="title">Iniciar sesión</h1>
        <div class="group">
          <input
            type="text"
            id="username"
            name="username"
            required
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Usuario</label>
        </div>
        <div class="group">
          <input
            type="password"
            id="password"
            name="password"
            required
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Contraseña</label>
        </div>
      </div>
    </div>
    <div class="image"></div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
};
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  height: 100%;
}
.form-wrapper {
  grid-column: 1/2;
  background-color: #b1b2b0;
  display: grid;
  grid-template: 1fr 70vh 1fr / 1fr 40vw 1fr;
}
.form {
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px solid #707070;
  border-radius: 1em;
  text-align: center;
}
.image {
  grid-column: 2/3;
  background: url("../assets/img/background-login.jpeg") no-repeat;
  background-size: cover;
}
.title {
  font-family: AncizarSansLight;
  color: #707070;
  font-size: 2em;
}
.group {
  position: relative;
  margin-bottom: 45px;
  background-color: rgba(255, 255, 255, 0);
}
input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #707070;
  background-color: rgba(255, 255, 255, 0);
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: #707070;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  font-family: AncizarSansLight;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #707070;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 300px;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #707070;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }
  to {
    width: 0;
    background: transparent;
  }
}
</style>