<!-- =========================================================================================
  File Name: paper_estimates.vue
  Description: Template Customizer
  Component Name: Paper Estimates

  Submit to store: form/PAPER_ESTIMATES  retrieve from store form/paper_estimates
  ----------------------------------------------------------------------------------------

  

========================================================================================== -->

<template>
  <div>
    <vs-input
      label="Project Name"
      name="contactperson"
      v-model="estimate_nr"
      class="w-full mt-5"
    />
    <p class="mt-5">Description</p>

    <vs-textarea label="Description" v-model="textarea" />
    <p class="mt-5">Cursomter</p>
    <v-select class="w-full " v-model="vendor" :options="customers"></v-select>

    <p class="mt-5">Billing Method</p>
    <v-select
      class="w-full "
      v-model="vendor"
      :options="billings_methods"
    ></v-select>
    <div
      v-if="
        billings_methods == 'Fixed Cost for Project' ||
          billing_methods == 'Based on Project Hours'
      "
    >
      <vs-input
        label="Total Cost"
        name="contactperson"
        v-model="estimate_nr"
        class="w-full mt-5"
      />
    </div>
    <vs-checkbox v-model="checkBox1" class="mt-5">Billable</vs-checkbox>
    <vs-input
      label="Cost Budget"
      name="contactperson"
      v-model="ref"
      class="w-full mt-5"
    />

    <vs-input
      label="Revenue Budget"
      name="contactperson"
      v-model="ref"
      class="w-full mt-5"
    />
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Projects',

  components: {
    vSelect
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
