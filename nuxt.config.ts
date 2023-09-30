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
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    //
  },
  serverMiddleware: [
    { path: '/api', handler: '~/server/api/people.js' }, // Adjust the path and handler as needed
  ]
})
