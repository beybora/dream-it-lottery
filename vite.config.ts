import { defineConfig } from 'vite'
import graphql from "@rollup/plugin-graphql";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), graphql()],
  server: {
    port: 8000
  },
})
