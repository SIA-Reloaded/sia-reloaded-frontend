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
            <h4 class="course-name">{{ course.name }}</h4>
            <span class="course-group">Grupo {{ course.group }}</span>
            <span class="course-group"
              >Número de estudiantes: {{ course.capacity }}</span
            >
            <span class="course-link"
              ><router-link
                v-bind:to="{
                  name: 'course',
                  params: { course_id: course.id, course_prop: course },
                }"
                class="course-link-a"
                >Ir al curso</router-link
              ></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { API, Auth } from "aws-amplify";
import sidebar from "../components/sidebar";
export default {
  name: "AssignedCoursesComponent",
  props: ["user"],
  methods: {
    async getCourses() {
      try {
        this.loading_courses = true;
        const res = await fetch(
          "https://62nbonex6j.execute-api.us-east-1.amazonaws.com/Prod/teachers/getCourses?teacherID=test"
        );
        const data = await res.json();
        this.courses = data;
        this.loading_courses = false;
      } catch (error) {
        console.error(error);
      }
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
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}
.list > .course-item {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  font-family: AncizarSansLight;
}
.courses-title {
  color: black;
  font-family: AncizarSansLight;
}

.course-code {
  display: flex;
  align-items: center;
  grid-area: code;
  color: white;
  background-color: #94b43b;
  font-family: AncizarSansLight;
}

.course-name {
  margin: 0;
  margin-bottom: 1em;
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
