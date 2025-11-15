import Index from '@/pages/index.vue';
import NotFound from '@/pages/not-found.vue';

import ManualLayout from '@/pages/ManualLayout.vue';
import FlashView from '@/pages/FlashView.vue';

import ManualIndex from '@/manual/index.md';
import ManualIntroduction from '@/manual/01-introduction.md';
import ManualGettingStarted from '@/manual/02-getting-started.md';
import ManualHardwareOverview from '@/manual/03-hardware-overview.md';
import ManualSoftwareArchitecture from '@/manual/04-software-architecture.md';
import ManualInstallation from '@/manual/05-installation-setup.md';
import ManualConfiguration from '@/manual/06-configuration.md';
import ManualLoraRadioConfiguration from '@/manual/07-lora-radio-configuration.md';
import ManualWifiNetworking from '@/manual/08-wifi-networking.md';
import ManualWebInterface from '@/manual/09-web-interface.md';
import ManualKissProtocolUsage from '@/manual/10-kiss-protocol-usage.md';
import ManualGnssSupport from '@/manual/11-gnss-support.md';
import ManualApplicationsIntegration from '@/manual/12-applications-integration.md';
import ManualTestingValidation from '@/manual/13-testing-validation.md';
import ManualTroubleshooting from '@/manual/14-troubleshooting.md';
import ManualAdvancedTopics from '@/manual/15-advanced-topics.md';
import ManualDevelopmentCustomization from '@/manual/16-development-customization.md';
import ManualAppendices from '@/manual/17-appendices.md';

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
      { path: 'installation-setup', component: ManualInstallation },
      { path: 'configuration', component: ManualConfiguration },
      { path: 'lora-radio-configuration', component: ManualLoraRadioConfiguration },
      { path: 'wifi-networking', component: ManualWifiNetworking },
      { path: 'web-interface', component: ManualWebInterface },
      { path: 'kiss-protocol-usage', component: ManualKissProtocolUsage },
      { path: 'gnss-support', component: ManualGnssSupport },
      { path: 'applications-integration', component: ManualApplicationsIntegration },
      { path: 'testing-validation', component: ManualTestingValidation },
      { path: 'troubleshooting', component: ManualTroubleshooting },
      { path: 'advanced-topics', component: ManualAdvancedTopics },
      { path: 'development-customization', component: ManualDevelopmentCustomization },
      { path: 'appendices', component: ManualAppendices },
    ],
  },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
