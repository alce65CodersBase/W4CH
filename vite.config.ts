/* eslint-disable camelcase */
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

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
        main: resolve(__dirname, "index.html"),
        main_ch0: resolve(__dirname, "CH0/index.html"),
        main_ch1: resolve(__dirname, "CH1.Gents/index.html"),
        main_ch2: resolve(__dirname, "CH2.Form/index.html"),
        main_ch3: resolve(__dirname, "CH3.GoT/index.html"),
        main_ch4l: resolve(__dirname, "CH4.List/index.html"),
        main_ch4p: resolve(__dirname, "CH4.Phone/index.html"),
      },
    },
  },
});
