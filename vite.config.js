import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  rollupInputOptions: {
    input: ['src/main.jsx'],
    preserveEntrySignatures: 'strict',
    preserveModules: true,
  },
})