<template>
  <PerfectScrollbar :settings="settings">
    <div
      parent="body"
      default-index="1"
      color="primary"
      class="add-new-data-sidebar items-no-padding"
      spacer
    >
      <div class="p-6">
        <FormsTypesPaperTrailInvoice />
        <vs-divider color="success" icon="check"></vs-divider>
        <FormsTypesItemsAdd />
        <FormsTypesItemsTotals />
        <FormsTypesTermsAndConditions />
      </div>
      <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
        <vs-button class="mr-6" @click="newEstimate">Add Invoice</vs-button>
        <vs-button type="border" color="danger">Cancel</vs-button>
      </div>
    </div>
  </PerfectScrollbar>
</template>

<script>
import moment from 'moment'

export default {
  components: {
    // Invoice: () =>
    //   process.client
    //     ? import('@/components/forms/forms/paper_trail/invoice.vue')
    //     : null,
    // ItemsAdd: () =>
    //   process.client
    //     ? import('@/components/forms/forms/items/items_add.vue')
    //     : null,
    // ItemsTotals: () =>
    //   process.client
    //     ? import('@/components/forms/forms/items/items_totals.vue')
    //     : null,
    // TermsConditions: () =>
    //   process.client
    //     ? import('@/components/forms/forms/terms-and-conditions/index.vue')
    //     : null
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
  methods: {
    newEstimate() {},
  },

  computed: {
    activeUserInfo() {
      return this.$store.state.user.active_user
    },
    business() {
      return this.$store.state.business.active_business
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
