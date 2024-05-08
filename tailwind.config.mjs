/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('daisyui')
	],
	daisyui: {
		themes: [{
			mytheme: {
				"primary": "#a991f7",
				"secondary": "#f6d860",
				"accent": "#37cdbe",
				"neutral": "#3d4451",
				"base-100": "#19191B",
				"base-content": "#E1E2F5",
			}
		}],
	},
}
