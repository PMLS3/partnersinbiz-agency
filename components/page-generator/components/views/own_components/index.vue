<template>
  <div>
    <div class="vx-row">
      <div
        class="vx-col w-full sm:w-1/3 lg:w-1/6 mb-base"
        v-for="(page, i) in myComponents"
        :key="i"
      >
        <vs-card>
          <h4>{{ page.component_name }}</h4>

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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ownComponents',
  computed: {
    myComponents() {
      return this.$store.state.page_builder.myComponents
    },
    component_list() {
      return this.$store.state.page_builder.component_list
    },
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    }
  },

  created() {
    let vm = this
    let myComponents = []

    let ref = this.$fireStore
      .collection('apps')
      .doc('builder')
      .collection(this.activeBusinessInfo.b_uid)
      .doc('page_builder')
      .collection('components')
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let doc = change.doc
        myComponents.push({
          id: doc.id,
          uid: doc.data().uid,
          component_name: vm.component_name,
          component_list: doc.data().component_list
        })
      })
    })

    this.$store.commit('page_builder/COMPONENTS', myComponents)
  },
  methods: {
    deletePage(page) {
      this.$fireStore
        .collection('apps')
        .doc('builder')
        .collection(this.activeBusinessInfo.b_uid)
        .doc('page_builder')
        .collection('components')
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
