<template>
  <div class="ShortenInput">
    <form @submit.prevent="submit">
      <fieldset>
        <label>
          Enter URL to shorten
        </label>
        <input
          v-model="form.link.url"
          type="text"
          placeholder="Enter URL and hit the Enter"
        />
        <pre v-if="short_url > 0">
          short_url
        </pre>
        <p>
          <small>
            <strong>Supported protocols:</strong> http, https, ftp, ssh
          </small>
        </p>
      </fieldset>
      <button type="submit" class="button--green">
        Shorten
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      short_url: false,
      form: {
        link: {
          url: ''
        }
      }
    }
  },
  methods: {
    onFail(error) {
      alert(error)
    },
    onSuccess(response) {
      //wip
    },
    submit() {
      return this.$axios
        .$post(`links`, this.form)
        .then(this.onSuccess)
        .catch(this.onFail)
    }
  }
}
</script>
<style scoped>
.ShortenInput fieldset {
  padding: 30px;
  border: none;
  text-align: left;
}
.ShortenInput label {
  font-size: 1.6em;
  font-weight: 600;
  display: block;
}
.ShortenInput input[type='text'] {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;

  width: 100%;
  display: block;
  margin: 15px 0;
}
.ShortenInput small {
  font-size: 0.5em;
}
</style>
