<template>
  <div>
    <vs-row vs-w="12" style="width: 80vw">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="2"
        vs-sm="2"
        vs-xs="2"
      >
        <vs-radio v-model="b_type" vs-name="b_type" vs-value="page" class="mr-2"
          >Page</vs-radio
        >
        <vs-radio v-model="b_type" vs-name="b_type" vs-value="component"
          >Component</vs-radio
        >
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="8"
        vs-sm="8"
        vs-xs="8"
      >
        <vs-row v-if="b_type == 'page'">
          <vs-input
            v-model="page_name"
            placeholder="Page Name"
            v-if="!editing_page"
          ></vs-input>
          <vs-button @click="savePage()" v-if="!editing_page" icon="save">
          </vs-button>
          <vs-button @click="savePage()" v-if="editing_page" icon="update">
          </vs-button>
          <!-- <vs-button @click="newPage()">New Page </vs-button> -->
        </vs-row>

        <vs-row v-else>
          <vs-input
            v-model="component_name"
            placeholder="Component Name"
            v-if="!editing_page"
          ></vs-input>
          <vs-button @click="saveComponent()" v-if="!editing_page" icon="save">
          </vs-button>
        </vs-row>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="2"
        vs-sm="2"
        vs-xs="2"
      >
        <!-- <vs-button icon="pencil">+</vs-button> -->
        <vs-button
          @click="addGrid('grid', true)"
          color="primary"
          type="border"
          icon="add"
        ></vs-button>
        <!-- <vs-button
          @click="addGrid('builder', false)"
          color="warning"
          type="border"
          icon="remove"
          class="ml-2"
        ></vs-button> -->
        <vs-button
          @click="addEdit()"
          color="primary"
          type="border"
          icon="edit"
          class="ml-2"
        ></vs-button>

        <vs-button
          @click="newPage()"
          color="success"
          type="border"
          icon="refresh"
          class="ml-2"
        ></vs-button>
        <!-- <vs-button @click="addGrid('builder', false)">-</vs-button> -->
      </vs-col>
      <vs-divider color="primary" icon="check"></vs-divider>
    </vs-row>

    <vs-popup
      fullscreen
      title="Building Options"
      :active.sync="popup"
      :button-close-hidden="true"
    >
      <!-- <vs-button @click="addGrid('builder', false)">Cancel</vs-button> -->
      <vs-button
        style="float: right"
        radius
        color="danger"
        type="gradient"
        icon-pack="feather"
        icon="icon-x-circle"
        @click="addGrid('builder', false)"
      ></vs-button>
      <ComponentsSelection />
    </vs-popup>

    <vs-popup
      :title="component_show"
      :active.sync="popup2"
      :button-close-hidden="true"
    >
      <vs-button
        style="float: right"
        radius
        color="danger"
        type="gradient"
        icon-pack="feather"
        icon="icon-x-circle"
        @click="$store.commit('page_builder/ACTIVE_EDIT_UPDATE', false)"
      ></vs-button>
      <div v-if="Object.keys(edit_component).length > 0">
        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <contentEdit :schema="edit_component.schema.content" />
          </vs-col>
        </vs-row>

        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <classEdit :schema="edit_component.schema.class" />
          </vs-col>
        </vs-row>

        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <styleEdit :schema="edit_component.schema.style" />
          </vs-col>
        </vs-row>

        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <inlineEdit :schema="edit_component.schema.inline" />
          </vs-col>
        </vs-row>

        {{ uploaded_images[0] }}
        <img
          :src="uploaded_images[0]"
          v-if="uploaded_images[0]"
          style="height: 125px"
        />
        <br />
        <imageUpload class="mb-2 mr-4 sm:mb-0" label="Image Upload" />
        <br />

        <!-- <vs-button @click="update()">Update</vs-button> -->
      </div>
    </vs-popup>

    <vs-popup
      title="Components tree"
      :active.sync="edit_all"
      :button-close-hidden="true"
    >
      <div>
        <vs-button
          style="float: right"
          radius
          color="danger"
          type="gradient"
          icon-pack="feather"
          icon="icon-x-circle"
          @click="$store.commit('page_builder/EDIT_ALL', false)"
        ></vs-button>

        <Tree :data="component_list" />
      </div>
    </vs-popup>
  </div>
</template>

<script>
import styleEdit from './style/StyleEdit'
import inlineEdit from './inline/InlineEdit'
import contentEdit from './content/ContentEdit'
import classEdit from './class/ClassEdit'

// // Cell Renderer
// import CellRendererActionBuilder from '@/components/tables/ag-grid-table/cell-renderer/actions_builder.vue'
// import CellRendererAction from '@/components/tables/ag-grid-table/cell-renderer/actions.vue'

// import CellRendererStatus from '@/components/cell-renderer/CellRendererStatus.vue'
// import CellRendererVerified from '@/components/cell-renderer/CellRendererVerified.vue'
// import CellRendererActions from '@/components/cell-renderer/CellRendererActions.vue'
// import CellRendererAddStore from '@/components/cell-renderer/CellRendererAddStore'
// import tree from '@/components/extensions/tree'
import moment from 'moment'
export default {
  layout: 'full_page',
  components: {
    // Cell Renderer
    // CellRendererActionBuilder,
    // CellRendererAction,

    // CellRendererStatus,
    // CellRendererVerified,
    // CellRendererActions,
    // CellRendererAddStore,

    //Edit
    styleEdit,
    inlineEdit,
    contentEdit,
    classEdit,
  },

  data() {
    return {
      page_name: '',
      component_name: '',
      b_type: 'page',
      item: 'Events',
      editAll: false,

      popup: false,
      popup2: false,
      list: [],
    }
  },
  computed: {
    uploaded_images() {
      return this.$store.state.form.uploaded_images
    },

    editing_page() {
      return this.$store.state.page_builder.editing_page
    },
    edited_page() {
      return this.$store.state.page_builder.edited_page
    },
    active_card() {
      return this.$store.state.page_builder.active_card
    },
    component_show() {
      return this.$store.state.page_builder.component_show
    },
    edit_all() {
      return this.$store.state.page_builder.edit_all
    },

    component_list() {
      return this.$store.state.page_builder.component_list
    },
    active_edit_card() {
      return this.$store.state.page_builder.active_edit_card
    },
    edit_component() {
      return this.$store.state.page_builder.edit_component
    },
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    },
    activeUserInfo() {
      return this.$store.state.user.app_active_user
    },
    pages() {
      return this.$store.state.page_builder.pages
    },
    columnDefs() {
      switch (this.item) {
        case 'Events':
          //   return [
          //     {
          //       headerName: 'First Name',
          //       field: 'firstname',
          //       width: 175,
          //       filter: true,
          //       checkboxSelection: true,
          //       headerCheckboxSelectionFilteredOnly: true,
          //       headerCheckboxSelection: true
          //     },
          //     {
          //       headerName: 'Last Name',
          //       field: 'lastname',
          //       filter: true,
          //       width: 175
          //     },
          //     {
          //       headerName: 'Email',
          //       field: 'email',
          //       filter: true,
          //       width: 250,
          //       pinned: 'left'
          //     },
          //     {
          //       headerName: 'Company',
          //       field: 'company',
          //       filter: true,
          //       width: 250
          //     },
          //     {
          //       headerName: 'City',
          //       field: 'city',
          //       filter: true,
          //       width: 150
          //     },
          //     {
          //       headerName: 'Country',
          //       field: 'country',
          //       filter: true,
          //       width: 150
          //     },
          //     {
          //       headerName: 'State',
          //       field: 'state',
          //       filter: true,
          //       width: 125
          //     },
          //     {
          //       headerName: 'Zip',
          //       field: 'zip',
          //       filter: true,
          //       width: 125
          //     },
          //     {
          //       headerName: 'Followers',
          //       field: 'followers',
          //       filter: 'agNumberColumnFilter',
          //       width: 125
          //     }
          //   ]
          return [
            {
              headerName: 'Description',
              field: 'desc',
              width: 450,
              filter: true,
              checkboxSelection: true,
              headerCheckboxSelectionFilteredOnly: true,
              headerCheckboxSelection: true,
            },
            {
              headerName: 'Item Name',
              field: 'i_name',
              filter: true,
              width: 250,
              pinned: 'left',
            },
            {
              cellRendererFramework: 'CellRendererActionBuilder',
              headerName: 'Add to Page',
              field: 'i_name',
              width: 250,
            },
            {
              cellRendererFramework: 'CellRendererAction',
              headerName: 'Edit/Delete',
              field: 'i_name',
              width: 250,
            },
          ]
          break
        case 'Customer':
          return [
            {
              headerName: 'Website',
              field: 'website',
              width: 175,
              filter: true,
              checkboxSelection: true,
              headerCheckboxSelectionFilteredOnly: true,
              headerCheckboxSelection: true,
            },

            {
              headerName: 'Title',
              field: 'title',
              filter: true,
              width: 250,
              pinned: 'left',
            },
          ]
          break

        default:
          break
      }
    },
    schema() {
      switch (this.item) {
        case 'Events':
          //   return [
          //     {
          //        title: 'TextInput',
          //       placeholder: 'Name',
          //       type: 'text',
          //       label: 'Name',
          //       name: 'title'
          //     },
          //     {
          //        title: 'TextInput',
          //       placeholder: 'Website',
          //       type: 'text',
          //       label: 'Website',
          //       name: 'website'
          //     },
          //     {
          //        title: 'TextInput',
          //       type: 'number',
          //       placeholder: 'Contact Number',
          //       name: 'number',
          //       label: 'Contact Number',
          //       minValue: 0
          //     },
          //     {
          //        title: 'TextInput',
          //       type: 'number',
          //       placeholder: 'Secondary Contact Number',
          //       name: 'number2',
          //       label: 'Secondary Contact Number',
          //       minValue: 0
          //     },
          //     {
          //        title: 'TextInput',
          //       type: 'email',
          //       placeholder: 'Email',
          //       label: 'Email',
          //       name: 'email'
          //     },
          //     {
          //        title: 'Divider',
          //       name: 'Divider'
          //     },
          //     {
          //        title: 'ImageUpload',
          //       placeholder: 'Image Upload',
          //       label: 'Image Upload',
          //       name: 'imageUpload'
          //     },
          //     {
          //        title: 'Divider',
          //       name: 'Divider'
          //     },
          //     {
          //        title: 'QuilEditor',
          //       name: 'html',
          //       label: 'Description',
          //       placeholder: 'Description'
          //     },
          //     {
          //        title: 'Divider',
          //       name: 'Divider'
          //     },
          //     {
          //        title: 'GoogleAddress',
          //       placeholder: 'Address',
          //       label: 'Address',
          //       name: 'Address'
          //     }
          //   ]
          return [
            {
              title: 'TextInput',
              placeholder: 'Item Name',
              type: 'text',
              label: 'Item Name',
              name: 'i_name',
            },
            {
              title: 'QuilEditor',
              name: 'desc',
              label: 'Description',
              placeholder: 'Description',
            },
          ]
          break
        case 'Customer':
          return [
            {
              title: 'TextInput',
              placeholder: 'Name',
              type: 'text',
              label: 'Name',
              name: 'title',
            },
            {
              title: 'TextInput',
              placeholder: 'Website',
              type: 'text',
              label: 'Website',
              name: 'website',
            },
          ]
          break

        default:
          break
      }
    },
  },
  watch: {
    active_card: function () {
      this.popup = this.active_card
    },
    active_edit_card: function () {
      this.popup2 = this.active_edit_card
    },
  },

  methods: {
    submitToParent(data) {
      this.$emit('askParentToAddToList', data)
    },
    newPage() {
      let page = {
        component_list: [],
      }
      this.$store.commit('page_builder/EDITING_PAGE', false)
      this.$store.commit('page_builder/COMPONENTS_LIST_SET', page)
    },
    saveComponent() {
      let vm = this

      let ref = this.$fireStore
        .collection('apps')
        .doc('builder')
        .collection(this.activeBusinessInfo.b_uid)
        .doc('page_builder')
        .collection('components')

      ref
        .add({
          uid: vm.activeUserInfo.uid,
          component_name: vm.component_name,
          component_list: vm.component_list,
          created_date: moment().format('DD-MM-YYYY'),
          created_month: moment().format('MM-YYYY'),
        })
        .then(function () {
          vm.successUpload()
        })
    },
    savePage() {
      let vm = this

      let ref = this.$fireStore
        .collection('apps')
        .doc('builder')
        .collection(this.activeBusinessInfo.b_uid)
        .doc('page_builder')
        .collection('page_builder')

      if (this.editing_page) {
        ref
          .doc(vm.edited_page.id)
          .update({
            component_list: vm.component_list,
            updated_date: moment().format('DD-MM-YYYY'),
            updated_month: moment().format('MM-YYYY'),
          })
          .then(function () {
            vm.successUpload()
          })
      } else {
        ref
          .add({
            uid: vm.activeUserInfo.uid,
            page_name: vm.page_name,
            component_list: vm.component_list,
            created_date: moment().format('DD-MM-YYYY'),
            created_month: moment().format('MM-YYYY'),
          })
          .then(function () {
            vm.successUpload()
          })
      }
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded',
      })
    },
    addEdit() {
      let payload = {
        active_card: false,
        active_edit_card: false,
        component_show: 'builder',
        index: -1,
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payload)

      this.$store.commit('page_builder/EDIT_ALL', !this.edit_all)
    },
    addGrid(component, show) {
      let payload = {
        active_card: show,
        active_edit_card: false,
        component_show: component,
        index: -1,
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payload)
    },
  },
}
</script>
