import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
      svgLoader(),
    ],
  },
  modules: ['@nuxt/icon', 
    '@nuxt/image', 
    '@nuxt/fonts'
  ],
});