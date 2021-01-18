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
          <h1 class="mb-1 text-white">Events</h1>
          <h2 class="text-xl leading-tight text-white font-semibild">
            Create different events for your Calendar
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
                  @click="$router.push(`/AppsEvents/${$route.params.id}`)"
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

              <UploadCategory :schema="schemas" :item="items" />
            </div>
          </div>
          <div class="flex flex-row items-center">
            <vs-tooltip text="Drawingboard available on call" position="top">
              <vs-checkbox v-model="drawinboard" class="text-white"
                >Drawingboard</vs-checkbox
              >
            </vs-tooltip>

            <vs-tooltip
              text="Host has to be present before call can start"
              position="top"
            >
              <vs-checkbox v-model="host">Host</vs-checkbox>
            </vs-tooltip>

            <vs-tooltip text="Only invitees can join" position="top">
              <vs-checkbox v-model="private_room">Private</vs-checkbox>
            </vs-tooltip>
            <vs-button @click="updateSettings">Update Settings</vs-button>
          </div>
        </div>
      </div>

      <p class="ml-4 text-gray-700">Categories</p>

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

      <div class="mt-3 con-example-images">
        <div v-for="(img, index) in filteredKB" :key="index"></div>
      </div>
      <client-only>
        <simpleCalendar :events="filteredKB" />
      </client-only>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'EventsSingle',
  components: {
    simpleCalendar: () =>
      process.client
        ? import('@/components/apps/calendar/MultiCalendar.vue')
        : null,
  },
  data() {
    return {
      item: { item: 'EventsSingle', title: 'Load Events', type: 'Single' },
      items: { item: 'Events', title: 'Load Folders', type: 'Category' },

      knowledgeBaseSearchQuery: '',
      kb: [],
      categories: [],
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
        window.location.origin + '/se/AppsEvents/' + this.$route.params.id

      return url
    },
    // categories() {
    //   return this.$store.state.app.categories
    // },
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
    schemas() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Title',
          type: 'text',
          label: 'Title',
          name: 'title',
        },
        {
          title: 'ColorSelect',
          placeholder: 'Color',
          type: 'text',
          label: 'Color',
          name: 'color',
        },
      ]
    },
    schema() {
      return [
        {
          title: 'SelectList',
          name: 'category',
          multi: false,
          label: 'Set Category',
          options: this.cats,
        },
        {
          title: 'TextInput',
          placeholder: 'Title',
          label: 'Title',
          name: 'title',
        },
        {
          title: 'TextArea',
          placeholder: 'Short Description',
          label: 'Short Description',
          name: 'desc',
        },
        {
          title: 'QuilEditor',
          name: 'description',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image Upload',
          label: 'Image Upload',
          name: 'img',
        },
        {
          title: 'DatePicker',
          name: 'date_start',
          label: 'Start Date',
        },
        {
          title: 'TimePicker',
          name: 'time_start',
          label: 'Time Start',
        },
        {
          title: 'DatePicker',
          name: 'date_end',
          label: 'End Date',
        },
        {
          title: 'TimePicker',
          name: 'time_end',
          label: 'Time End',
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
      console.log('item', this.item.item)
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

      let catRef = this.$fireStore
        .collection('apps')
        .doc('Events')
        .collection('category')
        .where('b_uid', '==', this.business.b_uid)

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
  max-height: 300px;
  overflow: auto;
}
</style>
