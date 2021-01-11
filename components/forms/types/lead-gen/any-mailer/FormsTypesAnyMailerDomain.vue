<template>
  <div>
    <vs-card v-if="showInfo">
      <small>We will also give you access to our validator.</small>
    </vs-card>
    <vs-tooltip text="Check if domain is valid" position="left">
      <vs-button icon="info" @click="showInfo = !showInfo"></vs-button>
    </vs-tooltip>

    <vs-input
      name="domain"
      icon-no-border
      icon="icon icon-search"
      icon-pack="feather"
      label-placeholder="Domain"
      v-model="domain"
      class="w-full mt-6"
    />
    <vs-button @click="submitForm" class="mt-6">Get Results</vs-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInfo: false,
      domain: '',
    }
  },
  methods: {
    submitForm() {
      let payload = {}

      if (this.domain == '') {
        payload.domain = this.domain
      }

      if (this.domain === '') {
        let err = 'Please fill in domain'
        vm.unsuccessfull(err)
      } else {
        this.$axios.setHeader('X-Api-Key', 'BbV8aERAr8AEQ68ZbUf9vzp1')

        this.$axios
          .$post(
            'https://api.anymailfinder.com/v4.0/search/person.json',
            payload
          )
          .then(
            (response) => {
              this.status = response
              this.$emit('response', response)
            },
            (error) => {
              vm.unsuccessfull(err)
              console.log(error)
            }
          )
      }
    },
    unsuccessfull(err) {
      this.$vs.notify({
        title: 'Oops',
        text: `${err}`,
        color: 'warning',
      })
    },
  },
}
</script>

<style></style>
