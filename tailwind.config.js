import colors from "tailwindcss/colors"

// const colors = require('tailwindcss/colors')

const constants = {
	red: '#FF4A55',
	green: '#008D64',
	'dark-green': '#006044',
	'light-green': '#E6F2EF',
	black: '#222222',
	white: '#ffffff',
	'light-gray': '#E8E7E3',
	beige: '#A49B8F',
	blue:'#54459b'
}

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 },
				},
			},
			scaleIn: {
				'0%': {
					opacity: 0,
					transform: 'scale(0.9)',
				},
				'50%': {
					opacity: 0.3,
				},
				'100%': {
					opacity: 1,
					transform: 'scale(1)',
				},
			},
			animation: {
				// opacity: 'animationOpacity .5s easy-in-out',
				scaleIn: 'scaleIn .35s easy-in-out',
			},
		},
		colors: {
			transparent: colors.transparent,
			...constants,
		},
	},
	plugins: [],
}
