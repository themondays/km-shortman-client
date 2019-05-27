<template>
  <section class="container">
    <shorten-form />
  </section>
</template>

<script>
import ShortenForm from '~/components/Shorten/ShortenForm.vue'

export default {
  components: {
    ShortenForm
  }
}
</script>

<style>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 30px;
  justify-content: center;
  text-align: center;
}
</style>
