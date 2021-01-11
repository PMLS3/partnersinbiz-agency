<template>
  <div>
    <vs-card v-if="showInfo">
      <small>A domain or a company_name is required</small>
    </vs-card>
    <vs-tooltip
      text="You must provide either a domain or a company_name. Providing a domain
        will yield better results than a company_name. You must provide either a full_name, or both a first_name and a
        last_name."
      position="left"
    >
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

    <vs-input
      name="company_name"
      icon-no-border
      icon="icon icon-search"
      icon-pack="feather"
      label-placeholder="Company Name"
      v-model="company_name"
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
      full_name: '',
      first_name: '',
      last_name: '',
      domain: '',
      company_name: '',
    }
  },
  methods: {
    submitForm() {
      let payload = {}

      if (this.domain == '') {
        payload.domain = this.domain
      }

      if (this.company_name != '') {
        payload.company_name = this.company_name
      }

      if (this.domain === '' && this.company_name === '') {
        let err = 'Please fill in either domain or company name'
        vm.unsuccessfull(err)
      } else {
        this.$axios.setHeader('X-Api-Key', 'BbV8aERAr8AEQ68ZbUf9vzp1')

        this.$axios
          .$post(
            'https://api.anymailfinder.com/v4.1/search/company.json',
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
