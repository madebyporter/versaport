// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

      script: [
        {
          // Font Awesome
          src: 'https://kit.fontawesome.com/148ade9713.js',
          crossorigin: 'anonymous',
          async: true,
        }
      ],
    },
  },
  css: ['~/assets/css/output.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
      gtagId: 'G-NWH4NW627H'
    }
  }
})
