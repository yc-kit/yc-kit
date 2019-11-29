import { configure, addParameters } from '@storybook/vue'
import { create } from '@storybook/theming/create'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import logo from '@/static/images/logo-yc-kit.svg'
import '@/assets/css/tailwind.css'

import '../plugins/composition-api'

addParameters({
  // Doc: https://github.com/storybookjs/storybook/tree/master/addons/viewport#use-detailed-set-of-devices
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    panelPosition: 'right',
    // More options see, Doc: https://storybook.js.org/docs/configurations/theming/
    theme: create({
      brandTitle: 'yc-kit storybook',
      brandImage: logo
    })
  }
})

configure([
  require.context('../components', true, /\.stories\.js$/)
], module)
