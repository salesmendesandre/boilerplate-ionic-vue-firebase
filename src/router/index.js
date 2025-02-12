import { createRouter, createWebHistory } from '@ionic/vue-router';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Home from '../views/Home.vue';
import HomeContent from '../views/HomeContent.vue';
import Profile from '../views/Profile.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import Tasks from '../views/Tasks.vue';

const routes = [
  { path: '/', redirect: '/app' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword },
  {
    path: '/app',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      { path: '', component: HomeContent },
      { path: 'profile', component: Profile },
      { path: 'tasks', component: Tasks }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

let isAuthChecked = false;

router.beforeEach((to, from, next) => {
  if (!isAuthChecked) {
    onAuthStateChanged(auth, (user) => {
      isAuthChecked = true;
      if (to.matched.some(record => record.meta.requiresAuth) && !user) {
        next('/login');
      } else {
        next();
      }
    });
  } else {
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
      next('/login');
    } else {
      next();
    }
  }
});


export default router