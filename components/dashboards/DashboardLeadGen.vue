<template>
  <div>
    <h1>hello</h1>
    <vs-button @click="anyMailPerson" class="mt-24">hello</vs-button>
    <p>{{ status }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'status',
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
    anyMailCompanyAll() {
      this.$axios.setHeader('X-Api-Key', 'BbV8aERAr8AEQ68ZbUf9vzp1')

      this.$axios
        .$post('https://api.anymailfinder.com/v4.0/search/company.json', {
          config: this.config,
          message: message,
        })
        .then(
          (response) => {
            vm.successUpload('TWEETED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    anyMailCompany() {
      this.$axios.setHeader('X-Api-Key', 'BbV8aERAr8AEQ68ZbUf9vzp1')

      this.$axios
        .$post('https://api.anymailfinder.com/v4.0/search/company.json', {
          config: this.config,
          message: message,
        })
        .then(
          (response) => {
            vm.successUpload('TWEETED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    anyMailPerson() {
      this.$axios.setHeader('X-Api-Key', 'BbV8aERAr8AEQ68ZbUf9vzp1')

      this.$axios
        .$post('https://api.anymailfinder.com/v4.0/search/person.json', {
          full_name: 'John Smith',
          company_name: 'Acme Inc',
        })
        .then(
          (response) => {
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
