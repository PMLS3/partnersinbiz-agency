<template>
  <div>
    <small>{{ label }}</small>
    <!-- <div v-if="front = 'front'"> -->
    <!-- true -->
    <!-- <datepicker  placeholder="Select Date" v-model="date"  @input="$emit('input', momentDate)"></datepicker> -->
    <datepicker placeholder="Select Date" v-model="date"></datepicker>
    <!-- 
  {{momentDate}}
  ----
  {{date}} -->

    <!-- </div>
<div v-else> -->
    <!-- <datepicker placeholder="Select Date" v-model="date"  @input="$emit('input', date)"></datepicker> -->
    <!-- {{date}} -->
    <!-- </div> -->
  </div>
</template>

<script>
// import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

export default {
  name: 'DatePicker',
  components: {
    Datepicker: () => (process.client ? import('vuejs-datepicker') : null),
  },
  props: ['name', 'label', 'front'],
  data() {
    return {
      date: Date.now(),
      // momentDate: moment(this.date).format('YYYY-MM-DD')
    }
  },
  watch: {
    date() {
      console.log('momentssss', this.date)
      console.log('momentssss', this.momentDate)

      this.$emit('input', this.momentDate)
      // this.momentDate = moment(this.date).format('YYYY-MM-DD')
    },
  },
  computed: {
    momentDate() {
      return moment(this.date).format('YYYY-MM-DD')
    },
    testDate() {
      return moment(this.date).format('YYYY-MM-DD')
    },
  },
}
</script>
