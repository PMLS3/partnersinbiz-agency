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
      this.$axios.setHeader('X-Api-Key', 'BbV8aERAr8AEQ68ZbUf9vzp1')

      this.$axios.$get('https://api.anymailfinder.com/v4.1/health.json').then(
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
