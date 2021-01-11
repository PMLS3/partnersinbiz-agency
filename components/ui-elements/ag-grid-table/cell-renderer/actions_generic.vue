<template>
  <div :style="{ direction: $vs.rtl ? 'rtl' : 'ltr' }">
    <feather-icon
      icon="Edit3Icon"
      svgClasses="h-5 w-5 mr-4 hover:text-primary cursor-pointer"
      @click="editRecord(params.data)"
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
  computed: {
    business() {
      if (process.client) {
        if (localStorage.getItem('mainBusiness')) {
          return JSON.parse(localStorage.getItem('mainBusiness'))
        } else {
          return this.$store.state.business.main_business
        }
      }
    },
    user() {
      if (process.client) {
        if (localStorage.getItem('userInfo')) {
          return JSON.parse(localStorage.getItem('userInfo'))
        } else {
          return this.$store.state.auth.active_user
        }
      }
    }
  },
  methods: {
    editRecord(item) {
      this.$store.commit('form/EDIT_FORM', item)
    },
    confirmDeleteRecord(item) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: `Confirm Delete`,
        text: `You are about to delete "${item.i_name}"`,
        accept: this.deleteRecord(item),
        acceptText: 'Delete'
      })
    },
    deleteRecord(item) {
      this.$fireStore
        .collection('apps')
        .doc('apps')
        .collection(this.business.b_uid)
        .doc(item.i_type)
        .collection(item.i_type)
        .doc(item.id)
        .delete()
        .then(function() {
          this.showDeleteSuccess()
        })
        .catch(function(error) {
          this.showDeleteFail(error)
        })
    },
    showDeleteSuccess() {
      this.notify({
        color: 'success',
        title: 'Deleted',
        text: 'The selected user was successfully deleted'
      })
    },
    showDeleteSuccess(err) {
      this.notify({
        color: 'danger',
        title: 'NOT Deleted',
        text: `${err}`
      })
    }
  }
}
</script>
