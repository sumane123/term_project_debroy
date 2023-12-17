import { createApp } from 'vue';
import App from './App.vue';
import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue'; 
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue'; 
import Skills from './components/Skills.vue'; 
import Projects from './components/Projects.vue'; 
import Contact from './components/Contact.vue'; 

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');

