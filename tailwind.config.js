/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    // If don't want to override the default config, need to list config inside `extend {}`
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // for paragraph, button
        oswald: ['Oswald', 'sans-serif'] // for heading
      },
      container: {
        center: true
      }
    }
  },
  variants: {
    // extend `important` for all default variants,
    accessibility: ['responsive', 'focus', 'important'],
    alignContent: ['responsive', 'important'],
    alignItems: ['responsive', 'important'],
    alignSelf: ['responsive', 'important'],
    appearance: ['responsive', 'important'],
    backgroundAttachment: ['responsive', 'important'],
    backgroundColor: ['responsive', 'hover', 'focus', 'important'],
    backgroundPosition: ['responsive', 'important'],
    backgroundRepeat: ['responsive', 'important'],
    backgroundSize: ['responsive', 'important'],
    borderCollapse: ['responsive', 'important'],
    borderColor: ['responsive', 'hover', 'focus', 'important'],
    borderRadius: ['responsive', 'important'],
    borderStyle: ['responsive', 'important'],
    borderWidth: ['responsive', 'important'],
    boxShadow: ['responsive', 'hover', 'focus', 'important'],
    cursor: ['responsive', 'important'],
    display: ['responsive', 'important'],
    fill: ['responsive', 'important'],
    flex: ['responsive', 'important'],
    flexDirection: ['responsive', 'important'],
    flexGrow: ['responsive', 'important'],
    flexShrink: ['responsive', 'important'],
    flexWrap: ['responsive', 'important'],
    float: ['responsive', 'important'],
    fontFamily: ['responsive', 'important'],
    fontSize: ['responsive', 'important'],
    fontSmoothing: ['responsive', 'important'],
    fontStyle: ['responsive', 'important'],
    fontWeight: ['responsive', 'hover', 'focus', 'important'],
    height: ['responsive', 'important'],
    inset: ['responsive', 'important'],
    justifyContent: ['responsive', 'important'],
    letterSpacing: ['responsive', 'important'],
    lineHeight: ['responsive', 'important'],
    listStylePosition: ['responsive', 'important'],
    listStyleType: ['responsive', 'important'],
    margin: ['responsive', 'important'],
    maxHeight: ['responsive', 'important'],
    maxWidth: ['responsive', 'important'],
    minHeight: ['responsive', 'important'],
    minWidth: ['responsive', 'important'],
    objectFit: ['responsive', 'important'],
    objectPosition: ['responsive', 'important'],
    opacity: ['responsive', 'hover', 'focus', 'important'],
    order: ['responsive', 'important'],
    outline: ['responsive', 'focus', 'important'],
    overflow: ['responsive', 'important'],
    padding: ['responsive', 'important'],
    placeholderColor: ['responsive', 'focus', 'important'],
    pointerEvents: ['responsive', 'important'],
    position: ['responsive', 'important'],
    resize: ['responsive', 'important'],
    stroke: ['responsive', 'important'],
    tableLayout: ['responsive', 'important'],
    textAlign: ['responsive', 'important'],
    textColor: ['responsive', 'hover', 'focus', 'important'],
    textDecoration: ['responsive', 'hover', 'focus', 'important'],
    textTransform: ['responsive', 'important'],
    userSelect: ['responsive', 'important'],
    verticalAlign: ['responsive', 'important'],
    visibility: ['responsive', 'important'],
    whitespace: ['responsive', 'important'],
    width: ['responsive', 'important'],
    wordBreak: ['responsive', 'important'],
    zIndex: ['responsive', 'important'],
  },
  plugins: [
    // Doc: https://tailwindcss.com/docs/plugins/#complex-variants && https://github.com/chasegiunta/tailwindcss-important
    // Note: nuxt-purgecss can drop superfluous css even with `!bg-red-100 or !xxx`
    function ({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }
  ]
}
