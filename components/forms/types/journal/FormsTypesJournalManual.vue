<!-- =========================================================================================
  File Name: paper_estimates.vue
  Description: Template Customizer
  Component Name: Paper Estimates

  Submit to store: form/PAPER_ESTIMATES  retrieve from store form/paper_estimates
  ----------------------------------------------------------------------------------------


========================================================================================== -->

<template>
  <div>
    <p class="mt-5">Date</p>
    <datepicker placeholder="Select Date" v-model="expense_date"></datepicker>

    <p class="mt-5">Journal#</p>
    <vs-input class="w-full" v-model="test" />

    <p class="mt-5">Reference#</p>
    <vs-input class="w-full" v-model="ref" />

    <p class="mt-5">Notes</p>

    <vs-textarea label="Add Notes" v-model="addB" />
    <p class="mt-5">Journal Type</p>

    <vs-checkbox v-model="checkBox1">Cashed based journal</vs-checkbox>
    <p class="mt-5">Currency</p>
    <v-select
      class="mb-5"
      label="item"
      v-model="tax_type"
      :options="tax_types"
    ></v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'Journal-Manual',
  components: {
    vSelect,
    Datepicker
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
    billings_methods() {
      return this.$store.state.app.billing_methods
    },
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
