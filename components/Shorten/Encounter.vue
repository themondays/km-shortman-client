<template>
  <div>
    Redirecting to
    <nuxt-link :to="link.url">{{ link.url }}</nuxt-link>
    in {{ elapsed }} seconds
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  data() {
    return {
      elapsed: 5
    }
  },

  mounted() {
    this.countdown()
  },

  methods: {
    countdown() {
      let elapsed = this.elapsed
      const url = this.link.url
      const counter = setInterval(function() {
        elapsed -= 1
        if (elapsed === 0) {
          document.location.href = url
          clearInterval(counter)
        }
      }, 1000)
    }
  }
}
</script>
