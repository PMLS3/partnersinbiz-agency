<!-- =========================================================================================
  File Name: paper_estimates.vue
  Description: Template Customizer
  Component Name: Paper Estimates

  Submit to store: form/PAPER_ESTIMATES  retrieve from store form/paper_estimates
  ----------------------------------------------------------------------------------------

  TODO customer as individual, subtotal spacing, date-picker as global component

========================================================================================== -->

<template>
  <div>
    <p class="mt-5">Customer</p>
    <v-select
      :options="customers"
      label="company"
      v-model="estimates.customer"
      class="w-full"
    >
      <template v-slot:option="option">
        <!-- <span :class="option.icon"></span> -->
        {{ option.company }} || {{ option.name }} {{ option.surname }}
      </template>
    </v-select>

    <!-- Client Name -->
    <vs-input
      label="Estimate #"
      name="contactperson"
      v-model="estimates.estimate_nr"
      class="w-full mt-5"
    />

    <!-- Client Name -->
    <vs-input
      label="Reference #"
      name="contactperson"
      v-model="estimates.ref"
      class="w-full mt-5"
    />
    <p class="mt-5">Estimate Date</p>
    <datepicker
      placeholder="Select Date"
      v-model="estimates.estimate_date"
    ></datepicker>
    <p class="mt-5">Expiry Date</p>
    <datepicker
      placeholder="Select Date"
      v-model="estimates.expiry_date"
    ></datepicker>
    <vs-divider></vs-divider>
    <p class="mt-5">Sales Person</p>

    <p class="mt-5">Customer</p>
    <v-select
      :options="employees"
      label="disp_name"
      v-model="estimates.employee"
      class="w-full"
    >
      <template v-slot:option="option">
        <!-- <span :class="option.icon"></span> -->
        {{ option.disp_name }} || {{ option.name }} {{ option.surname }} ||
        {{ option.branch }}
      </template>
    </v-select>
    <p class="mt-5">Project Name</p>

    <v-select
      class="w-full "
      v-model="estimates.project"
      :options="projects"
    ></v-select>
    <vs-divider></vs-divider>

    <vs-input
      label="Subject Line"
      name="subject"
      v-model="estimates.subject"
      class="w-full mt-5"
    />
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Paper-trail-Estimates',

  components: {
    vSelect
  },

  data() {
    return {
      estimates: {
        customer: '',
        employee: '',
        estimate_nr: '',
        ref: '',
        estimate_date: '',
        expiry_date: '',
        project: '',
        subject: ''
      }
    }
  },
  watch: {
    estimates: {
      handler(val) {
        console.log(this.estimates)
        let estimates = this.estimates
        this.$store.commit('form/PAPER_ESTIMATES', estimates)
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
