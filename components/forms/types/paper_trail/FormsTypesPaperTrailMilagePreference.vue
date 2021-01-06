<!-- =========================================================================================
  File Name: paper_trail/sales_order.vue
  Description: Template Customizer
  Component Name: Paper Estimates

  Submit to store: form/PAPER_MILAGE_PREFERENCE  retrieve from store form/paper_milage_preference
  ----------------------------------------------------------------------------------------

  

========================================================================================== -->

<template>
  <div>
    <vs-checkbox v-model="employee_add"
      >Associate employees to expenses</vs-checkbox
    >
    <vs-divider></vs-divider>
    <vs-radio v-model="milage_unit" vs-name="milage_unit" vs-value="Km"
      >Km</vs-radio
    >
    <vs-radio v-model="milage_unit" vs-name="milage_unit" vs-value="Mile"
      >Mile</vs-radio
    >
    <div>
      <p class="mt-5">START DATE</p>
      <datepicker placeholder="Start Date" v-model="start_date"></datepicker>
      <vs-input
        label="MILAGE RATE"
        name="Milage"
        v-model="milage_rate"
        class="w-full mt-5"
      />
    </div>
    <vs-button @click="AddMore">Add Mileage Rate</vs-button>
    <div v-for="(rate, index) in rates" :key="index">
      {{ rate.start_date }} - {{ rate.milage_rate }}
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Paper trail Milage Preference',

  components: {
    vSelect,
    Datepicker: () => (process.client ? import('vuejs-datepicker') : null)
  },
  data: () => ({
    employee_add: false,
    milage_unit: 'Km',
    start_date: '',
    milage_rate: 0,
    rates: []
  }),
  watch: {
    milage_preference: {
      handler(val) {
        let milage_preference = {
          employee_add
        }
        this.$store.commit('form/PAPER_MILAGE_PREFERENCE', milage_preference)
      },
      deep: true
    }
  },
  methods: {
    AddMore() {
      let addDetails = {
        start_date: this.start_date,
        milage_rate: this.milage_rate
      }

      this.rates.push(addDetails)
    }
  }
}
</script>
