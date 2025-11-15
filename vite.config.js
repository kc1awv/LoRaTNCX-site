import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import svgLoader from 'vite-svg-loader';
import autoImport from 'unplugin-auto-import/dist/vite.js';
import Markdown from 'vite-plugin-md'
import { resolve } from 'path';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: process.env.VITE_BASE_PUBLIC_PATH,
    server: {
      historyApiFallback: true,
    },
    plugins: [
      eslint({ cache: false }),
      stylelint(),
      svgLoader(),
      vue({
        include: [/\.vue$/, /\.md$/],
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag === 'esp-web-install-button',
          },
        },
      }),
      Markdown({
        wrapperClasses: 'markdown-body',
        // You can add more options later (markdown-it plugins, syntax highlighting, etc.)
      }),
      autoImport({
        imports: [
          'vue',
          'vue-router',
        ],
        eslintrc: {
          enabled: true,
        },
        dirs: [
          './src/components',
          './src/composables',
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  });
};
