import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue()],
	base: '/study-board/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	// css: {
	// 	preprocessorOptions: {
	// 		sass: {
	// 			additionalData: `
	//         @import "./src/assets/scss/reset.scss";
	// 				`,
	// 		},
	// 	},
	// },
})
