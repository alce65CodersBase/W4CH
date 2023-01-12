/* eslint-disable camelcase */
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// Multi project
// src
// ├── package.json
// ├── vite.config.js
// ├── index.html
// ├── main.ts
// └── CH1.GoT
//     ├── index.html
//     └── main_got.ts

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'CH0/main': resolve(__dirname, 'CH0'),
        'CH1.Gents/main': resolve(__dirname, 'CH1.Gents'),
        'CH2.Form/main': resolve(__dirname, 'CH2.Form'),
        'CH3.GoT/main': resolve(__dirname, 'CH3.GoT'),
        'CH4.List/main': resolve(__dirname, 'CH4.List'),
        'CH4.Phone/main': resolve(__dirname, 'CH4.Phone'),
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
