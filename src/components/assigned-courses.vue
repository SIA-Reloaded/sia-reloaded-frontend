<template>
  <div id="home">
    <sidebar class="sidebar"></sidebar>
    <div class="courses-wrapper">
      <h2 class="courses-title">Cursos asignados</h2>
      <div class="courses">
        <div class="loading-icon-wrapper" v-if="loading_courses">
          <div class="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="list" v-else>
          <div
            v-for="course in courses"
            v-bind:key="course.id"
            class="course-item"
          >
            <div class="course-code">{{ course.code }}</div>
            <div class="course-name">{{ course.name }}</div>
            <div class="course-group">Grupo {{ course.group }}</div>
            <div class="course-link"><router-link v-bind:to="'/courses/' + course.id" class="course-link-a">Ir al curso</router-link></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { API, Auth } from "aws-amplify";
import sidebar from "./sidebar";
export default {
  name: "AssignedCoursesComponent",
  methods: {
    async getCourses() {
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      await delay(3000);
      this.courses = [
        {
          id: "123",
          code: "100000-0",
          group: "2",
          name: "Ingeniería de software 2",
        },
        {
          id: "123",
          code: "100000-0",
          group: "2",
          name: "Ingeniería de software 2",
        },
        {
          id: "123",
          code: "100000-0",
          group: "2",
          name: "Ingeniería de software 2",
        },
        {
          id: "123",
          code: "100000-0",
          group: "2",
          name: "Ingeniería de software 2",
        },
        {
          id: "123",
          code: "100000-0",
          group: "2",
          name: "Ingeniería de software 2",
        },
      ];
      this.loading_courses = false;
    },
  },
  mounted() {
    this.getCourses();
  },
  components: {
    sidebar,
  },
  data: function () {
    return {
      courses: [],
      loading_courses: true,
    };
  },
};
</script>

<style>
#home {
  display: grid;
  grid-template-columns: 15vw 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "sidebar content";
  height: 100%;
}
.sidebar {
  grid-area: sidebar;
}
.courses-wrapper {
  grid-area: content;
  padding: 1em;
}
.courses-title {
  color: black;
  font-family: AncizarSansLight;
}
.course-item {
  width: auto;
  box-shadow: 0px 1px 1px 1px #777;
  margin: 0.5em;
  font-family: AncizarSansLight;
  display: inline-grid;
  grid-template-columns: 1fr 7fr minmax(300px, 1fr) 1fr;
  grid-template-rows: 1.5em;
  grid-template-areas: "code name group link";
}

.course-code {
  display: flex;
  align-items: center;
  grid-area: code;
  color: white;
  background-color: #94b43b;
}

.course-name {
  padding-left: 1em;
  display: flex;
  align-items: center;
  grid-area: name;
  color: black;
}

.course-link-a {
    color: white;
    text-decoration: none; 
}

.course-group {
  display: flex;
  align-items: center;
  grid-area: group;
  color: black;
}

.course-link {
  display: flex;
  align-items: center;
  grid-area: link;
  color: white;
  background-color: #76232f;
}

.loading-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Spinner */
.lds-grid {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-grid div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #000;
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  top: 8px;
  left: 8px;
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  top: 8px;
  left: 32px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  top: 8px;
  left: 56px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  top: 32px;
  left: 8px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  top: 32px;
  left: 32px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  top: 32px;
  left: 56px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  top: 56px;
  left: 8px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  top: 56px;
  left: 32px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  top: 56px;
  left: 56px;
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
