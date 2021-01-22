<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------
TODO: make items clickable 
========================================================================================== -->

<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <UiElementsGauge
        :loyal="item"
        :info="info"
        :business="business"
        :user="user"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppsEvents',
  props: {
    item_id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      items: [],
      info: {},
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
    info() {
      this.$fireStore
        .collection('business')
        .doc(this.info.b_uid)
        .get()
        .then((snapshot) => {
          const document = snapshot.data()
          let payload = snapshot.data()
          payload.b_uid = doc.id
          this.$store.commit('business/UPDATE_BUSINESS_INFO')
          this.$store.commit('business/UPDATE_MAIN_BUSINESS_SET')

          // do something with document
        })
    },
  },
  created() {
    let vm = this

    this.$fireStore
      .collection('apps')
      .doc('Loyalty')
      .collection('app')
      .doc(vm.item_unique)
      .get()
      .then((snapshot) => {
        const document = snapshot.data()
        vm.feature = snapshot.data()
        // do something with document
      })

    let ref = this.$fireStore
      .collection('apps')
      .doc('LoyaltySingle')
      .collection('app')
      .where('id', '==', this.item_unique)

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let doc = change.doc
          let data = doc.data()

          data.id = doc.id
          vm.items.push(data)
        }
      })
    })
  },
}
</script>
