<template>
  <section class="Encounter">
    <div v-if="!link">
      Loading, please wait...
    </div>
    <div v-if="link && link.data === null">
      Could not find link
    </div>

    <no-ssr>
      <encounter v-if="link.data && link.data.url" :link="link.data" />
    </no-ssr>
  </section>
</template>

<script>
import Encounter from '~/components/Shorten/Encounter'

export default {
  layout: 'redirect',
  components: {
    Encounter
  },
  async asyncData({ app, params }) {
    const response = await app.$axios.$get(`links/${params.hashid}`)

    return {
      link: response
    }
  }
}
</script>
