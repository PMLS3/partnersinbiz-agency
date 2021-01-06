<!-- =========================================================================================
  File Name: paper_trail/sales_order.vue
  Description: Template Customizer
  Component Name: Paper Estimates

  Submit to store: form/PAPER_SALESORDER  retrieve from store form/paper_sales_order
  ----------------------------------------------------------------------------------------

  

========================================================================================== -->

<template>
  <div>
    <p class="mt-5">Customer</p>
    <v-select
      class="w-full "
      v-model="customer"
      :options="customers"
    ></v-select>

    <!-- Client Name -->
    <vs-input
      label="Sales Order #"
      name="contactperson"
      v-model="sales_order_nr"
      class="w-full mt-5"
    />

    <!-- Client Name -->
    <vs-input
      label="Reference #"
      name="contactperson"
      v-model="ref"
      class="w-full mt-5"
    />
    <p class="mt-5">Sales Order Date</p>
    <datepicker
      placeholder="Select Date"
      v-model="sales_order_date"
    ></datepicker>
    <p class="mt-5">Expected Shipment Date</p>
    <datepicker placeholder="Select Date" v-model="shipment_date"></datepicker>
    <p class="mt-5">Payment Terms</p>
    <v-select
      class="w-full "
      v-model="payment_term"
      :options="payment_terms"
    ></v-select>
    <vs-divider color="success" icon="check"></vs-divider>
    <p class="mt-5">Sales Person</p>

    <v-select
      class="w-full "
      v-model="employee"
      :options="employees"
    ></v-select>
    <p class="mt-5">Delivery Method</p>

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
  name: 'Paper trail Sales Order',

  components: {
    vSelect,
    Datepicker: () => (process.client ? import('vuejs-datepicker') : null)
  },
  data: () => ({
    customer: '',
    employee: '',
    sales_order_nr: '',
    ref: '',
    sales_order_date: '',
    shipment_date: '',
    payment_term: '',
    project: '',
    subject: ''
  }),
  watch: {
    sales_order: {
      handler(val) {
        let sales_order = {
          customer: '',
          employee: '',
          sales_order_nr: '',
          ref: '',
          sales_order_date: '',
          shipment_date: '',
          project: '',
          subject: '',
          payment_term: ''
        }
        this.$store.commit('form/PAPER_SALESORDER', sales_order)
      },
      deep: true
    }
  },
  computed: {
    customers() {
      return this.$store.state.crm.customers
    },
    employees() {
      return this.$store.state.crm.employees
    },
    projects() {
      return this.$store.state.crm.projects
    },
    payment_terms() {
      return this.$store.state.app.payment_terms
    }
  }
}
</script>
