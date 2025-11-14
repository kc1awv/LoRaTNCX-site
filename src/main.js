import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'esp-web-tools';
import '@/assets/styles/fonts.css';
import '@/assets/styles/main.css';
import '@/assets/styles/tailwind.css';
import App from '@/app.vue';
import { routes } from '@/routes.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
});

const app = createApp(App);

app.use(router);

// Handle GitHub Pages SPA redirect
const query = window.location.search;
if (query && query.startsWith('?/')) {
  const path = query.slice(2).split('&')[0];
  router.push(path);
  window.history.replaceState(null, '', path);
}

app.mount('#app');
