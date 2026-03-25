import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"projects-gradient":
					"linear-gradient(to right, #0B1541, #0B1541, #0B1541,  #0B1541, #0B1541,  #0B1541, #0B1541, #1D7874)",
				"project-title-gradient":
					"linear-gradient(to right, #0B1541, #0B1541, #0B1541,  #0B1541, #0B1541,  #0B1541, #0B1541, #1D7874)",
				"mobile-gradient":
					"linear-gradient(to bottom, #0B1541,  #1D7874)",
				"nav-gradient": "linear-gradient(to right, #1D7874, #0B1541)"
			},

			colors: {
				goldenrod: "rgb(var(--color-goldenrod) / <alpha-value>)",
				orangeflame: "#FF7D11",
				tealAccent: "#1D7874",
				deepBlueBg: "#0B1541",
				background: {
					gradient: "linear-gradient(to right, #1D787415, #FF7D11)"
				}
			},

			plugins: []
		}
	}
};
export default config;
