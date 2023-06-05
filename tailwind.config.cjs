/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1rem",
				screens: {
					sm: "100%",
					md: '1280px'
				}
			},
		},
	},
	plugins: [require("rippleui")],
	rippleui: {
		themes: [
			{
				themeName: "light",
				colorScheme: "light",
				colors: {
					primary: "#235264",
					backgroundPrimary: "#964643",
					backgroundSecondary: "#FFFFFF",
				},
			},
			{
				themeName: "dark",
				colorScheme: "dark",
				colors: {
					primary: "#00C7FF",
					backgroundPrimary: "#061829",
					backgroundSecondary: "#0D2538",
				},
			},
		],
	},
}
