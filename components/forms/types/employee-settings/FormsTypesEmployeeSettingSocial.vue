<!-- =========================================================================================
  File Name: UserEditTabSocial.vue
  Description: User Edit Social Tab content
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div id="user-edit-tab-info">
    <div class="vx-row">
      <!-- Col 1 -->
      <div class="w-full vx-col md:w-1/2">
        <vs-input
          class="w-full"
          v-model="data_local.twt"
          icon-pack="feather"
          icon="icon-twitter"
          label="Twitter"
          icon-no-border
          name="twitter"
        />

        <vs-input
          class="w-full mt-4"
          v-model="data_local.fb"
          icon-pack="feather"
          icon="icon-facebook"
          label="Facebook"
          icon-no-border
          name="facebook"
        />

        <vs-input
          class="w-full mt-4"
          v-model="data_local.insta"
          icon-pack="feather"
          icon="icon-instagram"
          label="Instagram"
          icon-no-border
          name="instagram"
        />
      </div>

      <!-- Col 2 -->
      <div class="w-full vx-col md:w-1/2">
        <vs-input
          class="w-full mt-4 md:mt-0"
          v-model="data_local.github"
          icon-pack="feather"
          icon="icon-github"
          label="GitHub"
          icon-no-border
          name="github"
        />

        <vs-input
          class="w-full mt-4"
          v-model="data_local.codepen"
          icon-pack="feather"
          icon="icon-codepen"
          label="CodePen"
          icon-no-border
          name="codepen"
        />

        <vs-input
          class="w-full mt-4"
          v-model="data_local.slack"
          icon-pack="feather"
          icon="icon-slack"
          label="Slack"
          icon-no-border
          name="slack"
        />
      </div>
    </div>

    <!-- Save & Reset Button -->
    <div class="vx-row">
      <div class="w-full vx-col">
        <div class="flex flex-wrap items-center justify-end mt-8">
          <vs-button class="mt-2 ml-auto" @click="save_changes"
            >Save Changes</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Employee-Social',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data))
    }
  },
  computed: {
    business() {
      if (process.client) {
        if (localStorage.getItem('mainBusiness')) {
          return JSON.parse(localStorage.getItem('mainBusiness'))
        } else {
          return this.$store.state.business.main_business
        }
      }
    },
    user_data() {
      return this.$store.state.user.main_user
    }
  },
  methods: {
    successUpload() {
      this.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded'
      })

      let user = this.user_data

      ;(user.fb = this.data_local.fb),
        (user.github = this.data_local.github),
        (user.insta = this.data_local.insta),
        (user.linkedin = this.data_local.linkedin),
        (user.slack = this.data_local.slack),
        (user.twt = this.data_local.twt),
        (user.codepen = this.data_local.codepen)

      this.$store.commit('user/APP_DISPLAYED_USER', user)
    },
    save_changes() {
      this.$fireStore
        .collection('apps')
        .doc('users')
        .collection(this.business.b_uid)
        .doc('info')
        .collection('social_links')
        .doc(this.user_data.uid)
        .update({
          fb: this.data_local.fb,
          github: this.data_local.github,
          insta: this.data_local.insta,
          linkedin: this.data_local.linkedin,
          slack: this.data_local.slack,
          twt: this.data_local.twt,
          codepen: this.data_local.codepen
        })
        .then(() => {
          this.successUpload()
        })
    }
  }
}
</script>
