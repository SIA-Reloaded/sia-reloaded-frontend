import VueRouter from 'vue-router'
import LoginComponent from '../components/login'
import HomeComponent from '../components/home'

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
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
