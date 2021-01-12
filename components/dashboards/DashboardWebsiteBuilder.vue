<!--
*
* TODO: website builder to right fb account
*
*
*
-->

<template>
  <div>
    <vs-button @click="Update()">Update</vs-button>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
        All PAges
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
        Webiste
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <h2>All Pages</h2>
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <draggable
              class="dragArea list-group"
              style="width: 100%"
              :list="list1"
              :group="{ name: 'people', pull: 'clone', put: false }"
              @change="log"
            >
              <div
                class="list-group-item"
                v-for="(element, i) in pages"
                :key="i"
                style="width: 100%; border: solid black 1px"
              >
                <vs-row vs-type="flex" vs-justify="space-between" vs-w="12">
                  <vs-col
                    vs-type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-w="6"
                  >
                    {{ element.page_name }}
                  </vs-col>

                  <vs-col
                    vs-type="flex"
                    vs-justify="center"
                    vs-align="center"
                    vs-w="6"
                  >
                    <vs-button @click="$router.push(`/pages/${page.page_name}`)"
                      >view</vs-button
                    >
                  </vs-col>
                </vs-row>
              </div>
            </draggable>
          </vs-col>
        </vs-row>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <h2>Pages in Website</h2>
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-w="12"
          >
            <draggable
              class="dragArea list-group"
              :list="list2"
              group="people"
              @change="log"
              style="width: 100%"
            >
              <div
                class="list-group-item"
                v-for="(element, i) in list2"
                :key="i"
                style="width: 100%; border: solid black 1px"
              >
                {{ element.page_name }}
              </div>
            </draggable>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>

    <!-- <theCustomizer /> -->
  </div>
</template>

<script>
import theCustomizer from '@/layouts/components/customizer/TheCustomizer.vue'
export default {
  components: {
    theCustomizer,
    draggable: () => (process.client ? import('vuedraggable') : null),
  },
  name: 'website',
  display: 'Clone',
  order: 2,
  data() {
    return {
      homePage: '',
      list1: [],
      list2: [],
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.active_user
    },
    business() {
      return this.$store.state.business.main_business
    },
    pages() {
      return this.$store.state.page_builder.pages
    },
  },
  created() {
    let myPages = []

    let ref = this.$fireStore
      .collection('apps')
      .doc('builder')
      .collection(this.business.b_uid)
      .doc('page_builder')
      .collection('page_builder')
      .orderBy('index')
      .where('site', '==', true)
    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let doc = change.doc
        myPages.push({
          uid: doc.data().uid,
          page_name: doc.data().page_name,
          index: doc.data().index,
          component_list: doc.data().component_list,
          icon: doc.data().icon,
        })
      })
    })

    this.$store.commit('page_builder/PAGES', myPages)

    this.getSitePages()
  },
  methods: {
    getSitePages() {
      console.log()
      for (let i = 0; i < this.pages.length; i++) {
        console.log('site', this.pages[i].site)
        if (this.pages[i].site) {
          this.list2.push(this.pages[i])
        }
        this.list1.push(this.pages[i])
      }
    },
    log: function (evt) {
      if (process.client) {
        window.console.log(evt)
        console.log('list 1', this.list1)
        console.log('list 2', this.list2)
      }
    },
    editPage(page) {
      this.$store.commit('page_builder/COMPONENTS_LIST_SET', page)
    },
    Update() {
      let vm = this
      for (let i = 0; i < vm.pages.length; i++) {
        let site = false
        let index = vm.pages.length + i
        for (let e = 0; e < vm.list2.length; e++) {
          if (vm.list2[e].id === vm.pages[i].id) {
            site = true
            index = e
          }
        }
        let ref = vm.$fireStore
          .collection('apps')
          .doc('builder')
          .collection(vm.business.b_uid)
          .doc('page_builder')
          .collection('page_builder')
          .doc(vm.pages[i].id)
        ref
          .update({
            site: site,
            index: index,
          })
          .then(function () {
            this.successUpload()
          })
      }
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded',
      })
    },
  },
}
</script>

<style></style>
