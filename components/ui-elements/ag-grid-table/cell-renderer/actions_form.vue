<template>
  <div :style="{ direction: $vs.rtl ? 'rtl' : 'ltr' }">
    <feather-icon
      icon="Edit3Icon"
      svgClasses="h-5 w-5 mr-4 hover:text-primary cursor-pointer"
      @click="editRecord"
    />
    <feather-icon
      icon="Trash2Icon"
      svgClasses="h-5 w-5 hover:text-danger cursor-pointer"
      @click="confirmDeleteRecord(params.data)"
    />
  </div>
</template>

<script>
export default {
  name: 'CellRendererActions',
  methods: {
    editRecord() {
      /*
              Below line will be for actual product
              Currently it's commented due to demo purpose - Above url is for demo purpose

              this.$router.push("/apps/user/user-edit/" + this.params.data.id).catch(() => {})
            */
    },
    confirmDeleteRecord(id) {
      console.log(id)
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: `Confirm Delete`,
        text: `You are about to delete "${id}"`,
        accept: this.deleteRecord(),
        acceptText: 'Delete',
      })
    },
    deleteRecord() {
      /* Below two lines are just for demo purpose */
      //       this.$fireStore
      // .collection('apps')
      // .doc('apps')
      // .collection(this.business.b_uid)
      // .doc(this.item)
      // .collection(this.item)
      this.showDeleteSuccess()

      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.params.data.id)
      //   .then(()   => { this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess() {
      this.notify({
        color: 'success',
        title: 'User Deleted',
        text: 'The selected user was successfully deleted',
      })
    },
  },
}
</script>
