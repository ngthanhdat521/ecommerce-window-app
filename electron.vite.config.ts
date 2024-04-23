import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src/renderer/src/'),
        '@pages': resolve(__dirname, './src/renderer/src/pages/'),
        '@routers': resolve(__dirname, './src/renderer/src/routers/'),
        '@services': resolve(__dirname, './src/renderer/src/services/'),
        '@components': resolve(__dirname, './src/renderer/src/components/'),
        '@stores': resolve(__dirname, './src/renderer/src/stores/'),
        '@shared': resolve(__dirname, './src/renderer/src/shared/')
      }
    },
    plugins: [react()]
  }
})
