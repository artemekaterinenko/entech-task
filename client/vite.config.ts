/// <reference types="vitest" />
import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => ({
  optimizeDeps: {
    disabled: false
  },
  build: {
    commonjsOptions: {
      include: []
    }
  },
  preview: {
    port: 8080
  },
  test: {
    css: false,
    include: ['src/**/__tests__/*'],
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    clearMocks: true,
    coverage: {
      provider: 'istanbul',
      enabled: true,
      '100': true,
      reporter: ['text', 'lcov'],
      reportsDirectory: 'coverage'
    }
  },
  plugins: [
    tsconfigPaths(),
    react(),
    visualizer({
      template: 'treemap',
      open: false,
      gzipSize: true,
      filename: 'analyze-bundle.html'
    }),
    svgr(),
    ...(mode === 'test' ? [] : [eslintPlugin()])
  ]
}))
