<template>
  <nav class="border-b border-slate-800 bg-slate-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex items-center">
          <router-link
            to="/"
            class="text-xl font-bold text-white transition-colors hover:text-indigo-400"
          >
            LoRaTNCX
          </router-link>
        </div>

        <div class="flex items-center space-x-4">
          <router-link
            to="/flash"
            class="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            :class="{ 'bg-slate-800 text-white': $route.path === '/flash' }"
          >
            Flash Firmware
          </router-link>

          <router-link
            to="/manual"
            class="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            :class="{ 'bg-slate-800 text-white': $route.path === '/manual' }"
          >
            Manual
          </router-link>

          <a
            href="https://github.com/kc1awv/LoRaTNCX"
            target="_blank"
            rel="noopener"
            class="rounded-md p-2 text-slate-400 transition-colors hover:text-white"
          >
            <svg
              class="size-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <div class="ml-4 border-l border-slate-700 pl-4">
            <button
              class="rounded-md p-2 text-slate-400 transition-colors hover:text-white"
              @click="switchTheme()"
            >
              <transition
                enter-active-class="transition duration-200 ease-out"
                leave-active-class="transition duration-200 ease-in"
                :enter-from-class="currentTheme === 'dark' ? 'transform -translate-y-full scale-50 opacity-0' : 'transform translate-y-full scale-50 opacity-0'"
                enter-to-class="transform translate-y-0"
                leave-from-class="transform translate-y-0"
                :leave-to-class="currentTheme === 'dark' ? 'transform translate-y-full scale-50 opacity-0' : 'transform -translate-y-full scale-50 opacity-0'"
                mode="out-in"
              >
                <svg
                  v-if="currentTheme === 'dark'"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>

                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </transition>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import useTheme from '@/composables/useTheme.js';

const { currentTheme, switchTheme } = useTheme();
</script>
