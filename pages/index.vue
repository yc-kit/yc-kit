<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        yc-kit
      </h1>
      <h2 class="subtitle">
        my developmental web toolkit nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.title {
  display: block;
  color: #35495e;
  font-weight: 300;
  font-size: 100px;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  color: #526488;
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
