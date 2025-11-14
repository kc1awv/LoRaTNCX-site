import Index from '@/pages/index.vue';
import NotFound from '@/pages/not-found.vue';

import ManualLayout from '@/pages/ManualLayout.vue';
import FlashView from '@/pages/FlashView.vue';

import ManualIndex from '@/manual/index.md';
import ManualIntroduction from '@/manual/01-introduction.md';
import ManualGettingStarted from '@/manual/02-getting-started.md';
import ManualHardwareOverview from '@/manual/03-hardware-overview.md';
import ManualSoftwareArchitecture from '@/manual/04-software-architecture.md';

export const routes = [
  { path: '/', component: Index },
  { path: '/flash', component: FlashView },
  {
    path: '/manual',
    component: ManualLayout,
    children: [
      { path: '', component: ManualIndex },
      { path: 'introduction', component: ManualIntroduction },
      { path: 'getting-started', component: ManualGettingStarted },
      { path: 'hardware-overview', component: ManualHardwareOverview },
      { path: 'software-architecture', component: ManualSoftwareArchitecture },
    ],
  },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
