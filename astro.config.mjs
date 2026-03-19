// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { cpSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Custom integration: copy content images to build output
function contentImages() {
  return {
    name: 'content-images',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const contentDir = './src/content/concepts';
        const outDir = dir.pathname;
        const folders = readdirSync(contentDir).filter(
          f => !f.startsWith('_') && statSync(join(contentDir, f)).isDirectory()
        );
        for (const folder of folders) {
          const srcFolder = join(contentDir, folder);
          const destFolder = join(outDir, 'concepts', folder);
          const files = readdirSync(srcFolder).filter(
            f => !f.endsWith('.md') && !f.startsWith('.')
          );
          for (const file of files) {
            cpSync(join(srcFolder, file), join(destFolder, file));
          }
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [contentImages()],
  vite: {
    plugins: [tailwindcss()]
  }
});
