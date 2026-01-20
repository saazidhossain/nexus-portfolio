/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				slate: {
					850: '#1e293b',
					900: '#0f172a',
					950: '#020617', // Deepest Void
				},
				indigo: { 500: '#6366f1' },
				emerald: { 500: '#10b981' },
				cyan: { 500: '#06b6d4' },
				gold: { 500: '#eab308' },
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
};