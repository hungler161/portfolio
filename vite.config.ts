import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
/*
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
*/

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/.vs/**'],
    },
  },
})

