<!-- =========================================================================================
  File Name: UserEditTabSocial.vue
  Description: User Edit Social Tab content
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div>
    <client-only>
      <vs-list>
        <vs-list-header title="Communication Groups"></vs-list-header>
        <vs-list-item
          title="Add Communication Groups"
          subtitle="You will set communication groups to users"
          class="mb-5"
        >
          <vs-row>
            <vs-input v-model="groupCommunication" name="company" />
            <vs-button @click="save('p_notes')">+</vs-button>
          </vs-row>
        </vs-list-item>
        <vs-list-item
          :title="notes"
          v-for="(notes, e) in business.p_notes"
          :key="e"
        >
          <vs-button
            type="border"
            color="danger"
            icon="delete"
            size="small"
            @click="deleteItem('p_notes', notes, e)"
          ></vs-button>
        </vs-list-item>
        <vs-divider color="success" icon="check"></vs-divider>
        <vs-list-header title="Branches"></vs-list-header>
        <vs-list-item
          title="Add Branches"
          subtitle="These are the branches of your Business"
          class="mb-5"
        >
          <vs-row>
            <vs-input v-model="groupBranches" name="company" />
            <vs-button @click="save('branches')">+</vs-button>
          </vs-row>
        </vs-list-item>
        <vs-list-item
          :title="branch"
          v-for="(branch, i) in business.branches"
          :key="i"
        >
          <vs-row>
            <vs-button
              type="border"
              color="danger"
              icon="delete"
              size="small"
              @click="deleteItem('branches', branch, i)"
            ></vs-button>
            <!-- <vs-button
              @click="editItem('branches', branch, i)"
              color="primary"
              type="border"
              icon="edit"
              size="small"
              class="ml-5"
            ></vs-button> -->
          </vs-row>
        </vs-list-item>

        <vs-divider color="success" icon="check"></vs-divider>
        <vs-list-header title="Positions"></vs-list-header>
        <vs-list-item
          title="Add Positions"
          subtitle="These are the position within your Business"
          class="mb-5"
        >
          <vs-row>
            <vs-input v-model="groupPosition" name="company" />
            <vs-button @click="save('pos')">+</vs-button>
          </vs-row>
        </vs-list-item>
        <vs-list-item
          :title="position"
          v-for="(position, index) in business.pos"
          :key="index"
        >
          <vs-row>
            <vs-button
              type="border"
              color="danger"
              icon="delete"
              size="small"
              @click="deleteItem('pos', position, index)"
            ></vs-button>
            <vs-button
              @click="editItem('pos', position, index)"
              color="primary"
              type="border"
              icon="edit"
              size="small"
              class="ml-5"
            ></vs-button>
          </vs-row>
        </vs-list-item>
      </vs-list>

      <div id="user-edit-tab-info">
        <vs-popup
          class="holamundo"
          :title="selectedPosition.position"
          :active.sync="popupPosition"
        >
          <div class="mt-4">
            <label class="vs-input--label">Report To?</label>
            <v-select
              v-model="selectedPosition.following"
              :clearable="false"
              :options="data.pos"
              multiple
              name="role"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
            />

            <label class="vs-input--label">Overseeing?</label>
            <v-select
              v-model="selectedPosition.leading"
              :clearable="false"
              :options="data.pos"
              multiple
              name="role"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
            />
          </div>
          <div class="vx-row">
            <div class="w-full vx-col">
              <div class="flex flex-wrap items-center justify-end mt-8">
                <vs-button class="mt-2 ml-auto" @click="save_changes('pos')"
                  >Save Changes</vs-button
                >

                <vs-button
                  class="mt-2 ml-4"
                  type="border"
                  color="warning"
                  @click="popupPosition = !popupPosition"
                  >Cancel</vs-button
                >
              </div>
            </div>
          </div>
        </vs-popup>

        <!-- <vs-popup
          class="holamundo"
          :title="selectedBranch.branch"
          :active.sync="popupBranch"
          style="z-index: 1000"
        >
          <div class="mt-4">
            <div class="mx-8 mb-8">
              <ul>
                <li><b>Email:</b> {{ selectedBranch.email }}</li>
                <li><b>Website:</b> {{ selectedBranch.website }}</li>
                <li><b>Phone:</b> {{ selectedBranch.phone }}</li>
                <li><b>Addr:</b> {{ selectedBranch.for_address }}</li>
              </ul>
            </div>
            <label class="vs-input--label"
              >Please fill in Branch details:</label
            >

            <FormGenerator
              :schema="branchForm"
              v-model="formData"
              class="p-6"
            />
          </div>
          <div class="vx-row">
            <div class="w-full vx-col">
              <div class="flex flex-wrap items-center justify-end mt-8">
                <vs-button
                  class="mt-2 ml-auto"
                  @click="save_changes('branches')"
                  >Save Changes</vs-button
                >
                <vs-button
                  class="mt-2 ml-4"
                  type="border"
                  color="warning"
                  @click="popupBranch = !popupBranch"
                  >Cancel</vs-button
                >
              </div>
            </div>
          </div>
        </vs-popup> -->
      </div>
    </client-only>
  </div>
</template>

<script>
import firebase from 'firebase'
import vSelect from 'vue-select'
import moment from 'moment'

export default {
  name: 'group-setttings',
  components: {
    vSelect,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      branchForm: [
        {
          title: 'TextInput',
          placeholder: 'Email',
          label: 'Email',
          name: 'Email',
          type: 'text',
        },
        {
          title: 'TextInput',
          placeholder: 'Phone',
          label: 'Phone',
          name: 'Phone',
          type: 'text',
        },
        {
          title: 'TextInput',
          placeholder: 'Website',
          label: 'Website',
          name: 'Website',
          type: 'text',
        },

        {
          title: 'GoogleAddress',
          placeholder: 'Address',
          label: 'Address',
          name: 'Address',
        },
        {
          title: 'TextArea',
          placeholder: 'Description',
          label: 'Description',
          name: 'Description',
        },
      ],

      popupBranch: false,
      popupPosition: false,

      groupCommunication: '',
      groupPosition: '',
      groupBranches: '',
      selectedBranch: {},
      selectedPosition: {},
      formData: {},

      data_local: JSON.parse(JSON.stringify(this.data)),
    }
  },

  computed: {
    business() {
      return this.$store.state.business.active_business
    },
  },
  methods: {
    save_changes(type) {
      let vm = this
      let collection = ''
      if (type === 'branches') {
        collection = 'branches'

        this.$fireStore
          .collection('business')
          .doc(vm.business.b_uid)
          .collection('branches')
          .doc(vm.selectedBranch.branch)
          .update({
            branch: vm.selectedBranch.branch,
            email: vm.formData.Email,
            phone: vm.formData.Phone,
            website: vm.formData.Website,
            adr_address: vm.formData.Address.places[0].adr_address,
            for_address: vm.formData.Address.places[0].formatted_address,
            addr_url: vm.formData.Address.places[0].url,
            vicinity: vm.formData.Address.places[0].vicinity,
            lat: vm.formData.Address.markers[0].position.lat,
            lng: vm.formData.Address.markers[0].position.lng,

            geo1: vm.formData.Address.geoAll.geo1,
            geo2: vm.formData.Address.geoAll.geo2,
            geo3: vm.formData.Address.geoAll.geo3,
            geo4: vm.formData.Address.geoAll.geo4,
            geo5: vm.formData.Address.geoAll.geo5,
            geo6: vm.formData.Address.geoAll.geo6,
            geo7: vm.formData.Address.geoAll.geo7,
            geo8: vm.formData.Address.geoAll.geo8,
            geo9: vm.formData.Address.geoAll.geo9,
            date: moment().format('DD-MM-YYYY'),
            month: moment().format('MM-YYYY'),
            desc: vm.formData.Description,
            t_stamp: Date.now(),
          })
          .then(() => {
            vm.popupBranch = false
            vm.successUpload()
          })
      } else if (type === 'pos') {
        collection = 'pos'
        let groupOverseeing
        let groupReportedTo
        if (vm.selectedPosition.leading == undefined) {
          groupOverseeing = ''
        } else {
          groupOverseeing = vm.selectedPosition.leading
        }
        if (vm.selectedPosition.following == undefined) {
          groupReportedTo = ''
        } else {
          groupReportedTo = vm.selectedPosition.following
        }
        vm.$fireStore
          .collection('business')
          .doc(vm.business.b_uid)
          .collection('positions')
          .doc(vm.selectedPosition.position)
          .update({
            leading: groupOverseeing,
            following: groupReportedTo,
          })
          .then(() => {
            vm.popupPosition = false
            this.successUpload()
          })
      } else {
        vm.unsuccessUpload()
      }
    },
    editItem(type, data, i) {
      let vm = this
      let collection = ''
      if (type === 'branches') {
        collection = 'branches'
        this.$fireStore
          .collection('business')
          .doc(vm.business.b_uid)
          .collection('branches')
          .doc(data)
          .get()
          .then(function (doc) {
            if (doc.exists) {
              vm.selectedBranch = doc.data()
              vm.selectedBranch.id = doc.id
              vm.popupBranch = true
            } else {
              vm.$fireStore
                .collection('business')
                .doc('info')
                .collection('groups')
                .doc(vm.business.b_uid)
                .collection('branches')
                .doc(data)
                .set({
                  branch: data,
                })
                .then(() => {
                  vm.editItem(type, data, i)
                })
            }
          })
          .catch(function (error) {
            console.log('Error getting document:', error)
          })
      } else if (type === 'pos') {
        collection = 'pos'
        vm.$fireStore
          .collection('business')
          .doc(vm.business.b_uid)
          .collection('positions')
          .doc(data)
          .get()
          .then(function (doc) {
            if (doc.exists) {
              console.log('Document data:', doc.data())
              vm.selectedPosition = doc.data()
              vm.popupPosition = true
            } else {
              vm.$fireStore
                .collection('business')
                .doc('info')
                .collection('groups')
                .doc(vm.business.b_uid)
                .collection('positions')
                .doc(data)
                .set({
                  position: data,
                })
                .then(() => {
                  vm.editItem(type, data, i)
                })
            }
          })
          .catch(function (error) {
            console.log('Error getting document:', error)
          })
      } else {
        vm.unsuccessUpload()
      }
    },

    deleteItem(type, data, i) {
      let vm = this
      let collection = ''
      if (type === 'p_notes') {
        collection = 'p_notes'
      } else if (type === 'branches') {
        collection = 'branches'
        vm.deletItemInfo(collection, data)
      } else if (type === 'pos') {
        collection = 'pos'
        vm.deletItemInfo(collection, data)
      } else {
        vm.unsuccessUpload()
      }

      this.$fireStore
        .collection('business')
        .doc(this.business.b_uid)
        .update({
          [collection]: firebase.firestore.FieldValue.arrayRemove(data),
        })
        .then(() => {
          vm.successDelete(collection, i)
        })
    },
    deletItemInfo(collection, data) {
      this.$fireStore
        .collection('business')
        .doc(this.business.b_uid)
        .collection(collection)
        .doc(data)
        .delete()
        .then(function () {
          console.log('Document successfully deleted!')
        })
        .catch(function (error) {
          console.error('Error removing document: ', error)
        })
    },
    save(type) {
      let vm = this
      let collection = ''
      let data = ''
      if (type === 'p_notes') {
        collection = 'p_notes'
        data = vm.groupCommunication
      } else if (type === 'branches') {
        collection = 'branches'
        data = vm.groupBranches
      } else if (type === 'pos') {
        collection = 'pos'
        data = vm.groupPosition
      } else {
        vm.unsuccessUpload()
      }

      this.$fireStore
        .collection('business')
        .doc(this.business.b_uid)
        .update({
          [collection]: firebase.firestore.FieldValue.arrayUnion(data),
        })
        .then(() => {
          vm.successUpload(collection, data)
        })
    },
    unsuccessUpload() {
      this.$vs.notify({
        color: 'danger',
        title: 'Oops',
        text: 'Something went wrong',
      })
    },

    successUpload(type, value) {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded',
      })

      let business = this.business

      if (type === 'p_notes') {
        business.p_notes.push(value)
      } else if (type === 'branches') {
        business.branches.push(value)
      } else if (type === 'pos') {
        business.pos.push(value)
      }
      this.$store.commit('business/UPDATE_BUSINESS_INFO', business)
    },
    successDelete(type, i) {
      this.$vs.notify({
        color: 'warning',
        title: 'Delete Success',
        text: 'Whoop whoop, been deleted',
      })

      let business = this.business
      let items = {}

      if (type === 'p_notes') {
        items = business.p_notes
        const filteredItems = items
          .slice(0, i)
          .concat(items.slice(i + 1, items.length))
        business.p_notes = filteredItems
      } else if (type === 'branches') {
        items = business.branches
        const filteredItems = items
          .slice(0, i)
          .concat(items.slice(i + 1, items.length))
        business.branches = filteredItems
      } else if (type === 'pos') {
        items = business.pos
        const filteredItems = items
          .slice(0, i)
          .concat(items.slice(i + 1, items.length))
        business.positions = filteredItems
      }
      console.log('delete', business)
      this.$store.commit('business/UPDATE_BUSINESS_INFO', business)
    },
  },
}
</script>
