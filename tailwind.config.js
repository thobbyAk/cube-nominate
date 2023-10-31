/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"3xl": "0px 2px 10px 0px rgba(26, 26, 25, 0.24)",
			},
			backgroundImage: {
				landing: "url('/src/Assets/images/bg-image.jpg')",
			},
			fontSize: {
				xl: "24px",
				"2xl": "32px",
			},
			fontFamily: {
				poppins: ["Poppins", "sans"],
				anonpro: ["Anonymous Pro", "monospace"],
			},
			colors: {
				gradientColorStops: {
					customGradient: "81deg, #A0FF1F 13.17%, #00ED71 86.83%",
				},
				customGreen: {
					100: "#A0FF1F",
					200: "#00ED71",
				},
				customGrey: {
					100: "#5B5B5B",
					200: "#C3C3C3",
					300: "#F8F8F8",
				},
				customPink: {
					100: "#F70087",
					200: "#F40256",
				},
			},
		},
	},
	plugins: [],
};
