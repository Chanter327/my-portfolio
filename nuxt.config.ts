// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/dist/'
  },
  ssr: false,
  css: [
    "@/assets/css/default.css"
  ],
})