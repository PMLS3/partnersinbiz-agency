<!-- =========================================================================================
  File Name: paper_estimates.vue
  Description: Template Customizer
  Component Name: Paper Estimates

  Submit to store: form/PAPER_ESTIMATES  retrieve from store form/paper_estimates
  ----------------------------------------------------------------------------------------

  

========================================================================================== -->

<template>
  <div>
    <p class="mt-5">Deliver To</p>
    <vs-radio v-model="deliveryTo" vs-name="deliveryTo" vs-value="branch"
      >Branch</vs-radio
    >
    <vs-radio v-model="deliveryTo" vs-name="deliveryTo" vs-value="warehouse"
      >Warehouse</vs-radio
    >
    <vs-radio v-model="deliveryTo" vs-name="deliveryTo" vs-value="customer"
      >Customer</vs-radio
    >
    <div v-if="deliveryTo == 'branch'">
      <p class="mt-5">Branch</p>
      <v-select
        class="w-full "
        v-model="payment_term"
        :options="payment_terms"
      ></v-select>
    </div>
    <div v-if="deliveryTo == 'warehouse'">
      <p class="mt-5">Warehouse</p>
      <v-select
        class="w-full "
        v-model="payment_term"
        :options="payment_terms"
      ></v-select>
    </div>
    <div v-if="deliveryTo == 'customer'">
      <p class="mt-5">Customer</p>
      <v-select
        class="w-full "
        v-model="payment_term"
        :options="payment_terms"
      ></v-select>
    </div>
    <p class="mt-5">Vendor</p>
    <v-select class="w-full " v-model="vendor" :options="customers"></v-select>

    <!-- Client Name -->
    <vs-input
      label="Purchase Order #"
      name="contactperson"
      v-model="estimate_nr"
      class="w-full mt-5"
    />

    <!-- Client Name -->
    <vs-input
      label="Reference #"
      name="contactperson"
      v-model="ref"
      class="w-full mt-5"
    />
    <p class="mt-5">Date</p>
    <datepicker placeholder="Select Date" v-model="estimate_date"></datepicker>
    <p class="mt-5">Expected Delivery Date</p>
    <datepicker placeholder="Select Date" v-model="expiry_date"></datepicker>
    <vs-divider color="success" icon="check"></vs-divider>
    <p class="mt-5">Payment Terms</p>
    <v-select
      class="w-full "
      v-model="payment_term"
      :options="payment_terms"
    ></v-select>
    // TODO shipment preference upload
    <p class="mt-5">Shipment Preference</p>

    <v-select class="w-full " v-model="project" :options="projects"></v-select>
    <vs-divider color="success" icon="check"></vs-divider>

    <vs-input
      label="Subject Line"
      name="subject"
      v-model="subject"
      class="w-full mt-5"
    />
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Paper trail Purchase Order',

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
