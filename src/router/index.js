import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';
import Team from '@/views/Team.vue';
import Universities from '@/views/Universities.vue';
import UIUC from '@/views/UniverisitiesList/UIUC.vue';
import Contact from '@/views/Contact.vue';
import LogIn from '@/views/LogIn.vue';
import Register from '@/views/Register.vue';

import * as firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/universities/uiuc',
    name: 'UIUC',
    component: UIUC,
    meta: { requiresAuth: true }
  },
  {
    path: '/universities',
    name: 'Universities',
    component: Universities
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
