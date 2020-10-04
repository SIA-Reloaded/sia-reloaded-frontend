import VueRouter from 'vue-router'
import LoginComponent from '../components/login'
import HomeComponent from '../components/home'
import AssignedCoursesComponent from '../components/assigned-courses'

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
        path: '/courses/assigned',
        name: 'assigned_courses',
        component: AssignedCoursesComponent,
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
