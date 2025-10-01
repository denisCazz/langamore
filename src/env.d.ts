/// <reference types="astro/client" />

export const SITE = "https://langamorepollenzo.it";

declare global {
	namespace astroHTML.JSX {
		interface ImgHTMLAttributes {
			fetchpriority?: "high" | "low" | "auto" | null;
		}

		interface LinkHTMLAttributes {
			fetchpriority?: "high" | "low" | "auto" | null;
		}
	}
}

export {};
