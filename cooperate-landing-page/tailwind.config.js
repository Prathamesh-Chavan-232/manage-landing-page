/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				// Red / Orangish
				brightRed: "hsl(224,97%,59%)",
				brightRedLight: "hsl(224,97%,89%)",
				brightRedVLight: "hsl(12,88%,95%)",
				veryPaleRed: "hsl(13, 100%, 96%)",

				// Dark Blue
				darkBlue: "hsl(228, 39%, 23%)",
				darkGrayishBlue: "hsl(227, 12%, 61%)",
				veryDarkBlue: "hsl(233, 12%, 13%)",

				// Gray
				veryLightGray: "hsl(0, 0%, 98%)",
			},
		},
	},
	plugins: [],
};
