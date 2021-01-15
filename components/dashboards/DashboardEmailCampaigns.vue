<template>
  <div>
    <div class="knowledge-base-jumbotron">
      <div
        class="p-8 rounded-lg knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 mb-base"
      >
        <h1 class="mb-1 text-white">Marketing Management</h1>
        <h2 class="text-xl leading-tight text-white font-semibild">
          Manage all your marketing from one place
        </h2>

        <!-- <vs-input
          icon-no-border
          placeholder="Search Topic or Keyword"
          v-model="knowledgeBaseSearchQuery"
          icon-pack="feather"
          icon="icon-search"
          size="large"
          class="w-full mt-6"
        /> -->
        <div class="flex items-center justify-between py-2">
          <div class="flex items-center">
            <p class="text-white">
              {{ motivational_quotes }}
            </p>
          </div>
          <div class="flex">
            <!-- <UploadApps :schema="schema" :item="item" /> -->
            <vs-tooltip text="Let us know what you want!" position="top">
              <vs-button
                type="filled"
                icon="live_help"
                class="float-right ml-2"
                @click="popupActivo = true"
              ></vs-button>
            </vs-tooltip>
            <vs-popup
              fullscreen
              :title="$route.params.id"
              :active.sync="popupActivo"
            >
              <KanbanTodo :type="$route.params.id" v-if="popupActivo" />
            </vs-popup>
          </div>
        </div>
      </div>
    </div>
    <vs-tabs alignment="center" class="tabs-shadow-none" id="profile-tabs">
      <vs-tab label="Campaigns" icon="dashboard">
        <UiAgGridTableAny
          :item="item"
          :schema="schema"
          :columnDefs="columnDefs"
          :info="info"
          :entity="entity"
          :branch="branch"
          class="m-2"
        />
      </vs-tab>

      <vs-tab label="Prospects" icon="dashboard">
        <DashboardEmailCampaingsProspects />
      </vs-tab>

      <vs-tab label="Inbox" icon="dashboard">
        <Email />
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import moment from 'moment'
import CellRendererHtml from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererHtml.vue'
import CellRendererStatus from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererStatus.vue'
import CellRendererGo from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererGo.vue'

export default {
  components: { CellRendererHtml, CellRendererStatus, CellRendererGo },
  data() {
    return { item: 'Email-Campaigns', info: [], popupActivo: false }
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
    motivational_quotes() {
      let num = Math.floor(Math.random() * 55)
      return this.$store.state.info.motivational_quotes[num]
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
        {
          title: 'SelectList',
          name: 'type',
          label: 'Type',
          placeholder: 'Type',
          options: ['Date', 'Sequence'],
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
          headerName: 'View',
          field: 'id',
          filter: true,
          width: 125,
          cellRendererFramework: 'CellRendererGo',
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
      form.b_uid = this.business.b_uid
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

<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url('../../assets/images/background/night.jpeg');

  background-size: cover;
}
</style>
