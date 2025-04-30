import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Portifólio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portifólio de Vinicius Santos, desenvolvedor Front End e UX/UI, design responsivo e experiências web acessíveis. Confira meus projetos e entre em contato.'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Vinicius' },
      ],
      htmlAttrs: {
        lang: 'pt-br',
      },
    },
  },
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