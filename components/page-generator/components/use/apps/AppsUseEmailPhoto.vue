<template>
  <div>
    <div
      parent="body"
      default-index="1"
      color="primary"
      class="add-new-data-sidebar items-no-padding"
      spacer
    >
      <div class="flex items-center justify-between px-6 mt-3">
        <h4 class="mt-12" color="primary">{{ schema.title }}</h4>
      </div>
      <vs-divider class="mb-0"></vs-divider>
      <div class="flex items-center justify-between px-6 mt-2">
        <span>{{ schema.desc }}</span>
      </div>
      <div class="p-6">
        <form-generator
          :schema="schemaForm"
          v-model="formData"
        ></form-generator>
        <br />
        <vs-divider color="primary" icon="check"></vs-divider>
        <br />
      </div>

      <vs-card actionable class="px-6" v-if="preview">
        <div slot="header">
          <h3 color="primary">{{ formData.title }}</h3>
        </div>
        <div slot="media" v-if="formData.image">
          <div v-for="(image, index) in formData.image" :key="index">
            <img :src="image" />
          </div>
        </div>
        <div>
          <div v-html="formData.desc">{{ formData.desc }}</div>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button color="primary" type="gradient" @click="newApp()"
              >Submit</vs-button
            >
            <vs-button color="danger" type="gradient" @click="goBack()"
              >Cancel</vs-button
            >
          </vs-row>
        </div>
      </vs-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import firebase from 'firebase'
import FormGenerator from '@/components/forms/form-generator/formGenerator'

export default {
  props: ['schema'],
  components: {
    FormGenerator
  },
  data() {
    return {
      formData: {},
      preview: false,

      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    }
  },
  watch: {
    formData: function() {
      this.preview = true
    }
  },
  computed: {
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    },
    activeUserInfo() {
      return this.$store.state.user.app_active_user
    },
    schemaForm() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Title',
          label: 'Title',
          name: 'title'
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image Upload',
          label: 'Image Upload',
          name: 'image'
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description'
        }
      ]
    }
  },
  methods: {
    newApp() {
      let vm = this
      let form = { ...this.formData }
      form.i_type = this.schema.title
      form.date = moment().format('DD-MM-YYYY')
      form.disp_name = this.activeUserInfo.disp_name
      form.u_uid = this.activeUserInfo.uid

      this.$fireStore
        .collection('apps')
        .doc('apps')
        .collection(this.activeBusinessInfo.b_uid)
        .doc(this.schema.title)
        .collection(this.schema.title)
        .doc(this.schema.id)
        .collection('added')
        .add(form)
        .then(() => {
          vm.successUpload()
          this.formData = ''
        })
        .catch(err => {
          vm.unsuccessUpload(err)
        })
    },
    goBack() {
      this.formData = ''
    },

    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded'
      })
    },
    unsuccessUpload(err) {
      this.$vs.notify({
        color: 'danger',
        title: 'Oh nooo!',
        text: `${err}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  /deep/ .vs-sidebar--background {
    z-index: 52010;
  }

  /deep/ .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  height: calc(100% - 4.3rem);
}
</style>
