<script setup lang="ts">
// eslint-disable no-param-reassign
import {
  computed,
  ref,
  watch,
  nextTick,
} from 'vue';
import { useRoute, RouterLink, RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';

/**
 * Manual navigation structure.
 * Adjust `to` paths to match your actual routes / filenames.
 */
const sections = [
  { label: 'Overview', to: '/manual' },
  { label: 'Introduction', to: '/manual/introduction' },
  { label: 'Getting Started', to: '/manual/getting-started' },
  { label: 'Hardware Overview', to: '/manual/hardware-overview' },
  { label: 'Software Architecture', to: '/manual/software-architecture' },
  { label: 'Installation & Setup', to: '/manual/installation-setup' },
  { label: 'Configuration', to: '/manual/configuration' },
  { label: 'LoRa Radio Configuration', to: '/manual/lora-radio-configuration' },
  { label: 'WiFi and Networking', to: '/manual/wifi-networking' },
  { label: 'Web Interface', to: '/manual/web-interface' },
  { label: 'KISS Protocol Usage', to: '/manual/kiss-protocol-usage' },
  { label: 'GNSS Support', to: '/manual/gnss-support' },
  { label: 'Applications and Integration', to: '/manual/applications-integration' },
  { label: 'Testing and Validation', to: '/manual/testing-validation' },
  { label: 'Troubleshooting', to: '/manual/troubleshooting' },
  { label: 'Advanced Topics', to: '/manual/advanced-topics' },
  { label: 'Development & Customization', to: '/manual/development-customization' },
  { label: 'Appendices', to: '/manual/appendices' },
];

const route = useRoute();

const currentPath = computed(() => route.path);

const toc = ref([]);

function slugify(text) {
  let slug = '';
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i].toLowerCase();
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      slug += char;
    } else if (slug && !slug.endsWith('-')) {
      slug += '-';
    }
  }
  while (slug.endsWith('-')) {
    slug = slug.slice(0, -1);
  }
  return slug;
}

const updateToc = () => {
  /* eslint-disable no-param-reassign */
  nextTick(() => {
    const headings = document.querySelectorAll('.markdown-body h1, .markdown-body h2, .markdown-body h3');
    headings.forEach((h) => {
      if (!h.id) {
        h.id = slugify(h.textContent || '');
      }
    });
    toc.value = Array.from(headings).map((h) => ({
      text: h.textContent?.trim() || '',
      id: h.id,
      level: h.tagName.toLowerCase(),
    }));
  });
  /* eslint-enable no-param-reassign */
};

watch(route, updateToc, { immediate: true });

</script>

<template>
  <NavBar />
  <div class="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <div class="flex flex-col gap-6 px-4 py-8 lg:flex-row lg:py-12">
      <!-- Sidebar -->
      <aside
        class="w-full shrink-0 rounded-2xl border border-slate-200 bg-white p-4 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70 lg:w-64 lg:p-5"
      >
        <p class="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
          Documentation
        </p>
        <h1 class="mb-4 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          LoRaTNCX Manual
        </h1>
        <p class="mb-4 text-sm text-slate-600 dark:text-slate-400">
          Firmware usage, KISS details, and general wizardry for the TNC.
        </p>

        <nav class="space-y-1 text-sm">
          <RouterLink
            v-for="section in sections"
            :key="section.to"
            :to="section.to"
            class="block rounded-xl px-3 py-2 transition"
            :class="currentPath === section.to
              ? 'border border-sky-500/40 bg-sky-500/15 text-sky-700 dark:border-sky-500/40 dark:text-sky-300'
              : 'border border-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 ' +
                'dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-slate-50'"
          >
            {{ section.label }}
          </RouterLink>
        </nav>
      </aside>

      <!-- Main content -->
      <main class="w-full space-y-4">
        <!-- Markdown content wrapper -->
        <section
          class="rounded-2xl border border-slate-200 bg-white px-4 py-6 text-sm leading-relaxed text-slate-900 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-100 sm:px-6 sm:py-7 lg:p-8"
        >
          <!-- The markdown pages (e.g. index.md, getting-started.md) render here -->
          <RouterView />
        </section>
      </main>

      <!-- Right sidebar -->
      <aside
        v-if="toc.length > 0"
        class="w-full shrink-0 rounded-2xl border border-slate-200 bg-white p-4 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70 lg:w-64 lg:p-5"
      >
        <h1 class="mb-4 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          On this page
        </h1>

        <nav class="space-y-1 text-sm">
          <a
            v-for="item in toc"
            :key="item.id"
            :href="`#${item.id}`"
            class="block rounded-xl border border-transparent px-3 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-slate-50"
            :class="{
              'ml-6': item.level === 'h4' || item.level === 'h5' || item.level === 'h6',
              'ml-3': item.level === 'h3'
            }"
          >
            {{ item.text }}
          </a>
        </nav>
      </aside>
    </div>
  </div>
</template>

<style scoped>
/* Basic "prose" styling for markdown content.
   This assumes your Markdown plugin wraps content with a single root element,
   and you set wrapperClasses: 'markdown-body' in its config.
*/

.markdown-body :deep(h1) {
  @apply mb-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50;
}

.markdown-body :deep(h2) {
  @apply mt-6 mb-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50;
}

.markdown-body :deep(h3) {
  @apply mt-5 mb-2 text-lg font-semibold text-slate-800 dark:text-slate-100;
}

.markdown-body :deep(p) {
  @apply mb-3 text-slate-700 dark:text-slate-200;
}

.markdown-body :deep(a) {
  @apply text-sky-600 underline-offset-2 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 hover:underline;
}

.markdown-body :deep(code) {
  @apply rounded bg-slate-100 px-1.5 py-0.5 text-[0.8rem] font-mono text-slate-800 dark:bg-slate-800/90 dark:text-sky-300;
}

.markdown-body :deep(pre) {
  @apply mb-4 overflow-x-auto rounded-xl bg-slate-100 p-4 text-xs leading-relaxed text-slate-900 dark:bg-slate-900/90 dark:text-slate-100;
}

.markdown-body :deep(pre code) {
  @apply bg-transparent p-0 text-[0.8rem];
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  @apply mb-3 ml-5 space-y-1 text-slate-700 dark:text-slate-200;
}

.markdown-body :deep(li) {
  @apply leading-relaxed;
}

.markdown-body :deep(hr) {
  @apply my-6 border-slate-200 dark:border-slate-800/80;
}

.markdown-body :deep(blockquote) {
  @apply my-4 border-l-4 border-slate-300 bg-slate-50 px-4 py-2 text-slate-700 dark:border-slate-600/70 dark:bg-slate-900/80 dark:text-slate-200;
}

.markdown-body :deep(table) {
  @apply my-4 w-full border-collapse text-xs;
}

.markdown-body :deep(th),
.markdown-body :deep(td) {
  @apply border border-slate-300 px-2 py-1 dark:border-slate-700;
}

.markdown-body :deep(th) {
  @apply bg-slate-100 font-semibold dark:bg-slate-900;
}
</style>
