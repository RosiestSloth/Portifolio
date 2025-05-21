import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Portifólio | Vinicius Santos - Desenvolvedor Front-End e UX/UI',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portifólio de Vinicius Santos, desenvolvedor Front End e UX/UI, design responsivo e experiências web acessíveis. Confira meus projetos e entre em contato.'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Vinicius Santos' },
        { name: 'keywords', content: 'desenvolvedor front-end, UX/UI, design web, portfólio, Vue.js, Nuxt.js, Tailwind CSS' },
        { name: 'theme-color', content: '#608BDA' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://portifolio-taupe-beta.vercel.app/' },
        { property: 'og:title', content: 'Portifólio | Vinicius Santos - Desenvolvedor Front-End e UX/UI' },
        { property: 'og:description', content: 'Portifólio de Vinicius Santos, desenvolvedor Front End e UX/UI, design responsivo e experiências web acessíveis.' },
        { property: 'og:image', content: 'https://portifolio-taupe-beta.vercel.app/imgs/seu-banner.jpg' },

        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://portifolio-taupe-beta.vercel.app/' },
        { property: 'twitter:title', content: 'Portifólio | Vinicius Santos - Desenvolvedor Front-End e UX/UI' },
        { property: 'twitter:description', content: 'Portifólio de Vinicius Santos, desenvolvedor Front End e UX/UI, design responsivo e experiências web acessíveis.' },
        { property: 'twitter:image', content: 'https://portifolio-taupe-beta.vercel.app/imgs/seu-banner.jpg' },

      ],
      htmlAttrs: {
        lang: 'pt-br',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
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