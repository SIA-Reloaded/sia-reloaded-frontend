import { createWebHistory, createRouter } from 'vue-router';
import LoginComponent from '../components/login';

const routes = [
    {
        path: '/',
        redirect: () => {
            let is_logged = false;
            return (is_logged) ? '/home' : '/login';
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
