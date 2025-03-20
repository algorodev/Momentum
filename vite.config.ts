/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    root: 'src',
    setupFiles: './src/__tests__/setup.ts',
    watch: false,
    coverage: {
      reporter: ['text', 'html'],
      reportsDirectory: './__tests__/coverage',
      include: ['**/*.tsx', '**/*.ts'],
      exclude: ['**/*.d.ts', '**/*.spec.tsx', '**/*.stories.ts', '**/*.stories.tsx'],
    }
  }
})
