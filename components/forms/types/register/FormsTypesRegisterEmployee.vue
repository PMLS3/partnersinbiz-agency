<!-- =========================================================================================
  File Name: TheCustomizer.vue
  Description: Template Customizer
  Component Name: TheCustomizer
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div id="theme-customizer">
    <!-- Open Customizer Button -->
    <vs-button
      color="primary"
      type="filled"
      class="customizer-btn"
      icon-pack="feather"
      icon="icon-settings"
      @click.stop="active = !active"
      >Add Employee</vs-button
    >

    <!-- Customizer Content -->
    <vs-sidebar
      v-model="active"
      click-not-close
      hidden-background
      position-right
      class="items-no-padding"
    >
      <div class="h-full mx-4">
        <div
          class="customizer-header mt-6 flex items-center justify-between px-6"
        >
          <div>
            <!-- <h4>FARM WORKERS</h4> -->
            <small>Register your workers</small>
          </div>
          <feather-icon
            icon="XIcon"
            class="cursor-pointer"
            @click.stop="active = false"
          ></feather-icon>
        </div>

        <vs-divider class="mb-0" />
        <!-- Client Name -->
        <vs-input
          label="Client Name"
          name="contactperson"
          v-model="contactperson"
          class="w-full mt-5"
        />

        <!-- Client Surname -->
        <vs-input
          label="Client Surname"
          name="contactsurname"
          v-model="contactsurname"
          class="w-full mt-5"
        />

        <!-- Client Number -->
        <vs-input
          label="Contact number"
          name="number"
          v-model="number"
          type="number"
          class="w-full mt-5"
        />

        <!-- Client Email -->
        <vs-input
          label="Client email"
          name="email"
          v-model="email"
          type="email"
          class="w-full mt-5"
        />
        <div
          class="flex flex-wrap items-center justify-center p-6"
          slot="footer"
        >
          <vs-button class="mr-6" @click="newEmployee">Add Employee</vs-button>
          <vs-button
            type="border"
            color="danger"
            @click="isSidebarActiveLocal = false"
            >Cancel</vs-button
          >
        </div>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  components: {},
  data() {
    return {
      active: false,
      contactperson: '',
      contactsurname: '',
      email: '',
      number: '',
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
  },
  methods: {
    newEmployee() {
      let vm = this

      this.$fireAuth
        .createUserWithEmailAndPassword(this.email, this.email)
        .then((cred) => {
          this.$fireStore
            .collection('apps')
            .doc('users')
            .collection(this.business.b_uid)
            .doc('info')
            .collection('general')
            .doc(cred.user.uid)
            .set({
              status: 'Active',
              online_status: 'Online',
              role: 'Staff',
              uid: cred.user.uid,
              display_name: this.contactperson,
              avatar: '',
              email: this.email,
              name: this.contactperson,
              surname: this.contactsurname,
              company: this.business.b_name,
              number: this.number,
              position: [],
              branch: [],
              p_notes: [],
              verified: false,
              last_active: moment().format('DD-MM-YYYY'),
              created_month: moment().format('DD-MM-YYYY'),
              timestamp: Date.now(),
            })
            .then((cred) => {
              console.log('setting')
              let general = vm.$fireStore
                .collection('user')
                .doc('info')
                .collection('general')
                .doc(cred.user.uid)

              general.set({
                status: 'online',
                uid: cred.user.uid,
                display_name: vm.contactperson,
                avatar: '',
                number: vm.number,
                email: vm.email,
                name: vm.contactperson,
                surname: vm.contactsurname,
                last_active: moment().format('DD-MM-YYYY'),
                created_month: moment().format('DD-MM-YYYY'),
                timestamp: Date.now(),
              })
            })
            .then((cred) => {
              const docRef = this.$fireStore
                .collection('user')
                .doc('apps')
                .collection(uid)
                .doc(vm.business.b_uid)

              return docRef.set({
                b_uid: vm.business.b_uid,
                uid: uid,
                b_name: vm.business.b_name,
                unique_name: unique_name,
                logo: logo,
                industry: industry,
                contact_person: vm.contactperson,
                contact_surname: vm.contactsurname,
                contact_company: vm.business.b_name,
                contact_email: vm.email,
                contact_number: vm.number,
                created_month: moment().format('DD-MM-YYYY'),
                timestamp: Date.now(),
              })
            })
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
#theme-customizer {
  .vs-sidebar {
    position: fixed;
    z-index: 52000;
    width: 400px;
    max-width: 90vw;
    // @apply shadow-lg;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
      0 5px 15px 0 rgba(0, 0, 0, 0.08);
  }
}

.customizer-btn {
  position: fixed;
  top: 50%;
  right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 50000;

  .vs-icon {
    animation: spin 1.5s linear infinite;
  }
}

.scroll-area--customizer {
  height: calc(100% - 5rem);
}
</style>
