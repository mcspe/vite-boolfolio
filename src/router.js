import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppAbout from './pages/AppAbout.vue';
import AppContacts from './pages/AppContacts.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/projects',
      name: 'projects',
      component: AppProjects
    },
    {
      path: '/about',
      name: 'about',
      component: AppAbout
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: AppContacts
    }
  ]
});

export { router };