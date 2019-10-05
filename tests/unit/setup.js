import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import hooks from '@u3u/vue-hooks'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.use(hooks)
Vue.use(VueCompositionApi)
