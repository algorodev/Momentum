/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default ({ mode }: { mode: string}) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

	return defineConfig({
		plugins: [react(), tailwindcss(), tsconfigPaths()],
		server: {
			proxy: {
				'/api': {
					target: process.env.VITE_API_URL,
					changeOrigin: true,
					rewrite: (path: string) => path.replace(/^\/api/, ''),
				},
			},
		},
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
			},
		},
	})
}
