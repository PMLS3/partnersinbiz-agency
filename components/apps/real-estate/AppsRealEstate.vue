<!-- =========================================================================================
  File Name: ECommerceItemDetail.vue
  Description: eCommerce Item Detail page
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div>
    <RealEstateMain :real_estate="items" />
  </div>
</template>

<script>
export default {
  name: 'AppsInfoTier',
  props: {
    item_id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      items: [],
    }
  },
  computed: {
    item_unique() {
      return this.item_id ? this.item_id : this.$route.params.id
    },
  },
  created() {
    let vm = this
    let ref = this.$fireStore
      .collection('apps')
      .doc('RealEstateSingle')
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

<style></style>
