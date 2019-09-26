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
  css: [],
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
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  purgeCSS: {
    // The '@nuxtjs/tailwindcss' already wrap with the 'nuxt-purgecss',
    // and auto inject `tailwind.css` to the global CSS setting 'css' section and used the 'postcss' mode

    // your settings here, use static will merge default value, use function will not include default value
    // To enabled purgecss: default just only activates in production mode
    // Doc: https://github.com/Developmint/nuxt-purgecss#options

    // Note: it seems purgeCSS can not drop the superfluous CSS in the .vue file, but can in the .css flie
    whitelist: ['__nuxt', '__layout']
  },
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
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  }
}
