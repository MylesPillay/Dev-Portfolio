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
					"linear-gradient(to right, #071E22, #1D7874)",
				"nav-gradient":
					"linear-gradient(to right, #1D787485, #1D787450, #071E2299)"
			},
			colors: {
				goldenrod: "rgb(var(--color-goldenrod) / <alpha-value>)",
				background: {
					gradient: "linear-gradient(to right, #1D787415, #FF6600)"
				}
			},

			plugins: []
		}
	}
};
export default config;
