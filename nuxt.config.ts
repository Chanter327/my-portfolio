// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: [
    "~/assets/css/default.css"
  ],
  app: {
    baseURL: '/kohiruimaki.github.io',
  }
})