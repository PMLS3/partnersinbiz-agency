<!-- =========================================================================================
  File Name: business_details.vue
  Description: Top level business details requirements
  Component Name: Business Details

  Submit to store: form/BUSINESS_DETAILS_SET  retrieve from store form/business_details
  ----------------------------------------------------------------------------------------

========================================================================================== -->
<template>
  <div>
    <!-- NAME -->
    <vs-input
      label="Business Name"
      name="b_name"
      v-model="business.b_name"
      class="w-full"
    />
    <!-- INDUSTRY -->

    <p class="mt-5">Industry</p>
    <v-select
      class="w-full"
      v-model="business.indstr"
      :options="categories"
    ></v-select>

    <vs-input
      label="Business Email"
      name="email"
      v-model="business.b_email"
      type="email"
      class="w-full mt-5"
    />

    <vs-input
      label="Business Number"
      name="number"
      v-model="business.b_number"
      type="email"
      class="w-full mt-5"
    />

    <!-- DESCRIPTION -->
    <vs-textarea
      label="Description"
      v-model="business.desc"
      class="w-full mt-5"
    />
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Business-Details',
  components: {
    vSelect
  },
  data() {
    return {
      business: {
        desc: '',
        b_number: '',
        b_email: '',
        b_name: '',
        indstr: ''
      },
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    }
  },
  watch: {
    business: {
      handler(val) {
        this.$store.commit('form/BUSINESS_DETAILS_SET', this.business)
      },
      deep: true
    }
  },
  computed: {
    categories() {
      return this.$store.state.info.industries_available
    }
  }
}
</script>
