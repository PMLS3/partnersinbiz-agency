<!-- =========================================================================================
  File Name: UserEditTabSocial.vue
  Description: User Edit Social Tab content
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div id="user-edit-tab-info">
    <div class="p-4 vx-row">
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
        <!-- <span class="text-sm text-danger" v-show="errors.has('twitter')">{{
          errors.first('twitter')
        }}</span> -->

        <vs-input
          class="w-full mt-4"
          v-model="data_local.fb"
          icon-pack="feather"
          icon="icon-facebook"
          label="Facebook"
          icon-no-border
          name="facebook"
        />
        <!-- <span class="text-sm text-danger" v-show="errors.has('facebook')">{{
          errors.first('facebook')
        }}</span> -->

        <vs-input
          class="w-full mt-4"
          v-model="data_local.insta"
          icon-pack="feather"
          icon="icon-instagram"
          label="Instagram"
          icon-no-border
          name="instagram"
        />
        <!-- <span class="text-sm text-danger" v-show="errors.has('instagram')">{{
          errors.first('instagram')
        }}</span> -->
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
        <!-- <span class="text-sm text-danger" v-show="errors.has('github')">{{
          errors.first('github')
        }}</span> -->

        <vs-input
          class="w-full mt-4"
          v-model="data_local.codepen"
          icon-pack="feather"
          icon="icon-codepen"
          label="CodePen"
          icon-no-border
          name="codepen"
        />
        <!-- <span class="text-sm text-danger" v-show="errors.has('codepen')">{{
          errors.first('codepen')
        }}</span> -->

        <vs-input
          class="w-full mt-4"
          v-model="data_local.slack"
          icon-pack="feather"
          icon="icon-slack"
          label="Slack"
          icon-no-border
          name="slack"
        />
        <!-- <span class="text-sm text-danger" v-show="errors.has('slack')">{{
          errors.first('slack')
        }}</span> -->
      </div>
    </div>

    <!-- Save & Reset Button -->
    <div class="mb-6 vx-row">
      <div class="w-full vx-col">
        <div class="flex flex-wrap items-center justify-end mt-8">
          <vs-button
            class="mt-2 ml-auto"
            @click="save_changes"
            :disabled="!validateForm"
            >Save Changes</vs-button
          >
          <vs-button
            class="mt-2 ml-4"
            type="border"
            color="warning"
            @click="reset_data"
            >Reset</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data)),
    }
  },
  computed: {
    validateForm() {
      return !this.errors.any()
    },
    user() {
      if (process.client) {
        if (localStorage.getItem('userInfo')) {
          return JSON.parse(localStorage.getItem('userInfo'))
        } else {
          return this.$store.state.auth.main_user
        }
      }
    },
    business() {
      return this.$store.state.business.active_business
    },
  },
  methods: {
    save_changes() {
      console.log('this', this.data_local)
      let vm = this
      let payload = this.data_local
      this.$fireStore
        .collection('business')
        .doc('users')
        .collection(this.business.b_uid)
        .doc(this.data_local.id)
        .update(payload)
        .then(() => {
          vm.successUpload()
        })
        .catch((err) => {
          vm.unsuccessUpload(err)
        })
    },
    successUpload() {
      this.$vs.notify({
        title: 'Success',
        text: 'Successful upload',
        color: 'green',
      })
    },
    unsuccessUpload(err) {
      this.$vs.notify({
        title: 'Error',
        text: `${err}`,
        color: 'red',
      })
    },
    reset_data() {
      this.data_local = Object.assign({}, this.data)
    },
  },
}
</script>
