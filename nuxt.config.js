export default {
  mode: 'universal',
  /*
   ** Change nuxt server port
   */
  server: {
    port: 3600, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      class: ['font-roboto']
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [], // '@nuxtjs/tailwindcss' inject `~/assets/css/tailwind.css` automatically
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt/typescript
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss && https://github.com/Developmint/nuxt-purgecss
    '@nuxtjs/tailwindcss'
  ],
  purgeCSS: {
    // Doc: https://github.com/Developmint/nuxt-purgecss#options, purgeCSS only works on production mode
    // Note: it seems purgeCSS can not drop the superfluous CSS in the .vue file, but can in the .css flie
    whitelist: ['__nuxt', '__layout']
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/typekit/webfontloader and https://github.com/Developmint/nuxt-webfontloader
    [
      'nuxt-webfontloader',
      {
        // classes: false, // Disable setting classes on the HTML element
        custom: {
          families: [
            'Roboto:n3,i3,n4,i4,n5,i5,n7,i7',
            'Oswald:n3,n4,n6,n7' // all style fonts: https://www.fontsquirrel.com/fonts/oswald
          ],
          urls: [
            'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i&display=swap',
            'https://fonts.googleapis.com/css?family=Oswald:300,400,600,700&display=swap'
          ]
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  }
}
