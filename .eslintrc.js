module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:vue/recommended',
    'plugin:jest/recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier',
    'jest'
  ],
  // add your custom rules here
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error'
  }
}
