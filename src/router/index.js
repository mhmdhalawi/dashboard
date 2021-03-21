import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';

function getToken(to, from, next) {
  const token = localStorage.getItem('token');
  if (!token) {
    next({ name: 'Login' });
  } else next();
}

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    beforeEnter: getToken,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: getToken,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
