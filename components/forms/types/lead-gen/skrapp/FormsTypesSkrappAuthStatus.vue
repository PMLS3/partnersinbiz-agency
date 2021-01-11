<template>
  <div>
    <vs-button @click="anyMailStatus">Status Check {{ status }}</vs-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: {},
    }
  },

  methods: {
    anyMailStatus() {
      this.$axios.setHeader(
        'X-Access-Key',
        '1974793769SKm0aljzTdHgOew8MpnW9xqN1fb3eBB7'
      )
      this.$axios.setHeader('Content-Type', 'application/json')

      this.$axios.$get('https://api.skrapp.io/api/v2/account').then(
        (response) => {
          console.log(response)
          this.status = response
        },
        (error) => {
          console.log(error)
        }
      )
    },
  },
}
</script>

<style></style>
