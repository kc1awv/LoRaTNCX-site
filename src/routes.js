import Index from '@/pages/index.vue';
import NotFound from '@/pages/not-found.vue';

import ManualView from '@/pages/ManualView.vue';
import FlashView from '@/pages/FlashView.vue';

export const routes = [
  { path: '/', component: Index },
  { path: '/manual', component: ManualView },
  { path: '/flash', component: FlashView },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
