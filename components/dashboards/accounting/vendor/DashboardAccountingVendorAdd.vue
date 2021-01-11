<template>
  <div
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
  >
    <div class="p-6">
      <FormsTypesPersonPrimaryContact />
      title="Primary Contact" subtitle="Please give main contact person for
      Company" />
      <br />
      <vs-divider color="success" icon="check"></vs-divider>
      <br />
      <FormsTypesVendorDetails />
      <br />
      <vs-divider color="success" icon="check"></vs-divider>
      <br />

      <vs-tabs alignment="fixed">
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
        <vs-tab label="Contact Persons">
          <div>
            <FormsTypesPersonContact />
          </div>
        </vs-tab>
        <vs-tab label="Ecosistem">
          <div></div>
        </vs-tab>
      </vs-tabs>
    </div>
    <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
      <vs-button class="mr-6" @click="newBusiness">Add Company</vs-button>
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
// import VendorDetails from '@/components/forms/forms/vendor/vendor_details.vue'
// import BusinessOther from '@/components/forms/forms/business/business_other.vue'
// import Address from '@/components/forms/forms/address/addAddress.vue'
// import AddressMan from '@/components/forms/forms/address/addAddressMan.vue'

// import ContactPersons from '@/components/forms/forms/person/contact_persons.vue'
export default {
  components: {
    // BusinessOther,
    // PrimaryContact,
    // VendorDetails,
    // Address,
    // AddressMan,
    // ContactPersons
  },
  data() {
    return {
      addr: 'search',
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    }
  },

  computed: {
    currencies() {
      return this.$store.state.app.currencies
    },

    activeUserInfo() {
      return this.$store.state.user.active_user
    },
    business() {
      return this.$store.state.business.active_business
    },

    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if (!val) {
          this.$emit('closeSidebar')
          this.initValues()
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.text-style {
  color: black;
  text-align: center;
}
.add-new-data-sidebar {
  /deep/ .vs-sidebar--background {
    z-index: 52010;
  }

  /deep/ .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  height: calc(100% - 4.3rem);
}
</style>
