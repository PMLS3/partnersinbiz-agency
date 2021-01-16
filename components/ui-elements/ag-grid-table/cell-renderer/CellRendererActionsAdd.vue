<template>
  <div :style="{ direction: $vs.rtl ? 'rtl' : 'ltr' }">
    <feather-icon
      icon="CloudRainIcon"
      svgClasses="h-5 w-5 mr-4 hover:text-primary cursor-pointer"
      @click="editRecord(params.data)"
    />
    <!-- <feather-icon icon="Trash2Icon" svgClasses="h-5 w-5 hover:text-danger cursor-pointer" @click="confirmDeleteRecord" /> -->
  </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'
export default {
  name: 'CellRendererActions',
  computed: {
    user() {
      return this.$store.state.auth.active_user
    },
    business() {
      return this.$store.state.business.main_business
    },
    route_id() {
      return this.$store.state.app.route_id
    },
  },
  methods: {
    editRecord(data) {
      console.log('data:', data)
      console.log('data:', this.route_id)

      this.$fireStore
        .collection('business')
        .doc('users')
        .collection(this.business.b_uid)
        .doc(data.uid)
        .update({
          email_campaigns: firebase.firestore.FieldValue.arrayUnion(
            this.route_id
          ),
        })

      var today = new Date()

      const date = moment(today).format('YYYY-MM-DD')

      let payload = {}

      if (data.about) {
        payload.about = data.about
      }

      if (data.branch) {
        payload.branch = data.branch
      }

      if (data.company) {
        payload.company = data.company
      }

      if (data.disp_name) {
        payload.disp_name = data.disp_name
      }

      if (data.email) {
        payload.email = data.email
      }

      if (data.gender) {
        payload.gender = data.gender
      }

      if (data.name) {
        payload.name = data.name
      }

      if (data.surname) {
        payload.surname = data.surname
      }

      if (data.snippet1) {
        payload.snippet1 = data.snippet1
      }

      if (data.snippet2) {
        payload.snippet2 = data.snippet2
      }

      if (data.snippet3) {
        payload.snippet3 = data.snippet3
      }

      if (data.snippet4) {
        payload.snippet4 = data.snippet4
      }

      if (data.snippet5) {
        payload.snippet5 = data.snippet5
      }

      if (data.snippet6) {
        payload.snippet6 = data.snippet6
      }

      if (data.snippet7) {
        payload.snippet7 = data.snippet7
      }

      if (data.snippet8) {
        payload.snippet8 = data.snippet8
      }

      this.$fireStore
        .collection('apps')
        .doc('Email-Campaigns')
        .collection('app')
        .doc(this.route_id)
        .collection('users')
        .add(payload)
    },
    confirmDeleteRecord() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm Delete',
        text: `You are about to delete "${this.params.data.username}"`,
        accept: this.deleteRecord,
        acceptText: 'Delete',
      })
    },
  },
}
</script>
