<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div
    class="flex items-center justify-center w-full h-screen bg-img vx-row no-gutter"
    id="page-login"
  >
    <div class="m-4 vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="items-center justify-center h-full p-4 vx-row no-gutter">
            <div
              class="items-center justify-center hidden w-full h-full bg-gray-100 vx-col lg:block lg:w-1/2"
            >
              <img
                src="@/assets/illustrations/in_thoughts.svg"
                alt="login"
                class="w-full"
              />
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container">
                <div class="mb-4 vx-card__title">
                  <h4 class="mb-4 text-4xl font-bold text-gray-800">
                    Suggestion/Feedback
                  </h4>
                  <p class="text-xl font-bold text-gray-800">
                    We appreciate your feedback.
                  </p>
                </div>

                <FormGenerator :schema="schema" v-model="formData" />
                <vs-button @click="addForm" class="mt-8">Submit</vs-button>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Suggestions',
  components: {},
  data() {
    return {
      formData: {},
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
    reseller() {
      return this.$store.state.business.reseller_id
    },
    sub_reseller() {
      return this.$store.state.business.sub_sellers
    },

    schema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Subject Title',
          type: 'text',
          label: 'Subject Title',
          name: 'title',
        },
        {
          title: 'SelectList',
          name: 'category',
          multi: false,
          label: 'Category',
          options: ['Report a Bug', 'Feature Request'],
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
      ]
    },
  },
  methods: {
    addForm() {
      let extraData = {
        b_uid: this.business.b_uid,
        uid: this.user.uid,
        user_email: this.user.email,
        disp_name: this.user.disp_name,
        b_name: this.business.b_name,
        read: false,
        date: moment().format('DD-MM-YYYY'),
        t_stamp: Date.now(),
      }
      let payload = { ...this.formData, ...extraData }

      this.$fireStore
        .collection('suggestions')
        .add(payload)
        .then(() =>
          this.$vs.notify({
            title: 'Thank You!',
            text: `Your ${this.formData.category} has been received`,
            color: 'success',
          })
        )
    },
  },
}
</script>
