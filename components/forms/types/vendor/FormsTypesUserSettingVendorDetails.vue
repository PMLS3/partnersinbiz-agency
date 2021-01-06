<!-- =========================================================================================
  File Name: business_details.vue
  Description: Top level business details requirements
  Component Name: Business Details

  Submit to store: form/BUSINESS_DETAILS_SET  retrieve from store form/business_details
  ----------------------------------------------------------------------------------------

========================================================================================== -->
<template>
  <div>
    <!-- NAME -->
    <vs-input
      label="Business Name"
      name="b_name"
      v-model="business.v_name"
      class="w-full"
    />
    <!-- INDUSTRY -->
    <!-- 
    <p class="mt-5">Industry</p>
    <v-select
      class="w-full "
      v-model="business.industry"
      :options="categories"
    ></v-select> -->

    <vs-input
      label="Vendor Email"
      name="email"
      v-model="business.v_email"
      type="email"
      class="w-full mt-5"
    />

    <vs-input
      label="Vendor Number"
      name="number"
      v-model="business.v_number"
      type="email"
      class="w-full mt-5"
    />

    <vs-input
      label="Vendor Website"
      v-model="business.v_website"
      type="email"
      class="w-full mt-5"
    />

    <!-- DESCRIPTION -->
    <vs-textarea
      label="Description"
      v-model="business.description"
      class="w-full mt-5"
    />
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Vendor Details',

  components: {
    vSelect
  },
  data() {
    return {
      business: {
        description: '',
        v_number: '',
        v_email: '',
        v_name: '',
        v_website: ''
      },
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    }
  },
  watch: {
    business: {
      handler(val) {
        this.$store.commit('form/VENDOR_DETAILS_SET', this.business)
      },
      deep: true
    }
  },
  computed: {
    categories() {
      return this.$store.state.app.industries_available
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
      }
    }
  }
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
