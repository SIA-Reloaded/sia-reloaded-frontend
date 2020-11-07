import VueRouter from "vue-router";
import LoginComponent from "../views/login";
import HomeComponent from "../views/home";
import AssignedCoursesComponent from "../views/assigned-courses";
import CourseComponent from "../views/course";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent,
  },
  {
    path: "/home",
    name: "home",
    component: HomeComponent,
  },
  {
    path: "/teacher/courses",
    name: "assigned_courses",
    component: AssignedCoursesComponent,
  },
  {
    path: "/courses/:course_id",
    name: "course",
    component: CourseComponent,
    props: true,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
