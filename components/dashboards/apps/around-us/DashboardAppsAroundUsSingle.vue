<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="knowledge-base-page">
    <client-only>
      <!-- JUMBOTRON -->
      <div class="knowledge-base-jumbotron">
        <div
          class="p-8 rounded-lg knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 mb-base"
        >
          <h1 class="mb-1 text-white">Around Us Items</h1>
          <h2 class="text-xl leading-tight text-white font-semibild">
            Create different places with GPS Locations
          </h2>

          <vs-input
            icon-no-border
            placeholder="Search Topic or Keyword"
            v-model="knowledgeBaseSearchQuery"
            icon-pack="feather"
            icon="icon-search"
            size="large"
            class="w-full mt-6"
          />
          <div class="flex justify-between py-2">
            <div class="flex items-center">
              <p class="text-white">
                {{ motivational_quotes }}
              </p>
            </div>

            <apps-load :schema="schema" :item="item" />
          </div>
        </div>
      </div>
      <div class="vx-row">
        <div
          class="w-full vx-col md:w-1/3 sm:w-1/2 mb-base min-h-250"
          v-for="item in filteredKB"
          :key="item.id"
        >
          <contacts-card :contact="item" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'AroundUsSingle',
  components: {
    ContactsCard: () =>
      process.client
        ? import('@/components/ui-elements/card/contacts.vue')
        : null,
    appsLoad: () =>
      process.client
        ? import('@/components/dashboard/apps_load/index.vue')
        : null,
  },
  data() {
    return {
      item: { item: 'AroundUsSingle', title: 'Load Images', type: 'Single' },
      knowledgeBaseSearchQuery: '',
      kb: [],
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    main_user() {
      return this.$store.state.auth.main_user
    },
    reseller() {
      return this.$store.state.business.reseller_id
    },
    sub_reseller() {
      return this.$store.state.business.sub_sellers
    },

    motivational_quotes() {
      let num = Math.floor(Math.random() * 55)
      return this.$store.state.info.motivational_quotes[num]
    },
    filteredKB() {
      return this.kb.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(this.knowledgeBaseSearchQuery.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(this.knowledgeBaseSearchQuery.toLowerCase())
      )
    },

    schema() {
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
        {
          title: 'TextInput',
          type: 'number',
          placeholder: 'Contact Number',
          name: 'number',
          label: 'Contact Number',
          minValue: 0,
        },
        {
          title: 'TextInput',
          type: 'number',
          placeholder: 'Secondary Contact Number',
          name: 'number2',
          label: 'Secondary Contact Number',
          minValue: 0,
        },
        {
          title: 'TextInput',
          type: 'email',
          placeholder: 'Email',
          label: 'Email',
          name: 'email',
        },
        {
          title: 'Divider',
          name: 'Divider',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image Upload',
          label: 'Image Upload',
          name: 'img',
        },
        {
          title: 'Divider',
          name: 'Divider',
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'Divider',
          name: 'Divider',
        },
        {
          title: 'GoogleAddress',
          placeholder: 'Address',
          label: 'Address',
          name: 'addr',
        },
      ]
    },
  },
  created() {
    if (process.client) {
      let vm = this
      let ref = this.$fireStore
        .collection('apps')
        .doc('apps')
        .collection(this.item.item)
        .where('id', '==', this.$route.params.id)

      ref.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            let doc = change.doc
            let data = doc.data()
            data.id = doc.id
            vm.kb.push(data)
          }
        })
      })
    }
  },
}
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url('../../../../assets/images/background/night.jpeg');
  background-size: cover;
}
.con-example-images {
  max-height: 500px;
  overflow: auto;
}
</style>
