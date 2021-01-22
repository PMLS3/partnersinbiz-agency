<template>
  <div>
    <UiElementsPdfDocumentView :pdfs="pdfs" />
  </div>
</template>

<script>
export default {
  props: ['schema'],

  data() {
    return {
      pdfs: [],
    }
  },

  computed: {
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    },
    activeUserInfo() {
      return this.$store.state.user.app_active_user
    },
  },
  mounted() {
    let pdfRetrieve = this.$fireStore
      .collection('apps')
      .doc('apps')
      .collection(this.activeBusinessInfo.b_uid)
      .doc(this.schema.title)
      .collection(this.schema.title)
      .doc(this.schema.id)
      .collection('added')

    pdfRetrieve.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let doc = change.doc
        this.pdfs.push({
          id: doc.id,
          image: doc.data().image,
          category: doc.data().cat,
          name: doc.data().title,
          html: doc.data().desc,
        })
      })
    })
  },
}
</script>

<style lang="scss" scoped></style>
