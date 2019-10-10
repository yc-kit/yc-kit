<template>
  <div class="text-center">
    <h1 class="text-gray-400">
      <YcIcon name="heart" />
      yc-kit
    </h1>
    <div class="font-bold mt-4">
      Date: {{ date.format('YYYY-MM-DD HH:mm:ss') }}
    </div>
  </div>
</template>

<script lang='ts'>
import { createComponent } from '@vue/composition-api'
import { useDate } from '@u3u/vue-hooks'
import { YcIcon } from 'yc-ui'

// @vue/component
export default createComponent({
  name: 'YcHomepage',

  components: {
    YcIcon
  },

  setup () {
    const date = useDate(Date.now())

    return {
      date
    }
  }
})
</script>
