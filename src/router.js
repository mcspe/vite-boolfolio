import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppProjectDetail from './pages/AppProjectDetail.vue';
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
      component: AppProjects,
    },
    {
      path: '/project/:slug',
      name: 'project-detail',
      component: AppProjectDetail
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