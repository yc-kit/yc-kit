module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript', // include `eslint-config-standard`, `eslint-plugin-jest`, `eslint-plugin-vue`, `eslint-plugin-unicorn`, `@typescript-eslint/eslint-plugin`
    'plugin:@typescript-eslint/recommended',
    // 'prettier', // turn `off` some `eslint` rules by `prettier`
    // 'prettier/@typescript-eslint', // turn `off` some `@typescript-eslint/recommended` rules by `prettier`
    'plugin:nuxt/recommended', // this use `parser: 'vue-eslint-parser'`, should be list after 'plugin:@typescript-eslint/recommended' (use parser: '@typescript-eslint/parser')
    // 'plugin:prettier/recommended' // this plugin only enable prettier recommended rules and enforce disable all other `eslint` rules
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off', // recommended by vue, but `off` for practical usage, if you are certain the content passed to v-html is sanitized HTML.
    // below are recommended by @typescript-eslint, but `off` for some reasons, had better have if possible
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  }
}
