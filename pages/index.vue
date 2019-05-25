<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        Shortman
      </h1>
      <h2 class="subtitle">
        Makes life easier
      </h2>
      <shorten-form />
    </div>
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
  margin: 0 auto;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 4rem;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 2.2rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
