<template>
  <div id="page-user-edit">
    <vs-card style="height: 100vh; width: 95%; margin: auto">
      <vs-tabs alignment="fixed" position="left">
        <vs-tab label="Page Builder">
          <vs-row vs-w="12">
            <h1>test</h1>
            <client-only>
              <!-- <components-edit /> -->

              <mainGrid :schema="component_list" />
            </client-only>
          </vs-row>
        </vs-tab>
        <vs-tab label="Pages">
          <div class="vx-row">
            <!-- <div
              class="vx-col w-full sm:w-1/3 lg:w-1/6 mb-base"
              v-for="(page, i) in pages"
              :key="i"
            >
              <vs-card>
                <vs-button @click="$router.push(`/pages/${page.page_name}`)">{{
                  page.page_name
                }}</vs-button>
                <div
                  class="profile-actions pointer-events-auto flex"
                  style="position: absolute; margin-top: 1px; margin-right: 2px; position:absolute; top:0;  display: none; ; z-index: 200"
                >
                  <vs-button
                    icon-pack="feather"
                    radius
                    icon="icon-edit-2"
                    size="small"
                    @click="editPage(page)"
                  ></vs-button>
                  <vs-button
                    icon-pack="feather"
                    size="small"
                    color="success"
                    radius
                    icon="icon-plus-circle"
                    @click="pushPage(page)"
                  ></vs-button>

                  <vs-button
                    icon-pack="feather"
                    size="small"
                    color="danger"
                    radius
                    icon="icon-trash"
                    @click="deletePage(page)"
                  ></vs-button>
                </div>
              </vs-card>
            </div> -->
          </div>
        </vs-tab>
        <!-- <vs-tab label="Website"> <website-settings /> </vs-tab> -->
        <vs-tab label="Form Builder">
          <!-- <forms-builder /> -->
        </vs-tab>
        <vs-tab label="Forms"> </vs-tab>
        <vs-tab label="Email Builder"> </vs-tab>
        <vs-tab label="Emails"> </vs-tab>
      </vs-tabs>
    </vs-card>
  </div>
</template>

<script>
// import componentsEdit from '@/components/page-generator/components_edit/index'
// import mainGrid from '@/components/page-generator/components/grid/mainGrid'
// import formsBuilder from '@/components/forms/form-generator/formBuilder'
// import websiteSettings from '@/components/page-generator/website/index'
import moment from 'moment'
export default {
  name: 'pageBuilders',
  components: {
    // mainGrid,
    componentsEdit: () =>
      process.client
        ? import('@/components/page-generator/components_edit/index')
        : null
    // formsBuilder,
    // websiteSettings
  },

  data() {
    return {}
  },
  computed: {
    pages() {
      return this.$store.state.page_builder.pages
    },
    component_list() {
      return this.$store.state.page_builder.component_list
    },
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    }
  },

  created() {
    let myPages = []
    // let ref = this.$fireStore
    //   .collection('apps')
    //   .doc('builder')
    //   .collection(this.activeBusinessInfo.b_uid)
    //   .doc('page_builder')
    //   .collection('page_builder')
    // ref.onSnapshot(snapshot => {
    //   snapshot.docChanges().forEach(change => {
    //     let doc = change.doc
    //     myPages.push({
    //       id: doc.id,
    //       uid: doc.data().uid,
    //       page_name: doc.data().page_name,
    //       component_list: doc.data().component_list,
    //       home_page: doc.data().home_page,
    //       site: doc.data().site
    //     })
    //   })
    // })
    this.$store.commit('page_builder/PAGES', myPages)
  },
  methods: {
    deletePage(page) {
      this.$fireStore
        .collection('apps')
        .doc('builder')
        .collection(this.activeBusinessInfo.b_uid)
        .doc('page_builder')
        .collection('page_builder')
        .doc(page.id)
        .delete()
        .then(function() {
          console.log('Document successfully deleted!')
        })
        .catch(function(error) {
          console.error('Error removing document: ', error)
        })
    },
    pushPage(page) {
      this.$store.commit(
        'page_builder/COMPONENTS_LIST_ADD',
        page.component_list
      )
    },
    editPage(page) {
      this.$store.commit('page_builder/EDITING_PAGE', true)
      this.$store.commit('page_builder/COMPONENTS_LIST_SET', page)
    }
  }
}
</script>
