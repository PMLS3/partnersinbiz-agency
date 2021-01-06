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
          <h1 class="mb-1 text-white">Videos</h1>
          <h2 class="text-xl font-semibild text-white leading-tight">
            Upload all your Videos
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
          <div class="py-2 flex  justify-between">
            <div class="flex items-center">
              <p class="text-white">
                {{ motivational_quotes }}
              </p>
            </div>

            <apps-load :schema="schema" :item="item" />
          </div>
        </div>
      </div>
      <div class="vx-row ml-2">
        <div
          class="vx-col w-1/6 sm:w-1/6 md:w-1/10 xl:1/10"
          v-for="(doc, index) in filteredKB"
          :key="index"
        >
          <doc-type :doc="doc" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'VideosSingle',
  components: {
    docType: () =>
      process.client
        ? import('@/components/ui-elements/documents/doctype.vue')
        : null,
    appsLoad: () =>
      process.client
        ? import('@/components/dashboard/apps_load/index.vue')
        : null
  },
  data() {
    return {
      item: { item: 'VideosSingle', title: 'Load Images', type: 'Single' },
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
          placeholder: 'Video Title',
          type: 'text',
          label: 'Video Title',
          name: 'title'
        },

        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description'
        },
        {
          title: 'DocumentUpload',
          placeholder: 'Video',
          type: 'text',
          label: 'Video',
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
        .where('id', '==', this.$route.params.id)

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

              url: doc.data().url
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
.con-example-images {
  max-height: 500px;
  overflow: auto;
}
</style>
