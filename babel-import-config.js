module.exports = {
  plugins: [
    // Doc: https://github.com/ant-design/babel-plugin-import
    [
      'import',
      {
        libraryName: 'yc-layout',
        libraryDirectory: '',
        style: false,
        // cache issue
        customName: (name) => {
          const transformed = name
            .split('-')
            .slice(2)
            .map(c => c.charAt(0).toUpperCase() + c.slice(1))
            .join('')
          return `@/components/layout/${transformed}`
        }
      },
      'yc-layout-import'
    ],
    [
      'import',
      {
        libraryName: 'yc-ui',
        libraryDirectory: '',
        style: false,
        // cache issue
        customName: (name) => {
          const transformed = name
            .split('-')
            .slice(1)
            .map(c => c.charAt(0).toUpperCase() + c.slice(1))
            .join('')
          return `@/components/ui/${transformed}`
        }
      },
      'yc-ui-import'
    ]
  ]
}
