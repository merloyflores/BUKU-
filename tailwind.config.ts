import type { Config } from "tailwindcss";

const config: Config = {
content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      colors: {
        bukue: {
          dark: "#052e16",    // Verde bosque muy oscuro para textos/footer
          primary: "#15803d", // Verde corporativo (Naturaleza)
          light: "#84cc16",   // Verde lima (Acento, como la ranita)
          accent: "#f0fdf4",  // Verde ultra claro para fondos de sección
        },
      },
      backgroundImage: {
        'wind-turbines': "url('/images/hero-bg.jpg')", // Aquí pondremos la imagen de los eólicos
      },
    },
  },
  plugins: [],
};
export default config;