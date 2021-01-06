<!-- =========================================================================================
  File Name: UserEditTabSocial.vue
  Description: User Edit Social Tab content
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vs-tabs
    position="left"
    class="w-full tabs-shadow-none"
    id="profile-tabs"
    :key="branchIndex"
    v-model="branchIndex"
  >
    <!-- GENERAL -->
    <vs-tab
      v-for="(branch, index) in business.branches"
      :key="index"
      icon="store"
      :label="$device.isMobile ? '' : branch"
      class="w-full"
    >
      <vs-card class="w-full">
        <div class="flex items-end m-4">
          <!-- <feather-icon icon="UserIcon" class="mr-2" svgClasses="w-5 h-5" /> -->
          <span class="font-medium leading-none"
            >{{ SelectedBranch }} - Business Details
          </span>
        </div>
        <div class="vx-row">
          <!-- Col 1 -->
          <div class="w-full vx-col md:w-1/2">
            <vs-input
              class="w-full"
              v-model="email"
              icon-pack="feather"
              icon="icon-mail"
              label="Email"
              icon-no-border
              disabled
              name="email"
            />

            <vs-input
              class="w-full mt-4"
              v-model="website"
              icon-pack="feather"
              icon="icon-command"
              label="Website"
              icon-no-border
              disabled
              name="website"
            />
          </div>

          <!-- Col 2 -->
          <div class="w-full vx-col md:w-1/2">
            <vs-input
              class="w-full mt-4 md:mt-0"
              v-model="phone"
              icon-pack="feather"
              icon="icon-smartphone"
              label="Phone"
              icon-no-border
              disabled
              name="phone"
            />

            <vs-input
              class="w-full mt-4"
              v-model="for_address"
              icon-pack="feather"
              icon="icon-home"
              label="Address"
              disabled
              icon-no-border
              name="address"
            />
          </div>
        </div>
        <div class="flex-row mt-4">
          <div class="vx-row">
            <div class="w-full vx-col">
              <div class="flex flex-wrap items-center justify-end mt-8">
                <vs-tooltip text="Edit Branch Details" position="top">
                  <vs-button
                    @click="showForm = !showForm"
                    class="mt-2 ml-auto"
                    icon="create"
                    color="warning"
                  ></vs-button>
                </vs-tooltip>
              </div>
            </div>
          </div>
          <div v-if="showForm">
            <label class="vs-input--label"
              >Please fill in Branch details:</label
            >

            <FormGenerator
              :schema="branchForm"
              v-model="formData"
              class="p-6"
            />

            <div class="vx-row">
              <div class="w-full vx-col">
                <div class="flex flex-wrap items-center justify-end mt-8">
                  <vs-tooltip text="Save/Update Branch details" position="top">
                    <vs-button
                      class="mt-2 ml-auto"
                      @click="save_details"
                      icon="save"
                    ></vs-button>
                  </vs-tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vs-card>
      <vs-card class="w-full">
        <client-only>
          <div class="flex items-end m-4">
            <!-- <feather-icon icon="UserIcon" class="mr-2" svgClasses="w-5 h-5" /> -->
            <span class="font-medium leading-none"
              >{{ SelectedBranch }} - Social Media
            </span>
          </div>
          <div id="user-edit-tab-info">
            <div class="vx-row">
              <!-- Col 1 -->
              <div class="w-full vx-col md:w-1/2">
                <vs-input
                  class="w-full"
                  v-model="social.twt"
                  icon-pack="feather"
                  icon="icon-twitter"
                  label="Twitter"
                  icon-no-border
                  name="twitter"
                />

                <vs-input
                  class="w-full mt-4"
                  v-model="social.fb"
                  icon-pack="feather"
                  icon="icon-facebook"
                  label="Facebook"
                  icon-no-border
                  name="facebook"
                />

                <vs-input
                  class="w-full mt-4"
                  v-model="social.insta"
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
                  v-model="social.github"
                  icon-pack="feather"
                  icon="icon-github"
                  label="GitHub"
                  icon-no-border
                  name="github"
                />

                <vs-input
                  class="w-full mt-4"
                  v-model="social.codepen"
                  icon-pack="feather"
                  icon="icon-codepen"
                  label="CodePen"
                  icon-no-border
                  name="codepen"
                />

                <vs-input
                  class="w-full mt-4"
                  v-model="social.slack"
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
                    text="Save/Update Branch Social Media Details"
                    position="top"
                  >
                    <vs-button
                      class="mt-2 ml-auto"
                      @click="save_changes"
                      icon="save"
                    ></vs-button>
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
            entity="branch"
            :branch="SelectedBranch"
            :handle="social.twt"
            v-if="configShow == 'twitter'"
            class="p-8 m-4"
          />

          <FacebookConfig
            entity="branch"
            :branch="SelectedBranch"
            :handle="social.fb"
            v-if="configShow == 'facebook'"
            class="p-8 m-4"
          />

          <InstagramConfig
            entity="branch"
            :branch="SelectedBranch"
            :handle="social.insta"
            v-if="configShow == 'instagram'"
            class="p-8 m-4"
          />

          <LinkedinConfig
            entity="branch"
            :branch="SelectedBranch"
            :handle="social.link"
            v-if="configShow == 'linkedin'"
            class="p-8 m-4"
          />
        </div>
      </vs-card>
    </vs-tab>
  </vs-tabs>
</template>

<script>
import moment from 'moment'
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
      branchIndex: 0,
      showForm: false,
      configShow: '',
      social: {
        fb: '',
        github: '',
        insta: '',
        linkedin: '',
        slack: '',
        codepen: '',
        twt: '',
      },
      formData: {},
      email: '',
      website: '',
      phone: '',
      for_address: '',
      branchForm: [
        {
          title: 'TextInput',
          placeholder: 'Email',
          label: 'Email',
          name: 'Email',
          type: 'text',
        },
        {
          title: 'TextInput',
          placeholder: 'Phone',
          label: 'Phone',
          name: 'Phone',
          type: 'text',
        },
        {
          title: 'TextInput',
          placeholder: 'Website',
          label: 'Website',
          name: 'Website',
          type: 'text',
        },

        {
          title: 'GoogleAddress',
          placeholder: 'Address',
          label: 'Address',
          name: 'Address',
        },
        {
          title: 'TextArea',
          placeholder: 'Description',
          label: 'Description',
          name: 'Description',
        },
      ],
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    SelectedBranch() {
      return this.business.branches[this.branchIndex]
    },
  },
  watch: {
    SelectedBranch() {
      let vm = this

      vm.social.fb = ''
      vm.social.github = ''
      vm.social.insta = ''
      vm.social.linkedin = ''
      vm.social.slack = ''
      vm.social.codepen = ''
      vm.social.twt = ''
      ;(vm.email = ''),
        (vm.website = ''),
        (vm.phone = ''),
        (vm.for_address = ''),
        this.$fireStore
          .collection('business')
          .doc(this.business.b_uid)
          .collection('branch')
          .doc(this.SelectedBranch)
          .get()
          .then(function (doc) {
            if (doc.exists) {
              console.log('Document data:', doc.data())
              vm.social.fb = doc.data().social.fb
              vm.social.github = doc.data().social.github
              vm.social.insta = doc.data().social.insta
              vm.social.linkedin = doc.data().social.linkedin
              vm.social.slack = doc.data().social.slack
              vm.social.codepen = doc.data().social.codepen
              vm.social.twt = doc.data().social.twt
              vm.email = doc.data().email
              vm.website = doc.data().website
              vm.phone = doc.data().phone
              vm.for_address = doc.data().for_address
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!')
            }
          })
          .catch(function (error) {
            console.log('Error getting document:', error)
          })
    },
  },
  created() {
    let vm = this
    this.$fireStore
      .collection('business')
      .doc(this.business.b_uid)
      .collection('branch')
      .doc(this.business.branches[0])
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log('Document data:', doc.data())

          vm.social.fb = doc.data().social.fb
          vm.social.github = doc.data().social.github
          vm.social.insta = doc.data().social.insta
          vm.social.linkedin = doc.data().social.linkedin
          vm.social.slack = doc.data().social.slack
          vm.social.codepen = doc.data().social.codepen
          vm.social.twt = doc.data().social.twt
          vm.email = doc.data().email
          vm.website = doc.data().website
          vm.phone = doc.data().phone
          vm.for_address = doc.data().for_address
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error)
      })
  },
  methods: {
    unsuccessUpload(err) {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: `${err}`,
      })
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded',
      })

      let business = this.business

      if (this.social.fb) {
        business.fb = this.social.fb
      }

      if (this.social.github) {
        business.github = this.social.github
      }

      if (this.social.insta) {
        business.insta = this.social.insta
      }

      if (this.social.linkedin) {
        business.linkedin = this.social.linkedin
      }

      if (this.social.slack) {
        business.slack = this.social.slack
      }

      if (this.social.codepen) {
        business.codepen = this.social.codepen
      }

      if (this.social.twt) {
        business.twt = this.social.twt
      }

      this.$store.commit('business/UPDATE_BUSINESS_INFO', business)
    },
    save_details() {
      let vm = this
      let obj = {
        branch: vm.selectedBranch ? vm.selectedBranch : '',
        email: vm.formData.Email ? vm.formData.Email : '',
        phone: vm.formData.Phone ? vm.formData.Phone : '',
        website: vm.formData.Website ? vm.formData.Website : '',

        date: moment().format('DD-MM-YYYY'),
        month: moment().format('MM-YYYY'),
        desc: vm.formData.Description ? vm.formData.Description : '',
        t_stamp: Date.now(),
      }

      if (vm.formData.Address) {
        ;(obj.adr_address = vm.formData.Address.places[0].adr_address
          ? vm.formData.Address.places[0].adr_address
          : ''),
          (obj.for_address = vm.formData.Address.places[0].formatted_address
            ? vm.formData.Address.places[0].formatted_address
            : ''),
          (obj.addr_url = vm.formData.Address.places[0].url
            ? vm.formData.Address.places[0].url
            : ''),
          (obj.vicinity = vm.formData.Address.places[0].vicinity
            ? vm.formData.Address.places[0].vicinity
            : ''),
          (obj.lat = vm.formData.Address.markers[0].position.lat
            ? vm.formData.Address.markers[0].position.lat
            : ''),
          (obj.lng = vm.formData.Address.markers[0].position.lng
            ? vm.formData.Address.markers[0].position.lng
            : ''),
          (obj.geo1 = vm.formData.Address.geoAll.geo1
            ? vm.formData.Address.geoAll.geo1
            : ''),
          (obj.geo2 = vm.formData.Address.geoAll.geo2
            ? vm.formData.Address.geoAll.geo2
            : ''),
          (obj.geo3 = vm.formData.Address.geoAll.geo3
            ? vm.formData.Address.geoAll.geo3
            : ''),
          (obj.geo4 = vm.formData.Address.geoAll.geo4
            ? vm.formData.Address.geoAll.geo4
            : ''),
          (obj.geo5 = vm.formData.Address.geoAll.geo5
            ? vm.formData.Address.geoAll.geo5
            : ''),
          (obj.geo6 = vm.formData.Address.geoAll.geo6
            ? vm.formData.Address.geoAll.geo6
            : ''),
          (obj.geo7 = vm.formData.Address.geoAll.geo7
            ? vm.formData.Address.geoAll.geo7
            : ''),
          (obj.geo8 = vm.formData.Address.geoAll.geo8
            ? vm.formData.Address.geoAll.geo8
            : ''),
          (obj.geo9 = vm.formData.Address.geoAll.geo9
            ? vm.formData.Address.geoAll.geo9
            : '')
      }

      this.$fireStore
        .collection('business')
        .doc(this.business.b_uid)
        .collection('branch')
        .doc(this.SelectedBranch)
        .update(obj)
        .then(() => {
          vm.successUpload()
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
          vm.$fireStore
            .collection('business')
            .doc(vm.business.b_uid)
            .collection('branch')
            .doc(vm.SelectedBranch)
            .set(obj)
            .then(() => {
              vm.successUpload()
            })
            .catch(function (error) {
              console.error('Error adding document: ', error)
              vm.unsuccessUpload(error)
            })
        })
    },
    save_changes() {
      let vm = this
      let obj = {
        fb: '',
        github: '',
        insta: '',
        linkedin: '',
        slack: '',
        twt: '',
        codepen: '',
      }

      if (this.social.fb) {
        obj.fb = this.social.fb
      }

      if (this.social.github) {
        obj.github = this.social.github
      }

      if (this.social.insta) {
        obj.insta = this.social.insta
      }

      if (this.social.linkedin) {
        obj.linkedin = this.social.linkedin
      }

      if (this.social.slack) {
        obj.slack = this.social.slack
      }

      if (this.social.codepen) {
        obj.codepen = this.social.codepen
      }

      if (this.social.twt) {
        obj.twt = this.social.twt
      }

      let obj2 = {
        social: obj,
      }

      this.$fireStore
        .collection('business')
        .doc(this.business.b_uid)
        .collection('branch')
        .doc(this.SelectedBranch)
        .update(obj2)
        .then(() => {
          vm.successUpload()
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
          vm.$fireStore
            .collection('business')
            .doc(vm.business.b_uid)
            .collection('branch')
            .doc(vm.SelectedBranch)
            .set(obj2)
            .then(() => {
              vm.successUpload()
            })
            .catch(function (error) {
              console.error('Error adding document: ', error)
              vm.unsuccessUpload(error)
            })
        })
    },
  },
}
</script>
