<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <div class="form">
        <h1 class="title">Iniciar sesión</h1>
        <span>{{ errorMessage }}</span>
        <div class="group">
          <input
            type="text"
            id="username"
            name="username"
            required
            v-model="username"
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
            v-model="password"
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Contraseña</label>
        </div>
        <button v-on:click="signIn">Iniciar Sesión</button>
      </div>
    </div>
    <div class="image"></div>
  </div>
</template>


<script>
// import { Auth } from "aws-amplify"
// import router from '../router'
export default {
  name: "LoginComponent",
  methods: {
    signIn: async function () {
      try {
        // await Auth.signIn(this.username, this.password)
        setTimeout(async ()=> {
          const res = await fetch(`https://62nbonex6j.execute-api.us-east-1.amazonaws.com/Prod/system/getUserData/${ this.username }`);
          const data = await res.json();
          console.log(data)
          this.$emit("userReached", {user: data})
          this.$router.push('home')
        }, 1000)
      } catch (error) {
        this.errorMessage = error.name
      }
    },
  },
  data: function () {
    return {
      username: "",
      password: "",
      errorMessage: "",
    }
  },
}
</script>

<style scoped>

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
  grid-template: 1fr 1fr / 1fr 40vw 1fr;
}
.form {
  position: relative;
  top: 80px;
  width: 90%;
  height: 100%;
  display:inline-block;
  grid-column: 2/3;
  grid-row: 1fr;
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px solid #707070;
  border-radius: 2em;
  text-align: center;
}
.image {
  grid-column: 2/3;
  grid-row: 1fr;
  background: url("../assets/img/background-login.jpeg") no-repeat;
  background-size: cover;
}
.title {
  margin:40px 6px 2px 0;
  font-family: AncizarSansLight;
  color: #707070;
  font-size: 310%;
  letter-spacing: 4px;
}
.group {
  position: relative;
  margin-bottom: 5%;
  background-color: rgba(255, 255, 255, 0);
}
input {
  margin:80px 6px 2px 0;
  font-size: 18px;
  padding: 10px 60px 10px 5px;
  display: inline-block;
  width: 62%;
  border: none;
  border-bottom: 2px solid #707070;
  background-color: rgba(255, 255, 255, 0);
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  padding-left: 12%;
  color: #707070;
  font-size: 180%;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 60px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  font-family: AncizarSansLight;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: 50px;
  font-size: 18px;
  color: #707070;
}

/* BOTTOM BARS ================================= */
.bar {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  left: -65px;
  display:block;
  width: 50%;
}
.bar:before,
.bar:after {
  content: "";
  height: 3px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #707070;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 60%;
}
.bar:after {
  right: 25%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 80%;
}

.boton{

  margin:40px 6px 60px 0;
  color:#ffffff;
  font-weight: 500;
  display:inline-block;
  font-family: AncizarSansLight;
  letter-spacing: 10px;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 12%;
  padding-right: 12%;
  text-align: center;
  font-size: 200%;
  background-color: #94B43B;
  border-radius: 10px;
  border: 1px solid #777;
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