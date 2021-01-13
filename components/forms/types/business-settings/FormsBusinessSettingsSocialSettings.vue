<!-- =========================================================================================
  File Name: UserEditTabSocial.vue
  Description: User Edit Social Tab content
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div class="w-full">
    <client-only>
      <div class="flex items-end m-4">
        <!-- <feather-icon icon="UserIcon" class="mr-2" svgClasses="w-5 h-5" /> -->
        <span class="font-medium leading-none">Company Social Media</span>
      </div>
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
              <vs-tooltip
                text="Save/Update Social Media Details"
                position="top"
              >
                <vs-button class="mt-2 ml-auto" @click="save_changes"
                  >Save Changes</vs-button
                >
              </vs-tooltip>
            </div>
          </div>
        </div>
      </div>
    </client-only>
    <div class="flex">
      <!-- <vs-tooltip text="Add Twitter Configuration" position="top">
            <vs-button
              class="mt-2"
              @click="configShow = 'ex'"
              icon-pack="feather"
              icon="icon-x"
              v-if="configShow != 'ex'"
            ></vs-button>
          </vs-tooltip> -->
      <vs-tooltip text="Add Twitter Configuration" position="top">
        <vs-button
          class="mt-2 ml-2"
          @click="configShow = 'twitter'"
          icon-pack="feather"
          icon="icon-twitter"
        ></vs-button>
      </vs-tooltip>
      <vs-tooltip text="Add Facebook Configuration" position="top">
        <vs-button
          class="mt-2 ml-2"
          @click="configShow = 'facebook'"
          icon-pack="feather"
          icon="icon-facebook"
        ></vs-button>
      </vs-tooltip>
      <vs-tooltip text="Add Instagram Configuration" position="top">
        <vs-button
          class="mt-2 ml-2"
          @click="configShow = 'instagram'"
          icon-pack="feather"
          icon="icon-instagram"
        ></vs-button>
      </vs-tooltip>

      <vs-tooltip text="Add Linkedin Configuration" position="top">
        <vs-button
          class="mt-2 ml-2"
          @click="configShow = 'linkedin'"
          icon-pack="feather"
          icon="icon-linkedin"
        ></vs-button>
      </vs-tooltip>
    </div>
    <div class="flex flex-wrap content-center w-full">
      <TweetConfig
        entity="business"
        :handle="data_local.twt"
        v-if="configShow == 'twitter'"
        class="p-8 m-4"
      />

      <FacebookConfig
        entity="business"
        :handle="data_local.fb"
        v-if="configShow == 'facebook'"
        class="p-8 m-4"
      />

      <InstagramConfig
        entity="business"
        :handle="data_local.insta"
        v-if="configShow == 'instagram'"
        class="p-8 m-4"
      />

      <LinkedinConfig
        entity="business"
        :handle="data_local.link"
        v-if="configShow == 'linkedin'"
        class="p-8 m-4"
      />
    </div>

    <!-- <div class="flex w-full mt-6">
      <div class="m-4 md:w-1/2">
        <TweetConfig entity="business" :handle="data_local.twt" />
      </div>
      <div class="md:w-1/2">
        <FacebookConfig entity="business" :handle="data_local.fb" />
      </div>
      <div class="m-4 md:w-1/2">
        <InstagramConfig entity="business" :handle="data_local.insta" />
      </div>
      <div class="md:w-1/2">
        <LinkedinConfig entity="business" :handle="data_local.link" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'social-settings',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data)),
      configShow: '',
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
  },
  methods: {
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded',
      })

      let business = this.business

      if (this.data_local.fb) {
        business.fb = this.data_local.fb
      }

      if (this.data_local.github) {
        business.github = this.data_local.github
      }

      if (this.local_data.insta) {
        business.insta = this.local_data.insta
      }

      if (this.local_data.linkedin) {
        business.linkedin = this.local_data.linkedin
      }

      if (this.local_data.slack) {
        business.slack = this.local_data.slack
      }

      if (this.local_data.codepen) {
        business.codepen = this.local_data.codepen
      }

      if (this.data_local.twt) {
        business.twt = this.data_local.twt
      }

      this.$store.commit('business/UPDATE_BUSINESS_INFO', business)
    },
    save_changes() {
      let obj = {
        fb: '',
        github: '',
        insta: '',
        linkedin: '',
        slack: '',
        twt: '',
        codepen: '',
      }

      console.log('local', this.data_local)
      if (this.data_local) {
        if (this.data_local.fb) {
          obj.fb = this.data_local.fb
        }

        if (this.data_local.github) {
          obj.github = this.data_local.github
        }

        if (this.local_data.insta) {
          obj.insta = this.local_data.insta
        }

        if (this.local_data.linkedin) {
          obj.linkedin = this.local_data.linkedin
        }

        if (this.local_data.slack) {
          obj.slack = this.local_data.slack
        }

        if (this.local_data.codepen) {
          obj.codepen = this.local_data.codepen
        }

        if (this.data_local.twt) {
          obj.twt = this.data_local.twt
        }
      }

      console.log('obj', obj)
      this.$fireStore
        .collection('business')
        .doc(this.business.b_uid)
        .update(obj)
        .then(() => {
          this.successUpload()
        })
    },
  },
}
</script>
