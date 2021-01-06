<!-- =========================================================================================
  File Name: paper_credit_notes.vue
  Description: Template Customizer
  Component Name: Paper CREDIT_NOTES

  Submit to store: form/PAPER_CREDIT_NOTES  retrieve from store form/paper_credit_notes
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
      label="Credit Note #"
      name="contactperson"
      v-model="credit_note_nr"
      class="w-full mt-5"
    />

    <!-- Client Name -->
    <vs-input
      label="Reference #"
      name="contactperson"
      v-model="ref"
      class="w-full mt-5"
    />
    <p class="mt-5">Credit Note Date</p>
    <datepicker
      placeholder="Select Date"
      v-model="credit_note_date"
    ></datepicker>

    <vs-divider color="success" icon="check"></vs-divider>
    <p class="mt-5">Sales Person</p>

    <v-select
      class="w-full "
      v-model="employee"
      :options="employees"
    ></v-select>
    <p class="mt-5">Project Name</p>

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
  name: 'Papertrail-Credit Note',

  components: {
    vSelect,
    Datepicker: () => (process.client ? import('vuejs-datepicker') : null)
  },
  data: () => ({
    customer: '',
    employee: '',
    credit_note_nr: '',
    ref: '',
    credit_note_date: '',
    expiry_date: '',
    project: '',
    subject: ''
  }),
  watch: {
    credit_notes: {
      handler(val) {
        let credit_notes = {
          customer: '',
          employee: '',
          credit_note_nr: '',
          ref: '',
          credit_note_date: '',
          expiry_date: '',
          project: '',
          subject: ''
        }
        this.$store.commit('form/PAPER_CREDIT_NOTES', credit_notes)
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
    }
  }
}
</script>
