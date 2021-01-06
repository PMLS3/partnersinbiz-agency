<!-- =========================================================================================
  File Name: paper_estimates.vue
  Description: Template Customizer
  Component Name: Paper Estimates

  Submit to store: form/PAPER_ESTIMATES  retrieve from store form/paper_estimates
  ----------------------------------------------------------------------------------------

  

========================================================================================== -->

<template>
  <div>
    <p class="mt-5">Vendor</p>
    <v-select class="w-full " v-model="vendor" :options="customers"></v-select>

    <!-- Client Name -->
    <vs-input
      label="Credit Note #"
      name="contactperson"
      v-model="estimate_nr"
      class="w-full mt-5"
    />

    <!-- Client Name -->
    <vs-input
      label="Order #"
      name="contactperson"
      v-model="ref"
      class="w-full mt-5"
    />
    <p class="mt-5">Vendor Credit Date</p>
    <datepicker placeholder="Select Date" v-model="estimate_date"></datepicker>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Paper trail Vendor Credits',

  components: {
    vSelect,
    Datepicker: () => (process.client ? import('vuejs-datepicker') : null)
  },
  data: () => ({
    customer: '',
    employee: '',
    estimate_nr: '',
    ref: '',
    estimate_date: '',
    expiry_date: '',
    project: '',
    deliveryTo: 'branch',
    subject: ''
  }),
  watch: {
    estimates: {
      handler(val) {
        let estimates = {
          customer: '',
          employee: '',
          estimate_nr: '',
          ref: '',
          estimate_date: '',
          expiry_date: '',
          project: '',
          subject: ''
        }
        this.$store.commit('form/PAPER_ESTIMATES', estimates)
      },
      deep: true
    }
  },
  computed: {
    payment_terms() {
      return this.$store.state.app.payment_terms
    },
    customers() {
      return this.$store.state.crm.customers
    },
    employees() {
      return this.$store.state.crm.employees
    },
    projects() {
      return this.$store.state.crm.projects
    }
  }
}
</script>
