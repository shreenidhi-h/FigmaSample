/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			inter: "Inter",
		},
		extend: {
			colors: {
				lavender: "#6941c6",
				uda: "#475467",
				coal: "#101828",
				lightpurple: "#7f56d9",
				lightblue: "#f9fafb",
				pista: "#067647",
			},
		},
	},
	plugins: [],
};
