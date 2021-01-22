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
          <div class="py-2 flex justify-between">
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
                  @click="$router.push(`/AppsVideoChat/${$route.params.id}`)"
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
      <!-- KNOWLEDGE BASE CARDS  -->
      <!-- <div class="vx-row">
        <div
          class="vx-col w-1/2 sm:w-1/2 md:w-1/3 xl:1/4"
          v-for="(img, index) in filteredKB"
          :key="index"
        >
          <img
            :src="img.url"
            alt="latest-upload"
            class="rounded mb-4 user-latest-image responsive"
          />
        </div> 
      </div>-->
      <div class="con-example-images">
        <vs-images alternating not-border-radius not-margin>
          <vs-image
            v-for="(img, index) in filteredKB"
            :key="index"
            :src="img.url"
          />
        </vs-images>
      </div>

      <!-- <div class="con-example-images">
        <vs-images>
          <vs-image v-for="(img, index) in filteredKB" :key="index" :src="img.url" />
        </vs-images>
      </div> -->
      <!-- <div class="vx-row">
        <div
          class="vx-col w-full md:w-1/3 sm:w-1/2 mb-base min-h-250"
          v-for="item in filteredKB"
          :key="item.id"
        >
          <img
            :src="img.url"
            alt="latest-upload"
            class="rounded mb-4 user-latest-image responsive"
          />
        </div>
      </div> -->
    </client-only>
  </div>
</template>

<script>
// import SimpleCard from '@/components/ui-elements/card/simple.vue'
// import appsCat from '@/components/dashboard/apps_cat/index.vue'

export default {
  name: 'Image-Category',
  components: {},
  data() {
    return {
      item: { item: 'ImgSingle', title: 'Load Images', type: 'Single' },
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
          placeholder: 'Gallery Name',
          type: 'text',
          label: 'Gallery Name',
          name: 'title',
        },

        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image',
          type: 'text',
          label: 'Image',
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
}
</script>

<style lang="scss" scoped>
.knowledge-base-jumbotron-content {
  background-image: url('../../../../assets/images/background/night.jpeg');
  background-size: cover;
}
.con-example-images {
  max-height: 500px;
  overflow: auto;
}
</style>
