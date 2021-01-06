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
          v-model="data_local.social_links.twitter"
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
          v-model="data_local.social_links.facebook"
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
          v-model="data_local.social_links.instagram"
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
          v-model="data_local.social_links.github"
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
          v-model="data_local.social_links.codepen"
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
          v-model="data_local.social_links.slack"
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
    <div class="vx-row">
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
  },
  methods: {
    save_changes() {
      /* eslint-disable */
      if (!this.validateForm) return

      // Here will go your API call for updating data (Also remvoe eslint-disable)
      // You can get data in "this.data_local"

      /* eslint-enable */
    },
    reset_data() {
      this.data_local = Object.assign({}, this.data)
    },
  },
}
</script>
