<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------
TODO: make items clickable 
========================================================================================== -->

<template>
  <UiElementsAccordianSimple :info="items" />
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
      .doc('InfoTierSingle')
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
