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
            :src="`${image.url}`"
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
      .doc('ImageGallerySingle')
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
