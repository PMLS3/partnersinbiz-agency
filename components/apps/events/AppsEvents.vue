<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------
TODO: make events clickable 
========================================================================================== -->

<template>
  <MultiCalendar :events="events" />
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
      events: [],
    }
  },
  computed: {
    item_unique() {
      return this.item_id ? this.item_id : this.$route.params.id
    },
  },
  created() {
    console.log('this', this.item_unique)
    let b_uid = ''
    let vm = this
    let ref = this.$fireStore
      .collection('apps')
      .doc('EventsSingle')
      .collection('app')
      .where('id', '==', this.item_unique)

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let doc = change.doc
          let data = doc.data()
          b_uid = doc.data().b_uid
          let datas = {
            start: `${doc.data().date_start} ${doc.data().time_start}`,
            end: `${doc.data().date_end} ${doc.data().time_end}`,
            title: doc.data().title,
            icon: 'shopping_cart', // Custom attribute.
            content: doc.data().desc,
            contentFull: doc.data().description,
            images: doc.data().img,
            color: doc.data().color,
            addr_html: doc.data().addr_html,
            addr_url: doc.data().addr_url,
            time_end: doc.data().time_end,
            time_start: doc.data().time_start,
            date_end: doc.data().date_end,
            date_start: doc.data().date_start,
            lat: doc.data().lat,
              lng: doc.data().lng,
              center: { lat: doc.data().lat, lng: doc.data().lng },
              markers: [{ lat: doc.data().lat, lng: doc.data().lng }],
          }
          datas.id = doc.id
          vm.events.push(datas)
        }
      })
    })
  },
}
</script>
