<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------

  TODO vs-tooltip over details demo image if not provided
========================================================================================== -->

<template>
  <div class="p-2 vx-row">
    <div
      class="w-full vx-col md:w-1/6 sm:w-1/2 mb-base min-h-250"
      v-for="item in items"
      :key="item.id"
    >
      <UiCardContacts :contact="item" />
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
      .doc('ContactsSingle')
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
