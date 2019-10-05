<template>
  <main
    data-role="yc-layout-main"
    class="flex-1 flex items-center justify-center"
  >
    <slot />
  </main>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

// @vue/component
export default createComponent({
  name: 'YcLayoutMain'
})
</script>
