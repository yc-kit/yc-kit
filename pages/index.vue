<template>
  <div class="container">
    <div>
      <h1 class="text-gray-400">
        yc-kit
      </h1>
      <div class="font-bold mt-4">
        Date: {{ date.format('YYYY-MM-DD HH:mm:ss') }}
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { createComponent } from '@vue/composition-api'
import { useDate } from '@u3u/vue-hooks'

// @vue/component
export default createComponent({
  name: 'YcHomepage',

  setup () {
    const date = useDate(Date.now())

    return { 
      date
    }
  }
})
</script>
