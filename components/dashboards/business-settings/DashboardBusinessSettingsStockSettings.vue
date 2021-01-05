<!-- =========================================================================================
  File Name: UserEditTabSocial.vue
  Description: User Edit Social Tab content
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div>
    <client-only>
      <vs-list>
        <vs-list-header title="Warehouse Types"></vs-list-header>
        <vs-list-item
          title="Warehouse Types"
          subtitle="You will set Warehouse Types"
          class="mb-5"
        >
          <vs-row>
            <vs-input v-model="wh_types" name="company" />
            <vs-button @click="save('wh_types')">+</vs-button>
          </vs-row>
        </vs-list-item>
        <vs-list-item :title="wh" v-for="(wh, i) in business.wh_types" :key="i">
          <vs-button
            type="border"
            color="danger"
            icon="delete"
            size="small"
            @click="deleteItem('wh_types', wh, i)"
          ></vs-button>
        </vs-list-item>
        <vs-divider color="success" icon="check"></vs-divider>
        <vs-list-header title="Warehouses"></vs-list-header>
        <vs-list-item
          title="Add Warehouse"
          subtitle="These are the Warehouses of your Business"
          class="mb-5"
        >
          <vs-row>
            <vs-input v-model="w_house" name="company" />
            <vs-button @click="save('w_house')">+</vs-button>
          </vs-row>
        </vs-list-item>
        <vs-list-item
          :title="w_house"
          v-for="(w_house, i) in business.w_house"
          :key="i"
        >
          <vs-row>
            <vs-button
              type="border"
              color="danger"
              icon="delete"
              size="small"
              @click="deleteItem('w_house', w_house, i)"
            ></vs-button>
            <vs-button
              @click="editItem('w_house', w_house, i)"
              color="primary"
              type="border"
              icon="edit"
              size="small"
              class="ml-5"
            ></vs-button>
          </vs-row>
        </vs-list-item>

        <vs-divider color="success" icon="check"></vs-divider>
        <!-- <vs-list-header title="Positions"></vs-list-header>
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
          v-for="(position, i) in business.pos"
          :key="i"
        >
          <vs-row>
            <vs-button
              type="border"
              color="danger"
              icon="delete"
              size="small"
              @click="deleteItem('pos', position, i)"
            ></vs-button>
            <vs-button
              @click="editItem('pos', position, i)"
              color="primary"
              type="border"
              icon="edit"
              size="small"
              class="ml-5"
            ></vs-button>
          </vs-row>
        </vs-list-item> -->
        <!-- <vs-list-header title="Brand Types"></vs-list-header>
        <vs-list-item
          title="Brand Types"
          subtitle="You will set Brand Types"
          class="mb-5"
        >
          <vs-row>
            <vs-input v-model="brand" name="company" />
            <vs-button @click="save('brand')">+</vs-button>
          </vs-row>
        </vs-list-item>
        <vs-list-item
          :title="brand"
          v-for="(brand, i) in business.brand"
          :key="i"
        >
          <vs-button
            type="border"
            color="danger"
            icon="delete"
            size="small"
            @click="deleteItem('brand', brand, i)"
          ></vs-button>
        </vs-list-item>
        <vs-divider color="success" icon="check"></vs-divider> -->
        <vs-list-header title="Brands"></vs-list-header>
        <vs-list-item
          title="Add Brand"
          subtitle="These are the Brands of your Products"
          class="mb-5"
        >
          <vs-row>
            <vs-input v-model="brand" name="brand" />
            <vs-button @click="save('brand')">+</vs-button>
          </vs-row>
        </vs-list-item>
        <vs-list-item
          :title="brand"
          v-for="(brand, i) in business.brand"
          :key="i"
        >
          <vs-row>
            <vs-button
              type="border"
              color="danger"
              icon="delete"
              size="small"
              @click="deleteItem('brand', brand, i)"
            ></vs-button>
            <!-- <vs-button
              @click="editItem('brand', brand, i)"
              color="primary"
              type="border"
              icon="edit"
              size="small"
              class="ml-5"
            ></vs-button> -->
          </vs-row>
        </vs-list-item>

        <vs-divider color="success" icon="check"></vs-divider>

        <vs-list-header title="UOM"></vs-list-header>
        <vs-list-item
          title="Add UOM"
          subtitle="These are the Units of Measure of your Products/Business"
          class="mb-5"
        >
          <vs-row>
            <vs-input v-model="uom" name="uom" />
            <vs-button @click="save('uom')">+</vs-button>
          </vs-row>
        </vs-list-item>
        <vs-list-item :title="uom" v-for="(uom, i) in business.uom" :key="i">
          <vs-row>
            <vs-button
              type="border"
              color="danger"
              icon="delete"
              size="small"
              @click="deleteItem('uom', uom, i)"
            ></vs-button>
            <!-- <vs-button
              @click="editItem('brand', brand, i)"
              color="primary"
              type="border"
              icon="edit"
              size="small"
              class="ml-5"
            ></vs-button> -->
          </vs-row>
        </vs-list-item>

        <vs-divider color="success" icon="check"></vs-divider>
      </vs-list>

      <div id="user-edit-tab-info">
        <!-- <vs-popup
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
        </vs-popup> -->

        <vs-popup
          class="holamundo"
          :title="selectedWH.w_house"
          :active.sync="popupWH"
          style="z-index: 1000"
        >
          <div class="mt-4">
            <div class="mx-8 mb-8">
              <ul>
                <li><b>Email:</b> {{ selectedWH.email }}</li>
                <li><b>Website:</b> {{ selectedWH.website }}</li>
                <li><b>Phone:</b> {{ selectedWH.phone }}</li>
                <li><b>Addr:</b> {{ selectedWH.for_address }}</li>
              </ul>
            </div>
            <label class="vs-input--label"
              >Please fill in Warehouse details:</label
            >

            <FromGenerator
              :schema="w_houseForm"
              v-model="formData"
              class="p-6"
            />
          </div>
          <div class="vx-row">
            <div class="w-full vx-col">
              <div class="flex flex-wrap items-center justify-end mt-8">
                <vs-button class="mt-2 ml-auto" @click="save_changes('w_house')"
                  >Save Changes</vs-button
                >
                <vs-button
                  class="mt-2 ml-4"
                  type="border"
                  color="warning"
                  @click="popupWH = !popupWH"
                  >Cancel</vs-button
                >
              </div>
            </div>
          </div>
        </vs-popup>
      </div>
    </client-only>
  </div>
</template>

<script>
import firebase from 'firebase'
import vSelect from 'vue-select'
import moment from 'moment'

export default {
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
      popupWH: false,
      popupPosition: false,

      wh_types: '',
      brand: '',
      uom: '',
      groupPosition: '',
      w_house: '',
      selectedWH: {},
      selectedPosition: {},
      formData: {},

      data_local: JSON.parse(JSON.stringify(this.data)),
    }
  },

  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    w_houseForm() {
      return [
        {
          title: 'SelectList',
          name: 'wh_types',
          multi: false,
          label: 'Warehouse Type',
          options: this.business.wh_types,
        },
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
      ]
    },
  },
  methods: {
    save_changes(type) {
      let vm = this
      let collection = ''
      if (type === 'w_house') {
        collection = 'w_house'

        console.log('form', vm.formData)

        this.$fireStore
          .collection('business')
          .doc(vm.business.b_uid)
          .collection('w_house')
          .doc(vm.selectedWH.w_house)
          .update({
            w_house: vm.selectedWH.w_house,
            wh_types: vm.formData.wh_types,
            email: vm.formData.Email,
            phone: vm.formData.Phone,
            website: vm.formData.Website,
            adr_address: vm.formData.Address.addr_html,
            for_address: vm.formData.Address.for_address,
            addr_url: vm.formData.Address.addr_url,
            vicinity: vm.formData.Address.vicinity,
            lat: vm.formData.Address.lat,
            lng: vm.formData.Address.lng,

            geo1: vm.formData.Address.geo1,
            geo2: vm.formData.Address.geo2,
            geo3: vm.formData.Address.geo3,
            geo4: vm.formData.Address.geo4,
            geo5: vm.formData.Address.geo5,
            geo6: vm.formData.Address.geo6,
            geo7: vm.formData.Address.geo7,
            geo8: vm.formData.Address.geo8,
            geo9: vm.formData.Address.geo9,
            date: moment().format('DD-MM-YYYY'),
            month: moment().format('MM-YYYY'),
            desc: vm.formData.Description,
            t_stamp: Date.now(),
          })
          .then(() => {
            vm.popupWH = false
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
      if (type === 'w_house') {
        collection = 'w_house'
        this.$fireStore
          .collection('business')

          .doc(vm.business.b_uid)
          .collection('w_house')
          .doc(data)
          .get()
          .then(function (doc) {
            if (doc.exists) {
              vm.selectedWH = doc.data()
              vm.selectedWH.id = doc.id
              vm.popupWH = true
            } else {
              vm.$fireStore
                .collection('business')

                .doc(vm.business.b_uid)
                .collection('w_house')
                .doc(data)
                .set({
                  w_house: data,
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
      if (type === 'wh_types') {
        collection = 'wh_types'
      } else if (type === 'w_house') {
        collection = 'w_house'
        vm.deletItemInfo(collection, data)
      } else if (type === 'brand') {
        collection = 'brand'
        vm.deletItemInfo(collection, data)
      } else if (type === 'uom') {
        collection = 'uom'
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
      if (type === 'wh_types') {
        collection = 'wh_types'
        data = vm.wh_types
      } else if (type === 'w_house') {
        collection = 'w_house'
        data = vm.w_house
      } else if (type === 'brand') {
        collection = 'brand'
        data = vm.brand
      } else if (type === 'uom') {
        collection = 'uom'
        data = vm.uom
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

      if (type === 'wh_types') {
        if (business.wh_types) {
          business.wh_types.push(value)
        } else {
          business.wh_types = []
          business.wh_types.push(value)
        }
      } else if (type === 'w_house') {
        if (business.wh_types) {
          business.w_house.push(value)
        } else {
          business.w_house = []
          business.w_house.push(value)
        }
      } else if (type === 'brand') {
        if (business.brand) {
          business.brand.push(value)
        } else {
          business.brand = []
          business.brand.push(value)
        }
      } else if (type === 'uom') {
        if (business.uom) {
          business.uom.push(value)
        } else {
          business.uom = []
          business.uom.push(value)
        }
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

      if (type === 'wh_types') {
        items = business.wh_types
        const filteredItems = items
          .slice(0, i)
          .concat(items.slice(i + 1, items.length))
        business.wh_types = filteredItems
      } else if (type === 'w_house') {
        items = business.w_house
        const filteredItems = items
          .slice(0, i)
          .concat(items.slice(i + 1, items.length))
        business.w_house = filteredItems
      } else if (type === 'brand') {
        items = business.brand
        const filteredItems = items
          .slice(0, i)
          .concat(items.slice(i + 1, items.length))
        business.brand = filteredItems
      } else if (type === 'uom') {
        items = business.uom
        const filteredItems = items
          .slice(0, i)
          .concat(items.slice(i + 1, items.length))
        business.uom = filteredItems
      }
      console.log('delete', business)
      this.$store.commit('business/UPDATE_BUSINESS_INFO', business)
    },
  },
}
</script>
