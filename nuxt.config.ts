// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' },
        { hid: 'description', name: 'description', content: 'Find Design Engineers To Scale Quickly.' },
        { hid: 'og:title', property: 'og:title', content: 'Think Versa' },
        { hid: 'og:description', property: 'og:description', content: 'Find Design Engineers To Scale Quickly.' },
        { hid: 'og:image', property: 'og:image', content: '/og-image.jpg' },
        { hid: 'twitter:card', name: 'twitter:card', content: '/og-image.jpg' },
      ],
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
