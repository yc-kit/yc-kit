<template>
  <section
    data-role="yc-layout-section"
    class="flex flex-1"
    :class="[ isHasAside ? 'flex-row' : 'flex-col' ]"
    :data-has-aside="isHasAside"
  >
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { createComponent, ref } from '@vue/composition-api'

declare module 'vue/types/vue' {
  interface Vue {
    hasAside: boolean,
    isHasAside: boolean
  }
}

// @vue/component
export default createComponent({
  name: 'YcLayoutSection',

  props: {
    hasAside: {
      type: Boolean,
      default: false
    }
  },
  
  setup () {
    const isHasAside = ref(false)

    return {
      isHasAside
    }
  },

  // setup (props, context) {
  //   const isHasAside = ref(false)

  //   const doHasAside = () => {
  //     isHasAside.value = props.hasAside || (context.children.length ? context.children.map(c => c.$el.nodeName).includes('ASIDE') : false)
  //   }

  //   onMounted(() => {
  //     context.root.$nextTick(() => {
  //       doHasAside()
  //     })
  //   })

  //   return {
  //     isHasAside,
  //     doHasAside
  //   }
  // },

  mounted () {
    (this as any).$nextTick(() => {
      (this as any).doHasAside()
    })
  },

  // Todo: should use `context.children` when `children` is exposed on SetupContext
  methods: {
    doHasAside (): void {
      this.isHasAside = this.hasAside || (this.$children.length ? this.$children.map(c => c.$el.nodeName).includes('ASIDE') : false)
    }
  }
})
</script>