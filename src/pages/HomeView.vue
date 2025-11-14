<script setup>
const releasesUrl = 'https://github.com/kc1awv/LoRaTNCX/releases';
const firmwareRepo = 'https://github.com/kc1awv/LoRaTNCX';
</script>

<template>
  <section class="max-w-5xl mx-auto px-4 py-10 space-y-10">
    <header class="space-y-4">
      <p class="text-xs uppercase tracking-[0.2em] text-teal-400">
        LoRa-based KISS TNC
      </p>
      <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight">
        LoRaTNCX
      </h1>
      <p class="text-slate-300 max-w-2xl">
        LoRaTNCX turns modern ESP32&nbsp;+&nbsp;LoRa boards into a KISS-compatible
        TNC for packet radio. It speaks the simple KISS framing you already know
        while abusing LoRa’s ridiculous link budget for fun and utility.
      </p>

      <div class="flex flex-wrap gap-3 pt-2">
        <RouterLink
          to="/flash"
          class="inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-teal-400">
          Flash firmware
        </RouterLink>

        <RouterLink
          to="/manual"
          class="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-medium text-slate-100 hover:border-teal-400">
          Read the manual
        </RouterLink>
      </div>
    </header>

    <section class="grid gap-6 md:grid-cols-3">
      <article class="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
        <h2 class="text-sm font-semibold mb-1">Supported boards</h2>
        <ul class="text-sm text-slate-300 space-y-1">
          <li>Heltec WiFi LoRa 32 V3 (ESP32-S3, 8&nbsp;MB)</li>
          <li>Heltec WiFi LoRa 32 V4 (ESP32-S3, 16&nbsp;MB + GNSS header)</li>
        </ul>
      </article>

      <article class="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
        <h2 class="text-sm font-semibold mb-1">Features</h2>
        <ul class="text-sm text-slate-300 space-y-1">
          <li>KISS over USB / serial</li>
          <li>LoRa PHY tuned for amateur packet experiments</li>
          <li>Separate firmware &amp; SPIFFS images for easy updates</li>
        </ul>
      </article>

      <article class="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
        <h2 class="text-sm font-semibold mb-1">Source &amp; releases</h2>
        <ul class="text-sm text-teal-300 space-y-1">
          <li>
            <a :href="firmwareRepo" target="_blank" rel="noopener" class="hover:underline">
              Firmware repository
            </a>
          </li>
          <li>
            <a :href="releasesUrl" target="_blank" rel="noopener" class="hover:underline">
              Release binaries
            </a>
          </li>
        </ul>
      </article>
    </section>
  </section>
</template>
