<template>
  <vs-tabs
    :position="$device.isMobile ? 'top' : 'left'"
    class="mt-24 tabs-shadow-none"
    id="profile-tabs"
  >
    <vs-tab label="Campaigns" icon="dashboard">
      <UiAgGridTableAny
        :item="item"
        :schema="schema"
        :columnDefs="columnDefs"
        :info="info"
        :entity="entity"
        :branch="branch"
      />
    </vs-tab>

    <vs-tab label="Prospects" icon="dashboard">
      <DashboardEmailCampaingsProspects />
    </vs-tab>

    <vs-tab label="Inbox" icon="dashboard">
      <Email />
    </vs-tab>
  </vs-tabs>
</template>

<script>
import moment from 'moment'
import CellRendererHtml from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererHtml.vue'
export default {
  components: { CellRendererHtml },
  data() {
    return { item: 'Email-Campaigns', info: [] }
  },

  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },

    entity() {
      if (this.branch == 'Company') {
        return 'business'
      } else {
        return 'branch'
      }
    },
    branch() {
      return this.$store.state.app.selected_branch
    },
    schema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Campaign Name',
          type: 'text',
          label: 'Campaign Name',
          name: 'title',
        },
        // {
        //   title: 'ImageUpload',
        //   placeholder: 'Cover Image',
        //   type: 'text',
        //   label: 'Cover Image',
        //   name: 'url',
        // },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
      ]
    },
    columnDefs() {
      return [
        {
          headerName: 'ID',
          field: 'id',
          width: 125,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
        },
        {
          headerName: 'Campaing',
          field: 'title',
          filter: true,
          width: 125,
        },
        {
          headerName: 'Description',
          field: 'desc',
          filter: true,
          width: 250,
          cellRendererFramework: 'CellRendererHtml',
        },
        {
          headerName: 'Prospects',
          field: 'prospects',
          filter: true,
          width: 210,
        },
        {
          headerName: 'Delivered',
          field: 'delivered',
          filter: true,
          width: 225,
        },
        {
          headerName: 'Opened',
          field: 'opened',
          filter: true,
          width: 200,
        },
        {
          headerName: 'Responed',
          field: 'responded',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Interest Level',
          field: 'role',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Status',
          field: 'status',
          filter: true,
          width: 150,
          cellRendererFramework: 'CellRendererStatus',
        },
      ]
    },
  },
  created() {
    let vm = this
    this.$fireStore
      .collection('apps')
      .doc(vm.item)
      .collection('app')
      .where('u_uid', '==', this.user.uid)
      .onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === 'added') {
            console.log('New city: ', change.doc.data())
            let data = change.doc.data()
            data.id = change.doc.id
            vm.info.push(data)
          }
          if (change.type === 'modified') {
            console.log('Modified city: ', change.doc.data())
          }
          if (change.type === 'removed') {
            console.log('Removed city: ', change.doc.data())
          }
        })
      })

    this.$nuxt.$on('formDatas', (form) => {
      console.log('doing something')

      form.date = moment().format('DD-MM-YYYY')
      form.disp_name = this.user.disp_name
      form.u_uid = this.user.uid
      form.branch = this.branch
      form.entity = this.entity

      this.$fireStore
        .collection('apps')
        .doc(vm.item)
        .collection('app')
        .add(form)
        .then(() => {
          vm.successUpload()
        })
        .catch((err) => {
          vm.unsuccessUpload(err)
        })
      //Do Something
    })
  },
  methods: {
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: `${this.item} added`,
        text: 'Whoop whoop, been uploaded',
      })
    },

    unsuccessUpload(er) {
      this.$vs.notify({
        color: 'danger',
        title: 'Oh no',
        text: `Error ${er}`,
      })
    },
  },
}
</script>

<style></style>
