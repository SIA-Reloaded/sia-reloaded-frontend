import VueRouter from 'vue-router';
import LoginComponent from '../components/login';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginComponent,
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;
