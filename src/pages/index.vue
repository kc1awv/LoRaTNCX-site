<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <NavBar />

  <main class="mx-auto flex flex-col items-center justify-center px-4 py-16">
    <div class="space-y-6">
      <h1 class="text-center text-6xl font-bold text-gray-700 dark:text-gray-100">
        LoRaTNCX
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        LoRa-based KISS TNC for ESP32 boards
      </p>

      <div class="mx-auto max-w-4xl space-y-4 text-justify text-gray-700 dark:text-gray-300">
        <p>
          LoRaTNCX is a KISS-compatible Terminal Node Controller built for modern ESP32 LoRa boards.
          Because apparently, we needed another way to send packets through the air using radio waves that travel at the speed of light. Who doesn't love that?
        </p>

        <p>
          This project is also a grand experiment in AI-assisted programming. Yes, large portions of this website and firmware were written with the help of AI
          tools. We're basically letting robots write our radio software. What could possibly go wrong?
        </p>

        <p>
          But hey, it actually works! The firmware integrates with existing packet radio software while leveraging LoRa's exceptional link budget for reliable
          long-range communications. Because nothing says "cutting-edge technology" like resurrecting 1980s packet radio protocols with modern hardware.
        </p>

        <div class="flex justify-center space-x-4 pt-4">
          <router-link
            to="/flash"
            class="inline-flex items-center space-x-2 rounded-md bg-indigo-600 px-6 py-3 font-medium text-indigo-50 shadow-xl transition duration-300 hover:bg-indigo-700 hover:shadow-md"
          >
            <svg
              class="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>Flash Firmware</span>
          </router-link>

          <router-link
            to="/manual"
            class="inline-flex items-center space-x-2 rounded-md bg-gray-600 px-6 py-3 font-medium text-gray-50 shadow-xl transition duration-300 hover:bg-gray-700 hover:shadow-md"
          >
            <svg
              class="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span>Documentation</span>
          </router-link>
        </div>
      </div>

      <div class="space-y-4 pt-8">
        <h2 class="text-center text-2xl font-semibold text-gray-700 dark:text-gray-100">
          Supported Boards
        </h2>
        <div class="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          <div class="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            <h3 class="font-semibold text-gray-700 dark:text-gray-100">
              Heltec WiFi LoRa 32 V3
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              ESP32-S3 with 8 MB flash
            </p>
          </div>
          <div class="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            <h3 class="font-semibold text-gray-700 dark:text-gray-100">
              Heltec WiFi LoRa 32 V4
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              ESP32-S3 with 16 MB flash + GNSS support
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4 pt-8">
        <h2 class="text-center text-2xl font-semibold text-gray-700 dark:text-gray-100">
          The AI Experiment
        </h2>
        <div class="mx-auto max-w-4xl rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-6 dark:from-indigo-900/20 dark:to-purple-900/20">
          <p class="text-gray-700 dark:text-gray-300">
            This entire project is a learning experiment in AI-assisted development. From the Vue.js website you're looking at right now,
            to the ESP32 firmware running on your LoRa board, significant portions were created with AI assistance.
          </p>
          <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
            We're exploring how AI can accelerate development while maintaining code quality and functionality.
            So far, the results are promising - the code works, and we learned a lot about prompting AI tools effectively!
          </p>
        </div>
      </div>

      <div class="pt-8 text-center">
        <a
          href="https://github.com/kc1awv/LoRaTNCX"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          <svg
            class="size-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  </main>

  <footer class="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
    <p>© {{ new Date().getFullYear() }} LoRaTNCX Developers, et al. Built with &hearts; for the packet radio community.</p>
    <p class="mt-1 text-xs">
      And yes, AI helped write most of this. Send complaints to the robots.
    </p>
  </footer>
</template>

<style>
body {
  @apply dark:bg-gray-900 dark:text-gray-50;
}
</style>
