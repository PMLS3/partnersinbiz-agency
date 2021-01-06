<!-- =========================================================================================
  File Name: paper_credit_notes.vue
  Description: Template Customizer
  Component Name: Paper EXPENSES

  Submit to store: form/EXPENSES  retrieve from store form/expenses
  ----------------------------------------------------------------------------------------

  

========================================================================================== -->

<template>
  <div>
    <vs-input
      label="Profile Name"
      name="amount"
      type="number"
      v-model="amount"
      class="w-full mt-5"
    />

    <p class="mt-5">Employee</p>

    <v-select
      class="w-full "
      label="acc_name"
      v-model="employee"
      :options="employees"
    ></v-select>

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

    <p class="mt-5">Date</p>
    <datepicker placeholder="Select Date" v-model="expense_date"></datepicker>

    <p class="mt-5">Expense Account</p>

    <v-select
      class="w-full "
      label="acc_name"
      v-model="exp_account"
      :options="accounts"
    ></v-select>

    <vs-input
      label="Amount"
      name="amount"
      type="number"
      v-model="amount"
      class="w-full mt-5"
    />

    <p class="mt-5">Tax</p>

    <v-select
      class="w-full "
      label="acc_name"
      v-model="exp_account"
      :options="accounts"
    ></v-select>

    <p class="mt-5">Paid Account</p>

    <v-select
      class="w-full "
      label="acc_name"
      v-model="paid_account"
      :options="accounts"
    ></v-select>
    <vs-divider icon="linear_scale"></vs-divider>

    <p class="mt-5">Vendor</p>

    <v-select
      class="w-full "
      label="acc_name"
      v-model="exp_account"
      :options="vendors"
    ></v-select>

    <vs-input
      label="Reference #"
      name="subject"
      v-model="ref"
      class="w-full mt-5"
    />
    <vs-textarea class="mt-5" label="Notes" v-model="textarea" />
    <vs-divider></vs-divider>
    <p class="mt-5">Customer</p>
    <v-select
      class="w-full "
      v-model="customer"
      :options="customers"
    ></v-select>

    <div v-if="customer">
      <vs-checkbox v-model="billable">Billable</vs-checkbox>
      <p class="mt-5">Project Name</p>

      <v-select
        class="w-full "
        v-model="project"
        :options="projects"
      ></v-select>
    </div>

    <vs-divider></vs-divider>

    <ImageUpload label="" />
  </div>
</template>

<script>
import vSelect from 'vue-select'
import Datepicker from 'vuejs-datepicker'
import ImageUpload from '@/components/forms/form-generator/components/imageUpload.vue'

export default {
  name: 'Expense-Recurring',
  components: {
    vSelect,
    Datepicker,
    ImageUpload
  },
  data: () => ({
    expense_date: '',
    exp_account: '',
    billable: false,
    amount: ''
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
