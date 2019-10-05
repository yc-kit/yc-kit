<template>
  <YcLayoutSection class="min-h-screen">
    <YcLayoutHeader />

    <YcLayoutSection>
      <YcLayoutAside />
      <YcLayoutMain>
        <nuxt />
      </YcLayoutMain>
    </YcLayoutSection>

    <YcLayoutFooter />
  </YcLayoutSection>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import { YcLayoutSection, YcLayoutHeader, YcLayoutMain, YcLayoutAside, YcLayoutFooter } from 'yc-layout'

// @vue/component
export default createComponent({
  name: 'DefaultLayout',

  components: {
    YcLayoutSection,
    YcLayoutHeader,
    YcLayoutMain,
    YcLayoutAside,
    YcLayoutFooter
  }
})
</script>