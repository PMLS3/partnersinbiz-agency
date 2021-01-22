<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------

  TODO look and custom submit name
========================================================================================== -->

<template>
  <div class="p-2 vx-row">
    <FormsTypesMailingList :item="item" />
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'AppsMailingList',
  props: {
    item_id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      items: [],
      item: {},
      feature: {},
      can_add: true,
    }
  },
  computed: {
    item_unique() {
      return this.item_id ? this.item_id : this.$route.params.id
    },
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
  },
  watch: {
    item() {
      let vm = this
      if (!vm.business) {
        vm.$fireStore
          .collection('business')
          .doc(vm.item.b_uid)
          .get()
          .then((snapshot) => {
            const document = snapshot.data()
            let payload = snapshot.data()
            payload.b_uid = doc.id
            vm.$store.commit('business/UPDATE_BUSINESS_INFO')
            vm.$store.commit('business/UPDATE_MAIN_BUSINESS_SET')

            // do something with document
          })
      }
    },
  },
  created() {
    let vm = this
    // if (!this.business) {
    //   this.$fireStore
    //     .collection('apps')
    //     .doc('MailingList')
    //     .collection('app')
    //     .doc(this.item_unique)
    //     .get()
    //     .then((snapshot) => {
    //       const document = snapshot.data()
    //       this.feature = snapshot.data()
    //       // do something with document
    //     })
    // }
    // let vm = this
    let ref = this.$fireStore
      .collection('apps')
      .doc('MailingList')
      .collection('app')
      .doc(this.item_unique)

    ref.get().then((snapshot) => {
      const document = snapshot.data()
      vm.item = snapshot.data()
      // do something with document
    })

    this.$nuxt.$on('add-details', (data) => {
      console.log('unique', vm.item_unique)
      let payload = data
      payload.id = vm.item_unique

      payload.created_date = moment().format('DD-MM-YYYY')
      payload.created_month = moment().format('MM-YYYY')
      payload.timestamp = Date.now()
      if (vm.can_add) {
        vm.can_add = false
        this.$fireStore
          .collection('apps')
          .doc('MailingListSingle')
          .collection('app')
          .doc(data.email)
          .set(payload)
          .then(() => {
            vm.success()
          })
          .catch((err) => {
            vm.fail(err)
          })

        setTimeout(() => {
          vm.can_add = true
        }, 2000)
      }
    })
  },
  methods: {
    success() {
      this.$vs.notify({
        title: 'Success',
        text: 'Register to mailing list',
        color: 'success',
      })
    },
    fail(err) {
      this.$vs.notify({
        title: 'Oops!',
        text: `${err}`,
        color: 'danger',
      })
    },
  },
}
</script>
