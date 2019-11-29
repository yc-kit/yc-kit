// Doc: https://storybook.js.org/docs/configurations/custom-webpack-config/#webpack-customisation-modes
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

// yarn sb --debug-webpack ==> log the entire config
module.exports = async ({ config }) => {
  // extend custom alias
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../'),
    'yc-layout': path.resolve(__dirname, '../components/layout/'),
    'yc-ui': path.resolve(__dirname, '../components/ui/')
  }

  // Doc: https://storybook.js.org/docs/configurations/typescript-config/#setting-up-typescript-to-work-with-storybook-1
  config.plugins.push(new ForkTsCheckerWebpackPlugin({ eslint: true, vue: true })) // Doc: https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#vue
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader')
      },
      {
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: true, // Doc: https://github.com/TypeStrong/ts-loader#transpileonly-boolean-defaultfalse
          appendTsSuffixTo: [/\.vue$/] // Doc: https://github.com/TypeStrong/ts-loader#appendtssuffixto-regexp-default
        }
      }
    ]
  })

  // Doc: https://tailwindcss.com/docs/installation#webpack
  config.module.rules.push({
    test: /\.tailwind.css$/, // aviod overwrite the default rules for `test: /\.css$/` 
    use: [
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            // Doc: https://tailwindcss.com/docs/installation#2-add-tailwind-to-your-css && https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports
            require('postcss-import'), 
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      }
    ]
  })

  // resolve scss for vue SFC and any scss files, Doc: https://storybook.js.org/docs/configurations/custom-webpack-config/
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  })

  return config
}
