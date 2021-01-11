<!-- =========================================================================================
  File Name: addAcount.vue
  Description: Add Estimates
  ----------------------------------------------------------------------------------------
TODO Customer, to be individual, company, branch, esitmate number filled, link projects, tax templates
========================================================================================== -->
<template>
  <div
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
  >
    <div class="p-6">
      <FormsTypesPaperTrailEstimates />
      <vs-divider></vs-divider>
      <FormsTypesItemsAdd />
      <FormsTypesItemsTotals />
      <FormsTypesTermsAndConditions />
    </div>
    <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
      <vs-button class="mr-6" @click="newEstimate">Add Estimate</vs-button>
      <vs-button type="border" color="danger">Cancel</vs-button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['branch'],

  components: {
    // Estimates: () =>
    //   process.client
    //     ? import('@/components/forms/forms/paper_trail/estimates.vue')
    //     : null,
    // ItemsAdd: () =>
    //   process.client
    //     ? import('@/components/forms/forms/items/items_add.vue')
    //     : null,
    // ItemsTotals: () =>
    //   process.client
    //     ? import('@/components/forms/forms/items/items_totals.vue')
    //     : null,
    // TermsConditions: () =>
    //   process.client
    //     ? import('@/components/forms/forms/terms-and-conditions/index.vue')
    //     : null
  },

  data() {
    return {
      addr: 'search',
    }
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.user.active_user
    },
    business() {
      return this.$store.state.business.active_business
    },
    estimates() {
      return this.$store.state.form.paper_estimates
    },
    paper_items() {
      return this.$store.state.form.paper_items
    },
    items_total() {
      return this.$store.state.form.items_total
    },
    terms_conditions() {
      return this.$store.state.form.terms_conditions
    },
  },
  methods: {
    newEstimate() {
      let construct = {
        tc: this.terms_conditions,
        items: this.paper_items,
        owner_branch: this.selectedBranch,
        owner_disp_name: this.activeUserInfo.disp_name,
        owner_uid: this.activeUserInfo.uid,
      }
      let payload = {
        ...construct,
        ...this.items_total,
        ...this.estimates,
      }
      console.log('payload', payload)

      const estimateSet = this.$fireStore
        .collection('apps')
        .doc('crm')
        .collection(this.business.b_uid)
        .doc('estimates')
        .collection('estimates')
        .doc()

      const stats = this.$fireStore.collection('data').doc('stats')

      const bus_stats = this.$fireStore
        .collection('apps')
        .doc('crm')
        .collection(this.business.b_uid)
        .doc('stats')
        .collection('company')
        .doc(this.business.b_uid)

      const branch_stats = this.$fireStore
        .collection('apps')
        .doc('crm')
        .collection(this.business.b_uid)
        .doc('stats')
        .collection('branch')
        .doc(this.selectedBranch)

      const user_stats = this.$fireStore
        .collection('apps')
        .doc('crm')
        .collection(this.business.b_uid)
        .doc('stats')
        .collection('user')
        .doc(this.activeUserInfo.uid)

      const incrementEstimates = firebase.firestore.FieldValue.increment(1)

      const batch = this.$fireStore.batch()
      batch.set(estimateSet, payload)

      batch.set(
        stats,
        {
          estimates: incrementEstimates,
        },
        { merge: true }
      )
      batch.set(
        bus_stats,
        {
          estimates: incrementEstimates,
        },
        { merge: true }
      )
      batch.set(
        branch_stats,
        {
          estimates: incrementEstimates,
        },
        { merge: true }
      )
      batch.set(
        user_stats,
        {
          estimates: incrementEstimates,
        },
        { merge: true }
      )

      batch
        .commit()
        .then(() => {
          this.successUpload()
        })
        .catch(function (error) {
          vm.errorDatabase(error)
        })
    },
    successUpload() {
      this.$vs.loading.close()
      let quotes = this.$store.state.app.motivational_quotes
      let num = Math.floor(Math.random() * 55)
      let quote = quotes[num]
      this.$vs.notify({
        color: 'success',
        title: 'Success',
        text: `${quote}`,
      })
    },
    errorDatabase(err) {
      this.$vs.notify({
        color: 'warning',
        title: 'Error',
        text: `${err}`,
      })
    },
  },
}
</script>
