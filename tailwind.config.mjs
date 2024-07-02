/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				oscarPink: "hsl(var(--oscar-pink))",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],

	// Normalization of browser styles. @see https://tailwindcss.com/docs/preflight#accessibility-considerations
	// corePlugins: {
	// 	preflight: false,
	// }
}
