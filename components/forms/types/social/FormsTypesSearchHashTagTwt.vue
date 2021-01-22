<template>
  <div>
    <vs-input
      name="search"
      class="w-full"
      label-placeholder="Keywords that you want to search for"
      v-model="search"
    ></vs-input>
    <small class="w-full mt-2"
      >Example: '#Nodejs, #Angular, #Reactjs, #ionicframework, #ReactNative,
      #es6'</small
    >
    <div class="my-4">
      <v-select
        label="Result type"
        v-model="results_type"
        :options="results_types"
      />
      <small class="w-full mt-2"
        >* mixed : Include both popular and real time results in the
        response.</small
      >
      <small class="w-full mt-2"
        >* recent : return only the most recent results in the response</small
      >
      <small class="w-full mt-2"
        >* popular : return only the most popular results in the
        response.</small
      >
    </div>

    <div class="my-4">
      <small class="date-label">Tweet Date (since)</small>
      <flat-pickr
        :config="configdateTimePicker"
        v-model="date"
        placeholder="Since"
        class="w-full p-2"
      />
    </div>
    <br />

    <vs-button @click="SearchTweetSend" class="mt-4"
      >Search for Tweet</vs-button
    >
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'
export default {
  components: {
    flatPickr,
    vSelect,
  },
  data() {
    return {
      configdateTimePicker: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: 'M j, Y',
        altInput: true,
        dateFormat: 'Y-m-d',
      },
      results: [],
      resultsUsers: [],
      results_type: 'mixed',
      results_types: ['mixed', 'recent', 'popular'],
      data: [],
      date: '',
      search: '',
      message: '',
      counterDanger: false,
    }
  },
  methods: {
    SearchTweetSend() {
      let payload = {
        search: this.search,
        results_type: this.results_type,
        date: this.date,
      }

      this.$emit('searchTag', payload)
    },
  },
}
</script>
