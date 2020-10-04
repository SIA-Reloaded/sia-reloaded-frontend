import VueRouter from 'vue-router'
import LoginComponent from '../components/login'
import HomeComponent from '../components/home'
import CourseComponent from '../components/course';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginComponent,
    },
    {
        path: '/home',
        name: 'home',
        component: HomeComponent,
    },
    {
        path: '/courses/:course_id',
        name: 'course',
        component: CourseComponent,
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
