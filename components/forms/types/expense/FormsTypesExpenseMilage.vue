<!-- =========================================================================================
  File Name: paper_credit_notes.vue
  Description: Template Customizer
  Component Name: EMPLOYEE

  Submit to store: form/MILAGE  retrieve from store form/milage
  ----------------------------------------------------------------------------------------

  

========================================================================================== -->
<template>
  <div>
    <p class="mt-5">Date</p>
    <datepicker placeholder="Select Date" v-model="expense_date"></datepicker>

    <p class="mt-5">Employee</p>

    <v-select
      class="w-full "
      label="acc_name"
      v-model="exp_account"
      :options="employees"
    ></v-select>

    <vs-radio
      v-model="calculate_using"
      vs-name="calculate_using"
      vs-value="distance"
      >Distance travelled</vs-radio
    >
    <vs-radio
      v-model="calculate_using"
      vs-name="calculate_using"
      vs-value="odometer"
      >Odometer reading</vs-radio
    >

    <div v-if="calculate_using == 'distance'">
      <vs-input
        label="Distance"
        name="distance"
        type="number"
        v-model="distanceSet"
        class="w-full mt-5"
      />
    </div>
    <div v-if="calculate_using == 'odometer'">
      <vs-input
        label="Start Reading"
        name="distance"
        type="number"
        v-model="od_start"
        class="w-full mt-5"
      />

      <vs-input
        label="End Reading"
        name="distance"
        type="number"
        v-model="od_end"
        class="w-full mt-5"
      />

      <vs-input
        disabled
        label="Distance"
        name="distance"
        type="number"
        v-model="distance"
        class="w-full mt-5"
      />
    </div>
    // TODO amount needs to be calculated from selected preference
    <vs-input
      disabled
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
  name: 'Expense-Milage',
  components: {
    vSelect,
    Datepicker,
    ImageUpload
  },
  data: () => ({
    calculate_using: 'distance',
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
