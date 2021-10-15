const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	theme: {
		colors: colors,
		screens: {
			'2xl': {'max': '1535px'},
			'xl': {'max': '1279px'},
			'lg': {'max': '1023px'},
			'md': {'max': '767px'},
			'sm': {'max': '639px'},
		},
	},
	exposeConfig: false,
}
