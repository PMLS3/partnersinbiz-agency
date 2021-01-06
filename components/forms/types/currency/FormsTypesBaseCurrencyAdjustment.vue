<!-- =========================================================================================
  File Name: paper_credit_notes.vue
  Description: Template Customizer
  Component Name: EMPLOYEE

  Submit to store: form/MILAGE  retrieve from store form/milage
  ----------------------------------------------------------------------------------------

  

========================================================================================== -->
<template>
  <div>
    <p class="mt-5">Currency</p>

    <v-select
      class="w-full"
      label="acc_name"
      v-model="exp_account"
      :options="employees"
    ></v-select>

    <p class="mt-5">Date</p>
    <client-only>
      <datepicker placeholder="Select Date" v-model="expense_date"></datepicker>
    </client-only>
    <vs-input
      disabled
      label="Exchange Rate"
      name="amount"
      type="number"
      v-model="amount"
      class="w-full mt-5"
    />

    <vs-input
      label="Reference #"
      name="subject"
      v-model="ref"
      class="w-full mt-5"
    />
    <vs-textarea class="mt-5" label="Notes" v-model="textareas" />
  </div>
</template>

<script>
export default {
  name: 'Base-Currency',
  components: {
    Datepicker: () => (process.client ? import('vuejs-datepicker') : null),
    vSelect: () => (process.client ? import('vue-select') : null)
  },
  data: () => ({
    calculate_using: 'distance',
    textareas: '',
    ref: '',
    expense_date: '',
    exp_account: '',
    billable: false,
    amount: '',
    od_start: 0,
    od_end: 0,
    distanceSet: ''
  }),
  watch: {
    expenses: {
      handler(val) {
        let expenses = {
          expense_date: this.expense_date,
          exp_account: this.exp_account,
          amount: this.amount
        }
        this.$store.commit('form/EXPENSES', expenses)
      },
      deep: true
    }
  },
  computed: {
    distance() {
      if (this.calculate_using == 'distance') {
        return this.distanceSet
      } else {
        return this.od_end - this.od_start
      }
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
    accounts() {
      return this.$store.state.crm.accounts
    },
    tax() {
      return this.$store.state.crm.tax
    }
  }
}
</script>
