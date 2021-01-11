<template>
  <div>
    <div class="flex">
      <vs-tooltip
        text="You must provide either a domain or a company_name. Providing a domain
        will yield better results than a company_name. You must provide either a full_name, or both a first_name and a
        last_name."
        position="top"
      >
        <vs-button icon="info" @click="showInfo = !showInfo"></vs-button>
      </vs-tooltip>
      <div v-if="showInfo" class="ml-2">
        <small
          >You must provide either a domain or a company_name. Providing a
          domain will yield better results than a company_name.</small
        >
        <br />
        <small
          >You must provide either a full_name, or both a first_name and a
          last_name.</small
        >
      </div>
    </div>

    <vs-input
      name="full_name"
      icon-no-border
      icon="icon icon-search"
      icon-pack="feather"
      label-placeholder="Full Name"
      v-model="full_name"
      class="w-full"
    />

    <vs-input
      name="first_name"
      icon-no-border
      icon="icon icon-search"
      icon-pack="feather"
      label-placeholder="First Name"
      v-model="first_name"
      class="w-full mt-6"
    />

    <vs-input
      name="last_name"
      icon-no-border
      icon="icon icon-search"
      icon-pack="feather"
      label-placeholder="Last Name"
      v-model="last_name"
      class="w-full mt-6"
    />

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

      if (this.full_name == '') {
        payload.full_name = this.full_name
      }
      if (this.first_name == '') {
        payload.first_name = this.first_name
      }

      if (this.last_name == '') {
        payload.last_name = this.last_name
      }

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
