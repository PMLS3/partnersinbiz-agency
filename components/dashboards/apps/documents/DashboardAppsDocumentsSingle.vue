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
          <h1 class="mb-1 text-white">Documents</h1>
          <h2 class="text-xl leading-tight text-white font-semibild">
            Create different Documents
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

            <div class="flex flex-row">
              <vs-tooltip text="View Component" position="top">
                <vs-button
                  class="ml-1"
                  icon="preview"
                  @click="$router.push(`/AppsDocuments/${$route.params.id}`)"
                ></vs-button>
              </vs-tooltip>
              <!-- <UploadApps :schema="schema" :item="item" /> -->
              <!-- <vs-input v-model="userUrl" class="inline-flex mb-2 mr-2" /> -->
              <vs-tooltip text="Copy link to send on" position="top">
                <vs-button
                  v-clipboard:copy="userUrl"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  icon="content_copy"
                  class="ml-1"
                >
                </vs-button>
              </vs-tooltip>

              <UploadApps :schema="schema" :item="item" />
            </div>
          </div>
        </div>
      </div>
      <div class="ml-2 vx-row">
        <div
          class="w-1/6 vx-col sm:w-1/6 md:w-1/10 xl:1/10"
          v-for="(doc, index) in filteredKB"
          :key="index"
        >
          <UiDocumentsDocType :doc="doc" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'DocumentsSingle',
  components: {},
  data() {
    return {
      item: { item: 'DocumentsSingle', title: 'Load Images', type: 'Single' },
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
    userUrl() {
      var url =
        window.location.origin + '/se/AppsDocuments/' + this.$route.params.id

      return url
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
          placeholder: 'Doc Name',
          type: 'text',
          label: 'Doc Name',
          name: 'title',
        },

        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'DocumentUpload',
          placeholder: 'Document',
          type: 'text',
          label: 'Document',
          name: 'url',
        },
      ]
    },
  },
  created() {
    if (process.client) {
      let vm = this
      let ref = this.$fireStore
        .collection('apps')
        .doc(this.item.item)
        .collection('app')
        .where('id', '==', this.$route.params.id)

      ref.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            let doc = change.doc
            let data = doc.data()
            data.id = doc.id
            vm.kb.push({
              id: doc.id,
              title: doc.data().title,
              description: doc.data().desc,

              url: doc.data().url,
            })
          }
        })
      })
    }
  },
  methods: {
    updateSettings() {
      let payload = {}

      this.$fireStore
        .collection('apps')
        .doc('VidChatCat')
        .collection('app')
        .doc(this.$route.params.id)
        .update(payload)
        .then(() => {
          vm.success()
        })
    },
    success() {
      this.$vs.notify({
        title: 'Success',
        text: 'Call updated',
        color: 'success',
      })
    },
    onCopy() {
      this.$vs.notify({
        title: 'Success',
        text: 'Text copied successfully',
        color: 'success',
        iconPack: 'feather',
        position: 'top-center',
        icon: 'icon-check-circle',
      })
    },
    onError() {
      this.$vs.notify({
        title: 'Failed',
        text: 'Error in copying text',
        color: 'danger',
        iconPack: 'feather',
        position: 'top-center',
        icon: 'icon-alert-circle',
      })
    },
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
