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
          class="knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base"
        >
          <h1 class="mb-1 text-white">Image Gallery</h1>
          <h2 class="text-xl font-semibild text-white leading-tight">
            Create different Gallerys to keep your Images organized
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
          <div class="py-2 flex items-center justify-between">
            <div class="flex items-center">
              <p class="text-white">
                {{ motivational_quotes }}
              </p>
            </div>
            <div>
              <apps-load :schema="schema" :item="item" />
            </div>
          </div>
        </div>
      </div>

      <div class="vx-row">
        <div
          class="vx-col w-full md:w-1/3 sm:w-1/2 mb-base min-h-250"
          v-for="item in filteredKB"
          :key="item.id"
        >
          <simple-card :item="item" class="h-full"></simple-card>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Golf',
  components: {
    SimpleCard: () =>
      process.client
        ? import('@/components/ui-elements/card/simple.vue')
        : null,
    appsLoad: () =>
      process.client
        ? import('@/components/dashboard/apps_load/index.vue')
        : null
  },
  data() {
    return {
      item: { item: 'Golf', title: 'Load Folders', type: 'Category' },
      knowledgeBaseSearchQuery: '',
      kb: []
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
        item =>
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
          label: 'Name',
          name: 'name'
        },
        {
          title: 'TextInput',
          placeholder: 'Website',
          label: 'Website',
          name: 'website'
        },
        {
          title: 'NumberInput',
          placeholder: 'Contact Number',
          name: 'number',
          label: 'Contact Number',
          minValue: 0
        },
        {
          title: 'NumberInput',
          placeholder: 'Secondary Contact Number',
          name: 'number2',
          label: 'Secondary Contact Number',
          minValue: 0
        },
        {
          title: 'TextInput',
          placeholder: 'Email',
          label: 'Email',
          name: 'email'
        },
        {
          title: 'SelectList',
          name: 'category',
          multi: false,
          label: 'Distance',
          options: ['', 'Yards', 'Km']
        },
        {
          title: 'TextArea',
          placeholder: 'Description',
          label: 'Description',
          name: 'description'
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image',
          type: 'text',
          label: 'Image',
          name: 'url'
        }
      ]
    }
  },
  created() {
    if (process.client) {
      let vm = this
      let ref = this.$fireStore
        .collection('apps')
        .doc('apps')
        .collection(this.item.item)
        .where('b_uid', '==', this.business.b_uid)

      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            let doc = change.doc
            let data = doc.data()
            data.id = doc.id
            vm.kb.push({
              id: doc.id,
              title: doc.data().title,
              description: doc.data().desc,
              graphic: doc.data().url[0],
              url: `${window.location.pathname}/${doc.id}`
            })
          }
        })
      })
    }
  }
}
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url('../../../../assets/images/background/night.jpeg');
  background-size: cover;
}
</style>
