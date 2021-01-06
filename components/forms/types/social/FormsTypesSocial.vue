<!-- =========================================================================================
  File Name: social.vue
  Description: Form to register social media links
  Component Name: Social

  Submit to store: form/SOCIAL SET  retrieve from store form/social
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div id="user-edit-tab-info">
    <div class="vx-row">
      <!-- Col 1 -->
      <div class="w-full vx-col md:w-1/2">
        <vs-input
          class="w-full"
          v-model="info.twt"
          icon-pack="feather"
          icon="icon-twitter"
          label="Twitter"
          icon-no-border
          name="twitter"
        />

        <vs-input
          class="w-full mt-4"
          v-model="info.fb"
          icon-pack="feather"
          icon="icon-facebook"
          label="Facebook"
          icon-no-border
          name="facebook"
        />

        <vs-input
          class="w-full mt-4"
          v-model="info.insta"
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
          v-model="info.github"
          icon-pack="feather"
          icon="icon-github"
          label="GitHub"
          icon-no-border
          name="github"
        />

        <vs-input
          class="w-full mt-4"
          v-model="info.codepen"
          icon-pack="feather"
          icon="icon-codepen"
          label="CodePen"
          icon-no-border
          name="codepen"
        />

        <vs-input
          class="w-full mt-4"
          v-model="info.slack"
          icon-pack="feather"
          icon="icon-slack"
          label="Slack"
          icon-no-border
          name="slack"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        slack: '',
        codpen: '',
        github: '',
        insta: '',
        fb: '',
        twt: ''
      }
    }
  },
  watch: {
    info: {
      handler(val) {
        this.$store.commit('form/SOCIAL_SET', this.info)
      },
      deep: true
    }
  }
}
</script>
