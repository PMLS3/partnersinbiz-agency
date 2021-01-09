<!-- =========================================================================================
  File Name: business_other.vue
  Description: Top level business other requirements
  Component Name: Business Other

  Submit to store: form/BUSINESS_OTHER_SET  retrieve from store form/business_other
  ----------------------------------------------------------------------------------------

========================================================================================== -->
<template>
  <div class="w-full">
    <vs-input
      label="Opening Balance"
      name="o_balance"
      v-model="setBusiness.opening_balance"
      class="w-full mt-5"
    />
    <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">Currency</p>
    <v-select
      class="w-full"
      v-model="setBusiness.currency"
      :options="currencies"
    ></v-select>

    <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">Group</p>
    <v-select
      class="w-full"
      v-model="setBusiness.group"
      :options="groups"
    ></v-select>
    <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
      Payment Terms
    </p>
    <v-select
      class="w-full"
      v-model="setBusiness.payment_term"
      :options="payment_terms"
    ></v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Business-Other',
  components: {
    vSelect,
  },
  data() {
    return {
      setBusiness: {
        currency: '',
        opening_balance: '',
        payment_term: '',
        group: '',
      },
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    }
  },
  watch: {
    setBusiness: {
      handler(val) {
        this.$store.commit('form/BUSINESS_OTHER_SET', this.setBusiness)
      },
      deep: true,
    },
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    groups() {
      let grp = ['None']
      if (this.business) {
        if (this.business.c_grps) {
          let new_grp = grp.concat(this.business.c_grps)

          return new_grp
        } else {
          return grp
        }
      } else {
        return grp
      }
    },
    currencies() {
      return this.$store.state.info.currencies
    },
    payment_terms() {
      return this.$store.state.info.payment_terms
    },
  },
}
</script>
