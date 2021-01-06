<!-- =========================================================================================
  File Name: paper_invoices.vue
  Description: Template Customizer
  Component Name: Paper Estimates

  Submit to store: form/PAPER_INVOICES_REC  retrieve from store form/paper_invoices_rec
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
      label="Order #"
      name="ordernumber"
      v-model="order_nr"
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
    <p class="mt-5">Payment Terms</p>
    <v-select
      class="w-full "
      v-model="payment_term"
      :options="payment_terms"
    ></v-select>
    <!-- <p class="mt-5">Due Date</p>
    <datepicker placeholder="Select Date" v-model="expiry_date"></datepicker> -->
    <vs-divider color="success" icon="check"></vs-divider>
    <p class="mt-5">Sales Person</p>

    <v-select
      class="w-full "
      v-model="employee"
      :options="employees"
    ></v-select>

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
  name: 'Paper trail Invoice Recurring',

  components: {
    vSelect,
    Datepicker: () => (process.client ? import('vuejs-datepicker') : null)
  },
  data: () => ({
    customer: '',
    employee: '',
    invoice_nr: '',
    payment_term: '',
    repeat_time: '',
    end_date: '',
    order_nr: '',
    start_date: '',
    project: '',
    subject: ''
  }),
  watch: {
    invoices: {
      handler(val) {
        let invoices = {
          customer: '',
          employee: '',
          invoice_nr: '',
          order_nr: '',
          start_date: '',
          repeat_time: '',
          end_date: '',
          payment_term,
          project: '',
          subject: ''
        }
        this.$store.commit('form/PAPER_INVOICES_REC', invoices)
      },
      deep: true
    }
  },
  computed: {
    payment_terms() {
      return this.$store.state.app.payment_terms
    },
    repeat_times() {
      return this.$store.state.app.repeat_times
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
