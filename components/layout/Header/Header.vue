<template>
  <header
    data-role="yc-layout-header"
    class="h-16 flex items-center justify-center bg-blue-500"
  >
    Header
  </header>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

// @vue/component
export default createComponent({
  name: 'YcLayoutHeader'
})
</script>
