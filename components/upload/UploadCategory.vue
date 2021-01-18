<template>
  <div class="flex items-center">
    <div class="btn-group">
      <vs-tooltip text="Add Category" position="top">
        <vs-button
          class="ml-1"
          icon="control_point_duplicate"
          @click="popupActivo = true"
        ></vs-button>
      </vs-tooltip>
    </div>
    <vs-popup
      class="holamundo"
      title="Category"
      :active.sync="popupActivo"
      style="z-index: 300; margin-top: 5%"
    >
      <div class="px-6 pb-12">
        <FormGenerator :schema="schema" v-model="formData" />
        <vs-button @click="addForm" class="mt-8">Submit</vs-button>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'apps-cat',
  props: {
    item: {
      type: Object,
      required: true,
    },
    schema: {
      type: Array,
      required: true,
    },

    control: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      popupActivo: false,
      formData: {},
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    main_user() {
      return this.$store.state.auth.main_user
    },
    reseller() {
      return this.$store.state.business.reseller_id
    },
    sub_reseller() {
      return this.$store.state.business.sub_sellers
    },
  },
  methods: {
    addForm() {
      let vm = this

      if (vm.item.type == 'Category') {
        let form = vm.formData
        form.i_type = vm.item.item
        form.date = moment().format('DD-MM-YYYY')
        form.disp_name = vm.main_user.disp_name
        form.u_uid = vm.main_user.uid
        form.b_uid = vm.business.b_uid
        form.reseller = [vm.reseller, ...vm.sub_reseller]
        vm.$fireStore
          .collection('apps')
          .doc(vm.item.item)
          .collection('category')
          .add(form)
          .then(() => {
            vm.successUpload()
          })
          .catch((err) => {
            vm.unsuccessUpload(err)
          })
      } else if (vm.item.item == 'ImgSingle') {
        for (let i = 0; i < vm.formData.url.length; i++) {
          let form = { url: vm.formData.url[i] }
          form.title = vm.formData.title
          form.desc = vm.formData.desc
          form.i_type = vm.item.item
          form.date = moment().format('DD-MM-YYYY')
          form.disp_name = vm.main_user.disp_name
          form.u_uid = vm.main_user.uid
          form.b_uid = vm.business.b_uid
          form.reseller = [vm.reseller, ...vm.sub_reseller]
          form.id = vm.$route.params.id
          vm.$fireStore
            .collection('apps')
            .doc(vm.item.item)
            .collection('category')
            .add(form)
            .then(() => {
              vm.successUpload()
            })
            .catch((err) => {
              vm.unsuccessUpload(err)
            })
        }
      } else if (vm.item.type == 'Single') {
        let form = vm.formData
        form.i_type = vm.item.item
        form.date = moment().format('DD-MM-YYYY')
        form.disp_name = vm.main_user.disp_name
        form.u_uid = vm.main_user.uid
        form.b_uid = vm.business.b_uid
        form.reseller = [vm.reseller, ...vm.sub_reseller]
        form.id = vm.$route.params.id
        vm.$fireStore
          .collection('apps')
          .doc(vm.item.item)
          .collection('category')
          .add(form)
          .then(() => {
            vm.successUpload()
          })
          .catch((err) => {
            vm.unsuccessUpload(err)
          })
      }
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: `${this.item.item} added`,
        text: 'Whoop whoop, been uploaded',
      })
    },
    successDelete() {
      this.$vs.notify({
        color: 'success',
        title: `${this.item.item} Deleted`,
        text: 'Successful deletion',
      })
    },
    unsuccessUpload(er) {
      this.$vs.notify({
        color: 'danger',
        title: 'Oh no',
        text: `Error ${er}`,
      })
    },
  },
}
</script>

<style></style>
