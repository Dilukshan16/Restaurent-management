import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/',
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
