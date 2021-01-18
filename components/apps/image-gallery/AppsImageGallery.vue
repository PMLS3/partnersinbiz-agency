<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------
TODO: make items clickable 
========================================================================================== -->

<template>
  <div>
    <div>
      <div class="con-example-images">
        <vs-images>
          <vs-image
            v-for="(image, index) in items"
            :key="index"
            :src="`${image.downloadURL}`"
            @click="imageShow(image)"
          />
        </vs-images>
      </div>
      <img :src="src" alt v-if="imageShowing" @click="imageNoShow" />
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
      .doc('EventsSingle')
      .collection('app')
      .where('id', '==', this.item_unique)

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let doc = change.doc
          let data = doc.data()
          let datas = {
            start: `${doc.data().date_start} ${doc.data().time_start}`,
            end: `${doc.data().date_end} ${doc.data().time_end}`,
            title: doc.data().title,
            icon: 'shopping_cart', // Custom attribute.
            content: doc.data().desc,
            contentFull: doc.data().description,
          }
          data.id = doc.id
          vm.items.push(datas)
        }
      })
    })
  },
  methods: {
    imageShow(im) {
      this.src = im.downloadURL
      this.imageShowing = true
    },
    imageNoShow() {
      this.imageShowing = false
    },
  },
}
</script>

<style></style>
