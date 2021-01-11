<!-- =========================================================================================
  File Name: paper_estimates.vue
  Description: Template Customizer
  Component Name: Paper Estimates

  Submit to store: form/PAPER_ESTIMATES  retrieve from store form/paper_estimates
  ----------------------------------------------------------------------------------------

  

========================================================================================== -->

<template>
  <div>
    <!-- <p class="mt-5">Vendor</p>
    <v-select class="w-full " v-model="vendor" :options="customers"></v-select>

    <vs-input
      label="Profile Name"
      name="contactperson"
      v-model="estimate_nr"
      class="w-full mt-5"
    />

    <p class="mt-5">Repeat Every</p>
    <v-select
      class="w-full "
      v-model="repeat_time"
      :options="repeat_times"
    ></v-select>
    <p class="mt-5">Start From</p>
    <datepicker placeholder="Select Date" v-model="start_date"></datepicker>

    <p class="mt-5">Ends On</p>
    <datepicker placeholder="Select Date" v-model="end_date"></datepicker>
    <vs-checkbox v-model="checkBox1" class="mt-5">Never Expires</vs-checkbox>
    <p class="mt-5">Payment Terms</p>
    <v-select
      class="w-full "
      v-model="payment_term"
      :options="payment_terms"
    ></v-select> -->
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Paper trail Recurring Bills',

  components: {
    vSelect,
    Datepicker: () => (process.client ? import('vuejs-datepicker') : null),
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
    subject: '',
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
          subject: '',
        }
        this.$store.commit('form/PAPER_ESTIMATES', estimates)
      },
      deep: true,
    },
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
    },
  },
}
</script>
