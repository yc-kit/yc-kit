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

  <!-- <YcLayoutSection class="min-h-screen">
    <YcLayoutHeader />

    <YcLayoutSection>
      <YcLayoutMain>
        <nuxt />
      </YcLayoutMain>
      <YcLayoutAside />
    </YcLayoutSection>

    <YcLayoutFooter />
  </YcLayoutSection> -->

  <!-- <YcLayoutSection class="min-h-screen">
    <YcLayoutAside />

    <YcLayoutSection>
      <YcLayoutHeader />
      <YcLayoutMain>
        <nuxt />
      </YcLayoutMain>
      <YcLayoutFooter />
    </YcLayoutSection>
  </YcLayoutSection> -->

  <!-- <YcLayoutSection class="min-h-screen">
    <YcLayoutHeader />

    <YcLayoutSection>
      <YcLayoutAside />

      <YcLayoutSection>
        <YcLayoutMain>
          <nuxt />
        </YcLayoutMain>
        <YcLayoutFooter />
      </YcLayoutSection>
    </YcLayoutSection>
  </YcLayoutSection> -->

  <!-- <YcLayoutSection class="min-h-screen">
    <YcLayoutSection>
      <YcLayoutAside />

      <YcLayoutSection>
        <YcLayoutHeader />
        <YcLayoutMain>
          <nuxt />
        </YcLayoutMain>
      </YcLayoutSection>
    </YcLayoutSection>

    <YcLayoutFooter />
  </YcLayoutSection> -->
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
