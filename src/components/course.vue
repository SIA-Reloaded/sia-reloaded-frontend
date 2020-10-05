<template>
  <div id="home">
    <sidebar class="sidebar"></sidebar>
    <div class="course-wrapper">
      <h2 class="course-title">
        {{ loading_course ? "Cargando" : course.name }}
      </h2>
      <div class="course">
        <div class="loading-icon-wrapper" v-if="loading_course">
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
        <div class="course-info" v-else>
          <div class="course-info-columns">
            <div class="course-info-1">
              <p><b>Código:</b> {{ course.code }}</p>
              <p><b>Grupo:</b> {{ course.group }}</p>
              <p><b>Créditos:</b> {{ course.credits }}</p>
            </div>
            <div class="course-info-2">
              <p>
                <b>Monitor:</b> {{ course.monitor.name }}
                {{ course.monitor.lastname }} ({{ course.monitor.email }})
              </p>
            </div>
          </div>
          <div class="student-list">
            <h3 class="course-title">Estudiantes</h3>
            <div
              v-for="student in course.students"
              v-bind:key="student.id"
              class="student"
            >
              <div class="student-id">{{ student.id }}</div>
              <div class="student-name">{{ student.name }} {{ student.lastname }}</div>
              <div class="student-email">{{ student.email }}</div>
            </div>
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
  name: "CourseComponent",
  methods: {
    async getCourse() {
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      await delay(3000);
      this.course = {
        id: this.$route.params.course_id,
        code: "100000-0",
        group: "2",
        name: "Ingeniería de software 2",
        credits: 3,
        monitor: {
          id: "123",
          name: "Menganito",
          lastname: "Perez",
          email: "mperez@unal.test.co",
        },
        students: [
          {
            id: "123",
            name: "Menganito",
            lastname: "Perez",
            email: "mperez@unal.test.co",
          },
          {
            id: "123",
            name: "Menganito",
            lastname: "Perez",
            email: "mperez@unal.test.co",
          },
          {
            id: "123",
            name: "Menganito",
            lastname: "Perez",
            email: "mperez@unal.test.co",
          },
          {
            id: "123",
            name: "Menganito",
            lastname: "Perez",
            email: "mperez@unal.test.co",
          },
          {
            id: "123",
            name: "Menganito",
            lastname: "Perez",
            email: "mperez@unal.test.co",
          },
          {
            id: "123",
            name: "Menganito",
            lastname: "Perez",
            email: "mperez@unal.test.co",
          },
          {
            id: "123",
            name: "Menganito",
            lastname: "Perez",
            email: "mperez@unal.test.co",
          },
          {
            id: "123",
            name: "Menganito",
            lastname: "Perez",
            email: "mperez@unal.test.co",
          },
          {
            id: "123",
            name: "Menganito",
            lastname: "Perez",
            email: "mperez@unal.test.co",
          },
          {
            id: "123",
            name: "Menganito",
            lastname: "Perez",
            email: "mperez@unal.test.co",
          },
        ],
      };
      this.loading_course = false;
    },
  },
  mounted() {
    this.getCourse();
  },
  components: {
    sidebar,
  },
  data: function () {
    return {
      course: {},
      loading_course: true,
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
.course-wrapper {
  grid-area: content;
  padding: 1em;
}

.course-info {
  color: black;
  font-family: AncizarSansLight;
}

.course-info-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "info-column-1 info-column-2";
}

.course-info-1 {
  grid-area: info-column-1;
}

.course-info-2 {
  grid-area: info-column-2;
}

.course-title {
  color: black;
  font-family: AncizarSansRegular;
}

.student-list {
  grid-area: students;
}

.student {
  width: 100%;
  box-shadow: 0px 1px 1px 1px #777;
  margin: 0.5em;
  font-family: AncizarSansLight;
  display: inline-grid;
  grid-template-columns: 1fr 7fr 6fr;
  grid-template-rows: 1.5em;
  grid-template-areas: "id name email";
}

.student-id {
  display: flex;
  align-items: center;
  grid-area: id;
  color: white;
  background-color: #94b43b;
}

.student-name {
  padding-left: 1em;
  display: flex;
  align-items: center;
  grid-area: name;
  color: black;
}

.student-email {
  padding-left: 1em;
  display: flex;
  align-items: center;
  grid-area: email;
  color: black;
}
/*
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
} */

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
