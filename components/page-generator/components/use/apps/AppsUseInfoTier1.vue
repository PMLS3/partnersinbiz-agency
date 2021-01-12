<template>
  <div>
    <UiElementsAccordianSimple :info="info" />
  </div>
</template>

<script>
export default {
  props: ['schema'],

  data() {
    return {
      info: [],
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

  created() {
    let vm = this
    let ref

    ref = this.$fireStore
      .collection('apps')
      .doc('apps')
      .collection(this.activeBusinessInfo.b_uid)
      .doc(this.schema.title)
      .collection(this.schema.title)
      .doc(this.schema.id)
      .collection('added')

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let doc = change.doc
        this.info.push({
          id: doc.id,
          category: doc.data().cat,
          title: doc.data().title,
          htmlForEditor: doc.data().desc,
        })
      })
    })
  },
}
</script>

<style lang="scss" scoped></style>
