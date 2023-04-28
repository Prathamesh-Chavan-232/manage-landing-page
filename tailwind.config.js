/** @type {import('tailwindcss').Config} */
export default {
	content: ["./*.html", "./src/**/*.{html,js}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440pxs",
		},
		extend: {
			colors: {
				// Red / Orangish
				brightRed: "hsl(12,88%,59%)",
				brightRedLight: "hsl(12,88%,69%)",
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
