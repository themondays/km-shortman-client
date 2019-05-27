<template>
  <div class="ShortenInput">
    <form ref="form" @submit.prevent="validate">
      <fieldset>
        <label>
          Enter URL to shorten
        </label>
        <input
          v-model="form.link.url"
          type="text"
          placeholder="Enter URL and hit the Enter"
        />
        <ul v-if="errors.length > 0" class="errors">
          <li v-for="(error, eidx) in errors" :key="eidx" class="error">
            {{ error }}
          </li>
        </ul>
        <div v-if="short_url" class="ShortLink" @click="copyUrl">
          <p>
            Endpoint #1:<br />
            {{ short_url }}
          </p>
          <no-ssr>
            <hr />
            <p v-if="getLocalEndpoint()">
              Endpoint #2:<br />
              {{ getLocalEndpoint() }} (via API)
            </p>
          </no-ssr>
        </div>

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
import validation from '~/mixins/validation.js'
import form from '~/mixins/form.js'
export default {
  mixins: [validation, form],
  data() {
    return {
      short_url: false,
      hashid: '',
      copied: false,
      form: {
        link: {
          url: ''
        }
      }
    }
  },
  methods: {
    validate() {
      this.validationReset()
      if (!this.validURL(this.form.link.url)) {
        this.errors.push('Incorrect URL format')
      }
      if (!this.validLength(this.form.link.url, 20)) {
        this.errors.push(
          "Common, URL is short enough, there's no sense to shorten it"
        )
      }
      if (this.errors.length === 0) {
        this.submit()
      }
    },
    onFail(error) {
      if (error) {
        this.error.push(error)
      } else {
        this.error.push('Something wrong, check API availability.')
      }
    },
    onSuccess(response) {
      this.copied = false
      this.form.link.url = ''
      this.short_url = response.data.short_url
      this.hashid = response.data.hashid
    },
    submit() {
      return this.$axios
        .$post(`links`, this.form)
        .then(this.onSuccess)
        .catch(this.onFail)
    },

    getLocalEndpoint() {
      if (this.hashid.length > 0) {
        return `${document.location.href}${this.hashid}`
      }
      return false
    },

    copyUrl(event) {
      // Place copy-to-clipboard code here
    }
  }
}
</script>

<style scoped>
hr {
  margin: 15px 0;
}
.ShortenInput {
  margin: auto;
  max-width: 440px;
  padding: 30px;
  border: 1px #ddd solid;
}
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
  display: block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  width: 100%;
  margin: 15px 0;
}
.ShortenInput small {
  font-size: 0.5em;
}
.ShortLink {
  padding: 30px;
  background: #f5f5fa;
  font-size: 0.75em;
}
.ShortCopied {
  padding: 30px;
  background: #3b8070;
  color: #3b8070;
}
.errors {
  font-size: 0.75em;
  color: #a02222;
}
</style>
