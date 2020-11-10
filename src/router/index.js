import VueRouter from "vue-router";
import LoginComponent from "../views/login";
import SignedIn from "../views/signedIn";
import HomeComponent from "../views/home";
import AssignedCoursesComponent from "../views/assigned-courses";
import CourseComponent from "../views/course";
import GroupsComponent from "../views/groups";
import GroupComponent from "../views/group";

const routes = [
  {
    path: "/",
    component: SignedIn,
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "home",
        name: "home",
        component: HomeComponent,
      },
      {
        path: "teacher/courses",
        name: "assigned_courses",
        component: AssignedCoursesComponent,
      },
      {
        path: "courses/:course_id",
        name: "course",
        component: CourseComponent,
        props: true,
      },
      {
        path: "admin/groups",
        name: "groups",
        component: GroupsComponent,
      },
      {
        path: "admin/groups/:group_id",
        name: "group",
        component: GroupComponent,
        props: true,
      },
    ],
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("user")) {
        next({
          name: "login",
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("user")) {
        next({
          name: "home",
        });
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
