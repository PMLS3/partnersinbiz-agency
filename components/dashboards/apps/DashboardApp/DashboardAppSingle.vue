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
        <div class="p-8 pt-24 knowledge-base-jumbotron-content">
          <h1 class="mb-1 text-white">{{ item.title }}</h1>
          <h2 class="text-xl leading-tight text-white font-semibild">
            {{ item.sub_text }}
          </h2>

          <vs-input
            icon-no-border
            placeholder="Search Topic or Keyword"
            v-model="knowledgeBaseSearchQuery"
            icon-pack="feather"
            icon="icon-search"
            size="large"
            class="w-full mt-6"
            v-if="item.settings.search"
          />
          <div class="flex justify-between py-2">
            <div class="flex items-center">
              <p class="text-white">
                {{ motivational_quotes }}
              </p>
            </div>

            <div class="flex flex-row">
              <vs-tooltip text="Click to change data view" position="top">
                <vs-button
                  icon="chrome_reader_mode"
                  class="ml-1"
                  @click="viewSet = !viewSet"
                >
                </vs-button>
              </vs-tooltip>

              <vs-tooltip text="View Component" position="top">
                <vs-button
                  class="ml-1"
                  icon="preview"
                  @click="$router.push(`${item.url}${$route.params.id}`)"
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

              <UploadCategory
                :schema="schemas"
                :item="items"
                v-if="item.has_categories"
              />
            </div>
          </div>
          <div class="flex items-center" v-if="item.has_categories">
            <p class="ml-4 text-white">Categories:</p>

            <div class="mt-3 ml-4 vx-row">
              <vs-chip
                transparent
                closable
                :color="cat.color"
                close-icon="close"
                v-for="(cat, index) in categories"
                :key="index"
              >
                {{ cat.title }}
              </vs-chip>
            </div>
          </div>
          <div class="flex flex-row items-center">
            <vs-tooltip
              text="Drawingboard available on call"
              position="top"
              v-if="item.settings.drawingboard"
            >
              <vs-checkbox v-model="drawingboard" class="text-white"
                >Drawingboard</vs-checkbox
              >
            </vs-tooltip>

            <vs-tooltip
              text="Host has to be present before call can start"
              position="top"
              v-if="item.settings.host"
            >
              <vs-checkbox v-model="host">Host</vs-checkbox>
            </vs-tooltip>

            <vs-tooltip
              text="Only invitees can join"
              position="top"
              v-if="item.settings.private_room"
            >
              <vs-checkbox v-model="private_room">Private</vs-checkbox>
            </vs-tooltip>
          </div>
        </div>
      </div>

      <div class="mt-3 con-example-images" v-show="viewSet">
        <client-only>
          <MultiCalendar
            :events="filteredKB"
            v-if="item.display == 'calendar'"
          />
          <AppsAroundUs v-if="item.display == 'around'" />

          <AppsBlog v-if="item.display == 'blog'" />

          <AppsContacts v-if="item.display == 'contacts'" />

          <AppsEcommerce v-if="item.display == 'ecommerce'" />

          <AppsEmailPhoto v-if="item.display == 'email-photo'" />

          <AppsFanwall v-if="item.display == 'fanwall'" />

          <AppsImageGallery v-if="item.display == 'image-gallery'" />

          <AppsInfoTier v-if="item.display == 'info-tier'" />
          <AppsRealEstate v-if="item.display == 'real-estate'" />

          <AppsMailingList v-if="item.display == 'mailing-list'" class="p-4" />
          <AppsDocuments v-if="item.display == 'documents'" class="p-4" />
          <AppsLoyalty v-if="item.display == 'loyalty'" class="p-4" />

          <AppsVideos v-if="item.display == 'videos'" class="p-4" />
          <AppsMusic v-if="item.display == 'music'" class="p-4" />
          <AppsDrawingBoard v-if="item.display == 'drawingboard'" class="p-4" />
        </client-only>
      </div>
      <div v-show="!viewSet">
        <UiAgGridTableSingle
          :info="filteredKB"
          :item="item"
          :columnDefs="columnDefs"
        />
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'DashboardAppSingle',

  props: {
    item: {
      type: Object,
      default: () => {},
    },
    items: {
      type: Object,
      default: () => {},
    },
    schema: {
      type: Array,
      default: () => [],
    },
    schemas: {
      type: Array,
      default: () => [],
    },
    columnDefs: { type: Array, default: () => [] },
  },
  data() {
    return {
      knowledgeBaseSearchQuery: '',
      kb: [],
      categories: [],
      viewSet: false,
      created_time: false,
      drawingboard: false,
      host: false,
      private_room: false,
      popup: false,
      calendar_times: false,
      selected_view: false,
      adding_view: false,
    }
  },
  watch: {
    drawingboard() {
      let payload = {
        drawingboard: this.drawingboard,
      }
      this.updateSettings(payload)
    },
    host() {
      let payload = {
        host: this.host,
      }
      this.updateSettings(payload)
    },
    private_room() {
      let payload = {
        private_room: this.private_room,
      }
      this.updateSettings(payload)
    },
    popup() {
      let payload = {
        popup: this.popup,
      }
      this.updateSettings(payload)
    },
    calendar_times() {
      let payload = {
        calendar_times: this.calendar_times,
      }
      this.updateSettings(payload)
    },
    adding_view() {
      let payload = {
        adding_view: this.adding_view,
      }
      this.updateSettings(payload)
    },
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
        window.location.origin + '/se' + this.item.url + this.$route.params.id
      return url
    },
    parent_feature() {
      return this.$store.state.app.feature
    },

    cats() {
      let cats = []
      for (let i = 0; i < this.categories.length; i++) {
        cats.push(this.categories[i].title)
      }
      return cats
    },
    motivational_quotes() {
      let num = Math.floor(Math.random() * 55)
      return this.$store.state.info.motivational_quotes[num]
    },
    filteredKB() {
      return this.kb
      // .filter(
      //   (item) =>
      //     item.title
      //       .toLowerCase()
      //       .includes(this.knowledgeBaseSearchQuery.toLowerCase()) ||
      //     item.description
      //       .toLowerCase()
      //       .includes(this.knowledgeBaseSearchQuery.toLowerCase())
      // )
    },
  },
  created() {
    if (this.parent_feature.drawingboard) {
      this.drawingboard = this.parent_feature.drawingboard
    }
    if (this.parent_feature.host) {
      this.host = this.parent_feature.host
    }

    if (this.parent_feature.private_room) {
      this.private_room = this.parent_feature.private_room
    }

    if (process.client) {
      console.log('item', this.item.item)
      let vm = this
      if (this.item.display == 'calendar') {
        let ref = vm.$fireStore
          .collection('apps')
          .doc(vm.item.item)
          .collection('app')
          .where('id', '==', vm.$route.params.id)

        ref.onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              let doc = change.doc
              let data = doc.data()
              let datas = {
                start: `${doc.data().date_start} ${doc.data().time_start}`,
                end: `${doc.data().date_end} ${doc.data().time_end}`,
                title: doc.data().title,
                icon: 'shopping_cart', // Custom attribute.
                content: doc.data().desc,
                contentFull: doc.data().description,
              }
              data.id = doc.id
              vm.kb.push(datas)
            }
          })
        })
      } else {
        let ref = vm.$fireStore
          .collection('apps')
          .doc(vm.item.item)
          .collection('app')
          .where('id', '==', vm.$route.params.id)

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

      if (this.item.has_categories) {
        let catRef = vm.$fireStore
          .collection('apps')
          .doc(vm.items.item)
          .collection('category')
          .where('b_uid', '==', vm.business.b_uid)

        catRef.onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              let doc = change.doc
              let data = doc.data()
              data.id = doc.id
              vm.categories.push({
                id: doc.id,
                title: doc.data().title,
                color: doc.data().color,
              })
            }
          })
        })
        vm.$store.commit('app/CATEGORIES_SET', vm.categories)
      }
    }

    setTimeout(() => {
      this.created_time = true
    }, 2000)
  },
  methods: {
    updateSettings(payload) {
      if (this.created_time) {
        this.$fireStore
          .collection('apps')
          .doc(this.item.parent)
          .collection('app')
          .doc(this.$route.params.id)
          .update(payload)
          .then(() => {
            this.success()
          })
      }
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
  max-height: 300px;
  overflow: auto;
}
</style>
