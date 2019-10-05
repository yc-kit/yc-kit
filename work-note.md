# https://github.com/yinchen-shop/yc-kit

# Top: keep upgrade the dependent packages

# Todo:
  --tsconfig.test.json(allowSyntheticDefaultImports, `https://github.com/ant-design/ant-design/blob/master/tsconfig.test.json`)
  --figure out `@babel/preset-typescript`
  --portal-vue
  --custom scroll bar plugin
  --github => semantic release
  --svg icon => vue-awesome plugin
  --vue-global-events
  --env => @nuxtjs/dotenv, nuxt-env
  --css magic for error image
  --storybook
  --ramda && lodash
  --date-fns()
  --skeleton => vue-content-loading
  --vue-wait
  --vue-line-clamp
  --ripple.js
  --media query => vue-mq (use max-width)
  --vue-progressbar
  --vue-testing-library
  --@nuxtjs/recaptcha
  --@nuxtjs/universal-storage
  --@nuxtjs/toast (is similar to the element UI component `Message`)
  --@nuxtjs/google-analytics
  --@nuxtjs/google-tag-manager
  --@nuxtjs/sitemap(sitemap.xml)
  --robots.txt
  --@nuxtjs/auth
  --nuxt-i18n
  --@nuxtjs/browserconfig
  --@nuxtjs/pwa
  --@nuxtjs/component-cache (Page-level Caching)
  --@nuxtjs/redirect-module(Redirecting URLs)
  --@nuxtjs/webpackmonitor (watch webpack staties)
  --@nuxtjs/sentry (error logging) `&&` nuxt-logrocket
  --@nuxtjs/google-adsense
  --@nuxtjs/yandex-metrika (Web Analytics)
  --@nuxtjs/feed
  --@nuxtjs/separate-env
  --nuxt-google-optimize
  --@nuxtjs/device
  --nuxt-leaflet

# Doing:
  --babel-plugin-import
  
# Done:
  --add babel-plugin-import, (`export { default, default as xxx } from 'yyy'`, doc: https://github.com/tc39/proposal-export-default-from#common-concerns), Note: `import { xxx } from 'yc-layout'` use the `babel-plugin-import`, but `import xxx form 'yc-layout/x'` just use the `path.resolve.alias['yc-layout']`
   
  --add @u3u/vue-hooks: add `@u3u/vue-hooks`

  --add @vue/composition-api: add `@vue/composition-api`(This plugin requires `TypeScript` version >3.5.1), add `composition-api.ts` to plugin folder.

  --add nuxt-webfontloader: add `nuxt-webfontloader`, add config in `nuxt.config.js`, add font-family in `tailwind.config.js`

  --update eslint support tslint: add `@nuxt/typescript-build`, `@nuxtjs/eslint-config-typescript`(extend @nuxtjs/eslint-config-typescript, `Note`: this plugin include `@nuxtjs/eslint-config`, `eslint-config-prettier`(include `plugin:@typescript-eslint/recommended`, `prettier/@typescript-eslint`)) Note: for now `eslint-plugin-vue` can not linting the .vue files whose use composition api `createComponent()` default, but you can use special comment `// @vue/component` to marks object in the next line as a Vue component in any file.

  --change nuxt server port to `server: { port: 3600, host: '0.0.0.0' }`

  --add `stylelint(needed by @nuxtjs/stylelint-module)`, `@nuxtjs/stylelint-module`(files(Default): [`assets/**/*.{s?(a|c)ss,less,stylus}`, `{components,layouts,pages}/**/*.vue`]), add rules config:(`stylelint-config-standard`(include stylelint-config-recommended), `stylelint-config-prettier`(shoud be listed last), `stylelint-order` `stylelint-config-rational-order`, `stylelint-scss`, `stylelint-config-recommended-scss`(include stylelint-config-recommended), `sass-loader`, `node-sass`), optional: add `prettier-stylelint --write`(format with prettier followed by `stylelint --fix`), using `prettier-stylelint --write` instead of `stylelint --fix` is that this plugin can ignore those don't need to format files: `https://github.com/hugomrdias/prettier-stylelint/blob/master/src/cli.js`, but it can not accept `.vue` files. So, had better use the `stylelint --fix` and define the linting files. Note: stylelint cli use the `globby`(*,?,**,{},!, not include |)

  --add @commitlint/cli and @commitlint/config-conventional, add rules setting in `package.json`

  --(preset eslint setting): add `eslint` (needed by @nuxtjs/eslint-module), `@nuxtjs/eslint-module`, add rules config:(`@nuxtjs/eslint-config`(extend: @nuxtjs, and include `eslint-plugin-vue`(extend plugin:vue/recommended), `eslint-plugin-jest`(don't extend plugin:jest/recommended), and so on, see: `https://github.com/nuxt/eslint-config/blob/master/packages/eslint-config/index.js`, and dependencies: `https://github.com/nuxt/eslint-config/blob/master/packages/eslint-config/package.json`), `eslint-config-prettier`(extend much, see dependencies: `https://github.com/prettier/eslint-config-prettier/blob/master/package.json`), `eslint-plugin-prettier`(extend plugin:prettier/recommended, this will extends the `prettier`), `eslint-plugin-nuxt`(extend plugin:nuxt/recommended))

  --init an nuxt project override this directory. yarn create nuxt-app 1.1-yc-kit --> preset: `@nuxtjs/tailwindcss, @nuxtjs/axios, eslint, prettier, lint-staged, jest, jsconfig.json` --> commit: init nuxt project --> `yarn dev` --> `yarn lint --fix`: fix lint error (Delete `␍` prettier/prettier)

  --create a repository name `yc-kit` and clone this repository into local directory `1.1-yc-kit`


# Third party plugins
  --nuxt.js
  --@nuxtjs/tailwindcss (wrap with nuxt-purgecss)
  --@nuxtjs/axios
  --eslint
  --prettier
  --lint-staged
  --jest
  --stylelint

# Something consider
  --using tailwind is mean that you don't need to write much custom css, so `stylelint` and `node-sass` is needless
  --manage zIndex: modal > drawer > fixed header > popover = dropdown = tooltip
  --thinking about `jest config` options: globalSetup(`https://jestjs.io/docs/en/configuration#globalsetup-string`),

# Archive
  --@nuxtjs/amp(not common use)
  --@nuxtjs/vendor (is similar to the nuxt build option: `transpile`)
  --@nuxtjs/localtunnel (only work on `http://localhost:3000/`, when change server `port/host` in nuxt.config.js will not work, maybe use another is better choice: `https://serveo.net/`)
  