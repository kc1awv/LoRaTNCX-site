<script setup>
import NavBar from '@/components/NavBar.vue';

const manifestV3 = '/firmware/heltec_v3.manifest.json';
const manifestV4 = '/firmware/heltec_v4.manifest.json';
</script>

<template>
  <NavBar />

  <div class="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <section class="mx-auto max-w-4xl space-y-8 px-4 py-10">
      <header class="space-y-3">
        <h1 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Flash LoRaTNCX firmware
        </h1>
        <p class="text-slate-700 dark:text-slate-300">
          Use this page to flash the latest LoRaTNCX firmware and SPIFFS filesystem onto
          your Heltec boards directly from a supported browser.
        </p>
        <p class="text-xs text-slate-500 dark:text-slate-400">
          Use a Chromium-based browser on desktop. Web Serial / WebUSB support in other
          browsers is… patchy.
        </p>
      </header>

      <div class="grid gap-6 md:grid-cols-2">
        <article
          class="space-y-3 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/70"
        >
          <h2 class="text-lg font-semibold text-slate-900 dark:text-white">
            Heltec WiFi LoRa 32 V3
          </h2>
          <p class="pb-2 text-sm text-slate-700 dark:text-slate-300">
            Standard LoRaTNCX firmware for the V3 board (8&nbsp;MB flash).
          </p>

          <esp-web-install-button :manifest="manifestV3" />

          <p class="text-xs text-slate-500 dark:text-slate-400">
            Connect the board via USB. If it isn't detected, hold the
            <strong>BOOT</strong> button while plugging it in, then try again.
          </p>
        </article>

        <article
          class="space-y-3 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/70"
        >
          <h2 class="text-lg font-semibold text-slate-900 dark:text-white">
            Heltec WiFi LoRa 32 V4
          </h2>
          <p class="pb-2 text-sm text-slate-700 dark:text-slate-300">
            LoRaTNCX firmware for the V4 board (16&nbsp;MB flash) with optional GNSS
            support.
          </p>

          <esp-web-install-button :manifest="manifestV4" />

          <p class="text-xs text-slate-500 dark:text-slate-400">
            Same drill: USB cable, supported browser, mild patience. If it hangs,
            unplug/replug and retry.
          </p>
        </article>
      </div>

      <section
        class="space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400"
      >
        <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-200">
          What gets flashed?
        </h3>
        <ul class="list-disc space-y-1 pl-5">
          <li>Bootloader to <code>bootloader</code> at <code>0x0</code>.</li>
          <li>Partition table to <code>partitions</code> at <code>0x8000</code>.</li>
          <li>Main firmware image to <code>app0</code> at <code>0x10000</code>.</li>
          <li>
            SPIFFS filesystem image to the <code>spiffs</code> partition (offset depends
            on board).
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>
