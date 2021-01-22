<!-- =========================================================================================
  File Name: terms-and-conditions.vue
  Description: Forms send data to store. form/terms_conditions gets update in store
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div>
    <div class="vx-row mt-8">
      <div class="vx-col w-full">
        <p>TERMS & CONDITIONS</p>
      </div>
    </div>
    <v-select
      class="mb-8"
      label="i_name"
      v-model="terms"
      :options="info"
    ></v-select>
    <quill-editor v-model="content"></quill-editor>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'Terms & Conditions',

  components: {
    vSelect,
    quillEditor,
  },
  data: () => ({
    terms: '',
    content: '',
    info: [],
  }),
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      if (process.client) {
        if (localStorage.getItem('userInfo')) {
          return JSON.parse(localStorage.getItem('userInfo'))
        } else {
          return this.$store.state.auth.active_user
        }
      }
    },
  },
  watch: {
    terms: function () {
      this.content = this.terms.desc
    },
    content: {
      handler(val) {
        this.$store.commit('form/TERMS_SET', this.content)
      },
      deep: true,
    },
  },
  created() {
    let vm = this
    let ref = this.$fireStore
      .collection('apps')
      .doc('apps')
      .collection(this.business.b_uid)
      .doc('Terms & Conditions')
      .collection('Terms & Conditions')

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        // if (change.type === 'added') {
        let doc = change.doc
        let data = doc.data()
        data.id = doc.id
        vm.info.push(data)
        // }
      })
    })
  },
}
</script>
