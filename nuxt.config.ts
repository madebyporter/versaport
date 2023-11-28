/** Add meta title, description, ogimage, site url, Twitter account and Google Analytics GTag here */
const siteTitle = 'Versaport';
const siteDescription = 'Showcase your best work & products quickly to the world.';
const ogImage = '/img/og-image.jpg'; /** Place image in public/img folder */
const site = 'https://www.thinkversa.com';
const twitterCreator = '@madebyporter';
const gTag = 'G-NWH4NW627H'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicons/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5' },
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
        { hid: 'twitter:creator', name: 'twitter:creator', content: twitterCreator },
        { hid: 'twitter:image', name: 'twitter:image', content: ogImage },
      ],
    },
  },
  css: ['~/assets/css/output.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      gtagId: gTag
    }
  }
})
