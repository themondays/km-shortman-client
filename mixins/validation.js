export default {
  data() {
    return {
      errors: []
    }
  },
  methods: {
    /**
     * Reset Errors
     *
     * @return void
     */
    validationReset() {
      this.errors = []
    },

    /**
     * URL Validation Rules
     *
     * @return bool
     */
    validURL(url) {
      const pattern = new RegExp(
        '^((https|http|ftp|ssh)?:\\/\\/)' +
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
          '((\\d{1,3}\\.){3}\\d{1,3}))' +
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
          '(\\?[;&a-z\\d%_.~+=-]*)?' +
          '(\\#[-a-z\\d_]*)?$',
        'i'
      )
      return !!pattern.test(url)
    },

    /**
     * Validate URL Length
     *
     * @return bool
     */
    validLength(url, minLength) {
      if (url.length >= minLength) {
        return true
      }
      return false
    }
  }
}
