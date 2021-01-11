<!-- =========================================================================================
  File Name: UserList.vue
  Description: User List page
  ----------------------------------------------------------------------------------------
TODO opening balance too books, set a way to link 'customers/users', add for individual, stats on month/day
========================================================================================== -->

<template>
  <div parent="body" default-index="1" color="primary" spacer>
    <div class="p-6">
      <vs-radio v-model="reg_type" vs-value="company">Company</vs-radio>
      <vs-radio v-model="reg_type" vs-value="individual">Individual</vs-radio>
      <FormsTypesPersonPrimaryContact
        class="mt-8"
        title="Primary Contact"
        subtitle="Please give main contact person for Company"
      />
      <br />
      <vs-divider v-if="reg_type == 'company'"></vs-divider>
      <br />
      <FormsTypesBusinessDetails v-if="reg_type == 'company'" />
      <br />
      <vs-divider></vs-divider>
      <br />

      <vs-tabs alignment="fixed" v-if="reg_type == 'company'">
        <vs-tab label="More Details">
          <div>
            <FormsTypesBusinessOther />
          </div>
        </vs-tab>
        <vs-tab label="Address">
          <div>
            <vs-radio v-model="addr" vs-value="search">Search</vs-radio>
            <vs-radio v-model="addr" vs-value="manual">Manual</vs-radio>
            <FormsTypesAddAddress v-if="addr == 'search'" />
            <FormsTypesAddAddressMan v-if="addr == 'manual'" />
          </div>
        </vs-tab>
        <vs-tab label="Branches">
          <div>
            <FormsTypesBranchMulti />
          </div>
        </vs-tab>
        <vs-tab label="Contact Persons">
          <div>
            <FormsTypesPersonContact />
          </div>
        </vs-tab>
        <vs-tab label="Social">
          <div>
            <FormsTypesSocial />
          </div>
        </vs-tab>
      </vs-tabs>
      <vs-tabs alignment="fixed" v-else>
        <vs-tab label="More Details">
          <div>
            <FormsTypesBusinessOther />
          </div>
        </vs-tab>
        <vs-tab label="Address">
          <div>
            <vs-radio v-model="addr" vs-value="search">Search</vs-radio>
            <vs-radio v-model="addr" vs-value="manual">Manual</vs-radio>
            <FormsTypesAddAddress v-if="addr == 'search'" />
            <FormsTypesAddAddressMan v-if="addr == 'manual'" />
          </div>
        </vs-tab>
        <vs-tab label="Social">
          <div>
            <FormsTypesSocial />
          </div>
        </vs-tab>
      </vs-tabs>
    </div>
    <vs-popup
      class="holamundo h-40"
      title="Branch Needed"
      :active.sync="popupActivo"
    >
      <v-select
        label="Branch"
        placeholder="Branch"
        class="my-2 mx-2"
        v-model="selectedBranch"
        :options="branched"
      ></v-select>
      <vs-button @click="popupActivo = false" v-if="selectedBranch"
        >Select</vs-button
      >
    </vs-popup>
    <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
      <vs-button class="mr-6" @click="newBusiness">Add Detials</vs-button>
      <vs-button
        type="border"
        color="danger"
        @click="isSidebarActiveLocal = false"
        >Cancel</vs-button
      >
    </div>
  </div>
</template>

<script>
import moment from 'moment'
// import PrimaryContact from '@/components/forms/forms/person/primary_contact.vue'
// import BusinessDetails from '@/components/forms/forms/business/business_details.vue'
// import BusinessOther from '@/components/forms/forms/business/business_other.vue'
// import Address from '@/components/forms/forms/address/addAddress.vue'
// import AddressMan from '@/components/forms/forms/address/addAddressMan.vue'
// import Social from '@/components/forms/forms/social/index.vue'
// import Branch from '@/components/forms/forms/branch/multi.vue'
// import ContactPersons from '@/components/forms/forms/person/contact_persons.vue'
import vSelect from 'vue-select'
import firebase from 'firebase'

export default {
  props: ['branch'],
  components: {
    // BusinessOther: () =>
    //   process.client
    //     ? import('@/components/forms/forms/business/business_other.vue')
    //     : null,
    // PrimaryContact: () =>
    //   process.client
    //     ? import('@/components/forms/forms/person/primary_contact.vue')
    //     : null,
    // BusinessDetails: () =>
    //   process.client
    //     ? import('@/components/forms/forms/business/business_details.vue')
    //     : null,
    // Address: () =>
    //   process.client
    //     ? import('@/components/forms/forms/address/addAddress.vue')
    //     : null,
    // AddressMan: () =>
    //   process.client
    //     ? import('@/components/forms/forms/address/addAddressMan.vue')
    //     : null,
    // ContactPersons: () =>
    //   process.client
    //     ? import('@/components/forms/forms/person/contact_persons.vue')
    //     : null,
    // Social: () =>
    //   process.client
    //     ? import('@/components/forms/forms/social/index.vue')
    //     : null,
    // Branch: () =>
    //   process.client
    //     ? import('@/components/forms/forms/branch/multi.vue')
    //     : null,
    vSelect,
  },
  data() {
    return {
      addr: 'search',
      reg_type: 'company',
      selectedBranch: '',
      popupActivo: false,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    }
  },
  watch: {
    branch: function () {
      this.selectedBranch = this.branch
    },
  },

  computed: {
    activeUserInfo() {
      return this.$store.state.user.active_user
    },
    business() {
      return this.$store.state.business.active_business
    },
    branched() {
      return this.business.branches
    },
    google_place() {
      return this.$store.getters['google/google_place']
    },
    google_marker() {
      return this.$store.getters['google/google_marker']
    },
    primary_contact() {
      return this.$store.state.form.contact_primary
    },
    business_details() {
      return this.$store.state.form.business_details
    },
    business_other() {
      return this.$store.state.form.business_other
    },
    address_man() {
      return this.$store.state.form.address
    },
    address_auto() {
      let addr = { ...this.google_place, ...this.google_marker }
      return addr
    },
    contact_person() {
      return this.$store.state.form.contact_person
    },
    social() {
      return this.$store.state.form.social
    },
    branches() {
      return this.$store.state.form.branch
    },
  },
  methods: {
    newBusiness() {
      let vm = this

      // See if user selected a branch
      if (vm.selectedBranch) {
        // Is the upload a Company or Individual
        if (vm.reg_type == 'company') {
          // Is business details filled in
          if (vm.business_details.b_name) {
            const uniqueName = vm.business_details.b_name
              .toLowerCase()
              .replace(/\s/g, '_')

            console.log('un', uniqueName)
            vm.checkDuplicates(uniqueName)
          }
        } else {
          vm.busDetails()
        }
      } else {
        vm.popupActivo = true
      }
    },
    checkDuplicates(uniqueName) {
      let vm = this

      // Check for possible duplication on company name
      vm.$fireStore
        .collection('apps')
        .doc('crm')
        .collection(vm.business.b_uid)
        .doc('companies')
        .collection('companies')
        .where('un_name', '==', uniqueName)
        .get()
        .then(function (doc) {
          // If doc exists notify user
          if (doc.exists) {
            vm.$vs.dialog({
              type: 'confirm',
              color: 'danger',
              title: `Confirm`,
              text:
                'Possible duplication, click Accept to continue or cancel to exit',
              accept: vm.addDocument,
            })
          } else {
            // if doc doesnt exist proceed
            vm.addDocument(uniqueName)
          }
        })
        .catch(function (error) {
          vm.errorDatabase(error)
        })
    },
    addDocument(uniqueName) {
      this.$vs.loading({ color: 'primary', type: 'radius' })
      let business
      let vm = this

      if (this.business_other) {
        business = { ...this.business_details, ...this.business_other }
      } else {
        business = this.business_details
      }

      this.$fireStore
        .collection('apps')
        .doc('crm')
        .collection(this.business.b_uid)
        .doc('companies')
        .collection('companies')
        .add(business)
        .then(function (docRef) {
          vm.addAll(docRef.id)
        })
        .catch(function (error) {
          vm.errorDatabase(error)
        })
    },
    contactPeronsAdd(compID) {
      const contactsSet = this.$fireStore
        .collection('apps')
        .doc('crm')
        .collection(this.business.b_uid)
        .doc('companies')
        .collection('customers')

      for (let i = 0; i < this.contact_person.length; i++) {
        let contact = this.contact_person[i]
        contact.comp_uid = compID
        contact.owner_branch = this.selectedBranch
        contact.owner_uid = this.activeUserInfo.uid
        contact.owner_disp_name = this.activeUserInfo.disp_name
        contact.comp_name = this.business_details.b_name
        contactsSet.add(contact)
      }
    },
    branchAdd(compID) {
      const branchSet = this.$fireStore
        .collection('apps')
        .doc('crm')
        .collection(this.business.b_uid)
        .doc('companies')
        .collection('branches')

      for (let i = 0; i < this.branches.length; i++) {
        let branch = this.branches[i]
        branch.comp_uid = compID
        branch.comp_name = this.business_details.b_name
        branch.owner_branch = this.selectedBranch
        branch.owner_disp_name = this.activeUserInfo.disp_name
        branch.owner_uid = this.activeUserInfo.uid
        branchSet.add(branch)
      }
    },
    addAll(compID) {
      let vm = this

      // setting stats totals

      let contacts_total = 0
      let branch_total = 0
      let company_total = 1
      let full_upload = this.business_details

      full_upload.comp_uid = compID
      full_upload.owner_branch = this.selectedBranch
      full_upload.owner_uid = this.activeUserInfo.uid
      full_upload.owner_disp_name = this.activeUserInfo.disp_name
      if (this.business_other) {
        full_upload = { ...full_upload, ...this.business_other }
      }
      if (this.contact_person) {
        contacts_total = contacts_total + this.contact_person.length
        full_upload.contacts = this.contact_person
        vm.contactPeronsAdd(compID)
      }
      if (this.branch) {
        branch_total = branch_total + this.branches.length
        full_upload.branches = this.branch
      }
      vm.branchAdd(compID)
      // setting data to be uploaded

      this.$fireStore
        .collection('apps')
        .doc('crm')
        .collection(this.business.b_uid)
        .doc('companies')
        .collection('companies')
        .doc(compID)
        .update({
          comp_uid: compID,
        })
        .then(() => {
          let comp_uid = {
            comp_uid: compID,
          }

          let p_contact
          let address
          let social
          let compBranch = this.business_details
          compBranch.comp_uid = compID
          compBranch.hq = true
          compBranch.comp_name = this.business_details.b_name
          compBranch.owner_branch = this.selectedBranch
          compBranch.owner_disp_name = this.activeUserInfo.disp_name
          compBranch.owner_uid = this.activeUserInfo.uid

          if (vm.primary_contact) {
            p_contact = vm.primary_contact
            p_contact.primary = true
            p_contact.comp_uid = compID
            p_contact.comp_name = this.business_details.b_name
            p_contact.owner_branch = this.selectedBranch
            p_contact.owner_uid = this.activeUserInfo.uid
            p_contact.owner_disp_name = this.activeUserInfo.disp_name
            contacts_total = contacts_total + 1

            full_upload.primary_contact = p_contact
          }

          if (this.addr == 'search') {
            if (this.address_auto) {
              address = this.address_auto
              address.comp_uid = compID
              full_upload = { ...full_upload, ...address }
            }
          } else {
            if (this.address_man) {
              address = this.address_man
              address.comp_uid = compID
              full_upload = { ...full_upload, ...address }
            }
          }

          if (this.social) {
            social = this.social
            social.comp_uid = compID
            full_upload = { ...full_upload, ...social }
          }

          const primaryContact = this.$fireStore
            .collection('apps')
            .doc('crm')
            .collection(this.business.b_uid)
            .doc('companies')
            .collection('customers')
            .doc(compID)

          const address_set = this.$fireStore
            .collection('apps')
            .doc('crm')
            .collection(this.business.b_uid)
            .doc('companies')
            .collection('address')
            .doc(compID)

          const social_set = this.$fireStore
            .collection('apps')
            .doc('crm')
            .collection(this.business.b_uid)
            .doc('companies')
            .collection('social')
            .doc(compID)

          const branchSet = this.$fireStore
            .collection('apps')
            .doc('crm')
            .collection(this.business.b_uid)
            .doc('companies')
            .collection('branches')
            .doc(compID)

          const full_details = this.$fireStore
            .collection('apps')
            .doc('crm')
            .collection(this.business.b_uid)
            .doc('companies')
            .collection('full_details')
            .doc(compID)

          const stats = this.$fireStore.collection('data').doc('stats')

          const bus_stats = this.$fireStore
            .collection('apps')
            .doc('crm')
            .collection(this.business.b_uid)
            .doc('stats')
            .collection('company')
            .doc(this.business.b_uid)

          const branch_stats = this.$fireStore
            .collection('apps')
            .doc('crm')
            .collection(this.business.b_uid)
            .doc('stats')
            .collection('branch')
            .doc(this.selectedBranch)

          const user_stats = this.$fireStore
            .collection('apps')
            .doc('crm')
            .collection(this.business.b_uid)
            .doc('stats')
            .collection('user')
            .doc(this.activeUserInfo.uid)

          const incrementComp = firebase.firestore.FieldValue.increment(1)
          const incrementBranch = firebase.firestore.FieldValue.increment(
            branch_total
          )

          const incrementUsers = firebase.firestore.FieldValue.increment(
            contacts_total
          )

          const batch = this.$fireStore.batch()

          if (p_contact) {
            batch.set(primaryContact, p_contact)
          }

          if (address) {
            batch.set(address_set, address)
          }

          if (social) {
            batch.set(social_set, social)
          }

          batch.set(full_details, full_upload)

          batch.set(branchSet, compBranch)

          batch.set(
            stats,
            {
              companies: incrementComp,
              branches: incrementBranch,
              cusomters: incrementUsers,
            },
            { merge: true }
          )
          batch.set(
            bus_stats,
            {
              companies: incrementComp,
              branches: incrementBranch,
              cusomters: incrementUsers,
            },
            { merge: true }
          )
          batch.set(
            branch_stats,
            {
              companies: incrementComp,
              branches: incrementBranch,
              cusomters: incrementUsers,
            },
            { merge: true }
          )
          batch.set(
            user_stats,
            {
              companies: incrementComp,
              branches: incrementBranch,
              cusomters: incrementUsers,
            },
            { merge: true }
          )

          batch.commit().then(() => {
            this.successUpload()
          })
        })
    },
    busDetails() {
      this.$vs.notify({
        color: 'warning',
        title: 'Insufficient Data',
        text: 'Please fill in Business Details',
      })
    },
    successUpload() {
      this.$vs.loading.close()
      let quotes = this.$store.state.app.motivational_quotes
      let num = Math.floor(Math.random() * 55)
      let quote = quotes[num]
      this.$vs.notify({
        color: 'success',
        title: 'Success',
        text: `${quote}`,
      })
    },
    errorDatabase(err) {
      this.$vs.notify({
        color: 'warning',
        title: 'Error',
        text: `${err}`,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.text-style {
  color: black;
  text-align: center;
}

.scroll-area--data-list-add-new {
  height: calc(100% - 4.3rem);
}
</style>
