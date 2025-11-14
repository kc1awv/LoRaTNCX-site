<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterLink, RouterView } from 'vue-router';

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
  { label: 'Configuration', to: '/manual/configuration' },
  { label: 'Using the TNC', to: '/manual/usage' },
  { label: 'KISS Reference', to: '/manual/kiss-reference' },
  { label: 'Troubleshooting', to: '/manual/troubleshooting' },
];

const route = useRoute();

const currentPath = computed(() => route.path);
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 lg:flex-row lg:py-12">
      <!-- Sidebar -->
      <aside
        class="w-full shrink-0 rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 backdrop-blur lg:w-64 lg:p-5"
      >
        <h1 class="mb-4 text-lg font-semibold tracking-tight text-slate-50">
          LoRaTNCX Manual
        </h1>
        <p class="mb-4 text-sm text-slate-400">
          Firmware usage, KISS details, and general wizardry for the TNC.
        </p>

        <nav class="space-y-1 text-sm">
          <RouterLink
            v-for="section in sections"
            :key="section.to"
            :to="section.to"
            class="block rounded-xl px-3 py-2 transition"
            :class="
              currentPath === section.to
                ? 'bg-sky-500/15 text-sky-300 border border-sky-500/40'
                : 'text-slate-300 hover:bg-slate-800/80 hover:text-slate-50 border border-transparent'
            "
          >
            {{ section.label }}
          </RouterLink>
        </nav>
      </aside>

      <!-- Main content -->
      <main class="w-full space-y-4">
        <!-- Breadcrumb / header -->
        <header class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Documentation
            </p>
            <h2 class="text-2xl font-semibold tracking-tight text-slate-50">
              KISS TNC Manual
            </h2>
          </div>

          <a
            href="https://github.com/kc1awv/LoRaTNCX"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-900 hover:border-sky-500/60"
          >
            <span class="inline-block size-1.5 rounded-full bg-emerald-400" />
            Firmware repo
          </a>
        </header>

        <!-- Markdown content wrapper -->
        <section
          class="markdown-body rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-6 text-sm leading-relaxed text-slate-100 shadow-sm backdrop-blur
                 sm:px-6 sm:py-7 lg:p-8"
        >
          <!-- The markdown pages (e.g. index.md, getting-started.md) render here -->
          <RouterView />
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Basic "prose" styling for markdown content.
   This assumes your Markdown plugin wraps content with a single root element,
   and you set wrapperClasses: 'markdown-body' in its config.
*/

.markdown-body :deep(h1) {
  @apply mb-4 text-3xl font-semibold tracking-tight text-slate-50;
}

.markdown-body :deep(h2) {
  @apply mt-6 mb-3 text-2xl font-semibold tracking-tight text-slate-50;
}

.markdown-body :deep(h3) {
  @apply mt-5 mb-2 text-lg font-semibold text-slate-100;
}

.markdown-body :deep(p) {
  @apply mb-3 text-slate-200;
}

.markdown-body :deep(a) {
  @apply text-sky-400 underline-offset-2 hover:text-sky-300 hover:underline;
}

.markdown-body :deep(code) {
  @apply rounded bg-slate-800/90 px-1.5 py-0.5 text-[0.8rem] font-mono text-sky-300;
}

.markdown-body :deep(pre) {
  @apply mb-4 overflow-x-auto rounded-xl bg-slate-900/90 p-4 text-xs leading-relaxed text-slate-100;
}

.markdown-body :deep(pre code) {
  @apply bg-transparent p-0 text-[0.8rem];
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  @apply mb-3 ml-5 space-y-1 text-slate-200;
}

.markdown-body :deep(li) {
  @apply leading-relaxed;
}

.markdown-body :deep(hr) {
  @apply my-6 border-slate-800/80;
}

.markdown-body :deep(blockquote) {
  @apply my-4 border-l-4 border-slate-600/70 bg-slate-900/80 px-4 py-2 text-slate-200;
}

.markdown-body :deep(table) {
  @apply my-4 w-full border-collapse text-xs;
}

.markdown-body :deep(th),
.markdown-body :deep(td) {
  @apply border border-slate-700 px-2 py-1;
}

.markdown-body :deep(th) {
  @apply bg-slate-900 font-semibold;
}
</style>
