module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript', // include `eslint-plugin-jest`, `eslint-plugin-vue`
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'prettier/@typescript-eslint',
    // 'plugin:prettier/recommended' // this plugin disable all other eslint rules relating to prettier
  ],
  // add your custom rules here
  rules: {
  }
}
