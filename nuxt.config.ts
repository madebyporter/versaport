// https://nuxt.com/docs/api/configuration/nuxt-config
const siteTitle = 'Think Versa';
const siteDescription = 'Find Design Engineers To Scale Quickly.';
const ogImage = '/og-image.jpg';
const site = 'https://www.thinkversa.com';

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
        { hid: 'description', name: 'description', content: siteDescription },
        { hid: 'og:title', property: 'og:title', content: siteTitle },
        { hid: 'og:description', property: 'og:description', content: siteDescription },
        { hid: 'og:image', property: 'og:image', content: ogImage },
        { hid: 'twitter:title', name: 'twitter:title', content: siteTitle },
        { hid: 'twitter:description', name: 'twitter:description', content: siteDescription },
        { hid: 'twitter:card', name: 'twitter:card', content: ogImage },
        { hid: 'twitter:site', name: 'twitter:site', content: site },
        { hid: 'twitter:url', name: 'twitter:url', content: site },
        { hid: 'twitter:domain', name: 'twitter:domain', content: site },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@madebyporter' },
        { hid: 'twitter:image', name: 'twitter:image', content: ogImage },
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
