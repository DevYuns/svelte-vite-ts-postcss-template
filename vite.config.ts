import {defineConfig} from 'vite';
import preprocess from 'svelte-preprocess';
import {svelte} from '@sveltejs/vite-plugin-svelte';

const production = process.env.NODE_ENV === 'production';

export default defineConfig({
  build: {
    outDir: './public',
  },
  plugins: [
    svelte({
      emitCss: true,
      compilerOptions: {dev: !production},
      extensions: ['.svelte'],
      preprocess: preprocess({
        postcss: true,
        sourceMap: !production,
      }),
    }),
  ],
});
