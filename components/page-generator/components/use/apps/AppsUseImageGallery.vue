<template>
  <!-- <div
    class="mainDiv"
    :style="`background-image: url('${componentDetails.backgroundURL}') ; background-color: ${componentDetails.backgroundColor}; width: 100%; height: 100vh`"
  >-->
  <div>
    <div class="con-example-images">
      <vs-images>
        <vs-image
          v-for="(image, index) in images"
          :key="index"
          :src="`${image.image}`"
          @click="imageShow(image)"
        />
      </vs-images>
    </div>
    <img :src="src" alt v-if="imageShowing" @click="imageNoShow" />
  </div>
</template>

<script>
// import { db } from "@/firebase/firebaseConfig.js";

export default {
  props: ['schema'],
  data() {
    return {
      images: [],
      isMounted: false,
      checkingImage: '',
      src: '',
      imageShowing: false
    }
  },
  computed: {
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    },
    activeUserInfo() {
      return this.$store.state.user.app_active_user
    }
  },
  methods: {
    imageShow(im) {
      this.src = im.downloadURL
      this.imageShowing = true
    },
    imageNoShow() {
      this.imageShowing = false
    }
  },

  mounted() {
    let imageRetrieve

    let blankRoute = this.blankRoute

    imageRetrieve = this.$fireStore
      .collection('apps')
      .doc('apps')
      .collection(this.activeBusinessInfo.b_uid)
      .doc(this.schema.title)
      .collection(this.schema.title)
      .doc(this.schema.id)
      .collection('added')

    imageRetrieve.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let doc = change.doc
        this.images.push({
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          desc: doc.data().desc
        })
      })
    })
  }
}
</script>

<style scoped></style>
