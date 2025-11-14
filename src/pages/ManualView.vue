<template>
  <NavBar />

  <section class="mx-auto max-w-3xl space-y-6 px-4 py-10">
    <header>
      <h1 class="mb-2 text-2xl font-semibold tracking-tight">
        LoRaTNCX Manual
      </h1>
      <p class="text-slate-300">
        This section will hold the full user manual, configuration guide,
        and KISS integration notes. For now, it’s a glorified TODO.
      </p>
    </header>

    <section class="space-y-3 text-sm leading-relaxed text-slate-200">
      <p>
        Planned sections:
      </p>
      <ul class="list-disc space-y-1 pl-5">
        <li>Introduction &amp; hardware overview</li>
        <li>Getting started &amp; first flash</li>
        <li>KISS operation (serial parameters, examples)</li>
        <li>LoRa parameters &amp; band plans</li>
        <li>Advanced usage &amp; troubleshooting</li>
      </ul>
      <p class="text-xs text-slate-500">
        Until the manual is written here, you can check the README and docs in
        the firmware repository.
      </p>
    </section>
  </section>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
</script>
