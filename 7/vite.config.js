import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/Frontend_basics/7",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				page1: resolve(__dirname, '1/index.html'),
				page2: resolve(__dirname, '2/index.html'),
			}
		}
	}
})
