import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';
import Team from '@/views/Team.vue';
import Universities from '@/views/Universities.vue';
import Contact from '@/views/Contact.vue';
import LogIn from '@/views/LogIn.vue';
import Register from '@/views/Register.vue';
import PrivacyPolicy from '@/views/PrivacyPolicy.vue';
import Test from '@/views/Test.vue';

import Babson from '@/views/UniverisitiesList/Babson.vue';
import Columbia from '@/views/UniverisitiesList/Columbia.vue';
import Northwestern from '@/views/UniverisitiesList/Northwestern.vue';
import UIUC from '@/views/UniverisitiesList/UIUC.vue';
// INSERT OTHER UNIVERSITIES HERE

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
    path: '/test',
    name: 'Test',
    component: Test
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
    path: '/universities/babson',
    name: 'Babson',
    component: Babson,
    meta: { requiresAuth: true }
  },
  {
    path: '/universities/columbia',
    name: 'Columbia',
    component: Columbia,
    meta: { requiresAuth: true }
  },
  {
    path: '/universities/northwestern',
    name: 'Northwestern',
    component: Northwestern,
    meta: { requiresAuth: true }
  },
  {
    path: '/universities/uiuc',
    name: 'UIUC',
    component: UIUC
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
  },
  {
    path: '/privacypolicy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
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
