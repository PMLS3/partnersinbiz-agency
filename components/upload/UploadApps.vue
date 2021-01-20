<template>
  <div class="flex flex-row">
    <!-- <vs-button icon="amp_stories"></vs-button>
    <vs-button icon="storage"></vs-button> -->
    <vs-tooltip :text="item.title" position="top">
      <vs-button
        class="ml-1"
        icon="add_circle_outline"
        @click="popupActivo = true"
      ></vs-button>
    </vs-tooltip>

    <vs-popup
      class="holamundo"
      :title="item.title"
      :active.sync="popupActivo"
      style="z-index: 300; margin-top: 5%"
    >
      <div class="px-6 pb-12">
        <UiMiscAccessControl v-if="control" />
        <FormGenerator :schema="schema" v-model="formData" />
        <vs-button @click="addForm" class="mt-8">Submit</vs-button>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import moment from 'moment'
import { ref, useContext, computed, onMounted } from '@nuxtjs/composition-api'

export default {
  name: 'UploadApps',
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
  setup(props) {
    let vm = this
    const { store, route, $fireStore, $vs } = useContext()

    let popupActivo = ref(false)
    let formData = ref({})

    let business = computed(() => store.state.business.active_business)
    let user = computed(() => store.state.auth.main_user)
    let reseller = computed(() => store.state.business.reseller_id)
    let sub_reseller = computed(() => store.state.business.sub_sellers)
    let categories = computed(() => store.state.app.categories)
    let color = computed(() => {
      let color
      for (let i = 0; i < categories.value.length; i++) {
        if (categories.value[i].title == formData.value.category) {
          color = categories.value[i].color
        }
      }
      return color
    })

    function addForm() {
      let type = props.item.type

      if (type == 'Category') {
        let form = formData.value
        form.i_type = props.item.item
        form.date = moment().format('DD-MM-YYYY')
        form.disp_name = user.value.disp_name
        form.u_uid = user.value.uid
        form.b_uid = business.value.b_uid
        form.child = props.item.child
        form.reseller = [reseller.value, ...sub_reseller.value]
        $fireStore
          .collection('apps')
          .doc(props.item.item)
          .collection('app')
          .add(form)
          .then(() => {
            successUpload()
          })
          .catch((err) => {
            unsuccessUpload(err)
          })
      } else if (props.item.item == 'Images') {
        for (let i = 0; i < formData.value.url.length; i++) {
          let form = { url: formData.value.url[i] }
          form.title = formData.value.title
          form.desc = formData.value.desc
          form.i_type = props.item.item
          form.date = moment().format('DD-MM-YYYY')
          form.disp_name = user.value.disp_name
          form.u_uid = user.value.uid
          form.b_uid = business.value.b_uid
          form.reseller = [reseller.value, ...sub_reseller.value]
          form.id = route.value.params.id
          $fireStore
            .collection('apps')
            .doc(props.item.item)
            .collection('app')
            .add(form)
            .then(() => {
              vm.successUpload()
            })
            .catch((err) => {
              vm.unsuccessUpload(err)
            })
        }
      } else if (props.item.item == 'ImageGallerySingle') {
        for (let i = 0; i < formData.value.url.length; i++) {
          let form = { url: formData.value.url[i] }
          form.title = formData.value.title
          form.desc = formData.value.desc
          form.i_type = props.item.item
          form.date = moment().format('DD-MM-YYYY')
          form.disp_name = user.value.disp_name
          form.u_uid = user.value.uid
          form.b_uid = business.value.b_uid
          form.reseller = [reseller.value, ...sub_reseller.value]
          form.id = route.value.params.id
          $fireStore
            .collection('apps')
            .doc(props.item.item)
            .collection('app')
            .add(form)
            .then(() => {
              vm.successUpload()
            })
            .catch((err) => {
              vm.unsuccessUpload(err)
            })
        }
      } else if (props.item.item == 'MusicSingle') {
        console.log('form', formData.value)
        for (let i = 0; i < formData.url.length; i++) {
          let form = formData.value
          form.url = formData.value.url[i]
          form.url.type = 'music'
          form.title = formData.value.title
          form.desc = formData.value.desc
          form.i_type = props.item.item
          form.date = moment().format('DD-MM-YYYY')
          form.disp_name = user.value.disp_name
          form.u_uid = user.value.uid
          form.b_uid = business.value.b_uid
          form.reseller = [reseller.value, ...sub_reseller.value]
          form.id = route.value.params.id
          $fireStore
            .collection('apps')
            .doc(props.item.item)
            .collection('app')
            .add(form)
            .then(() => {
              successUpload()
            })
            .catch((err) => {
              unsuccessUpload(err)
            })
        }
      } else if (
        props.item.item == 'BlogSingle' ||
        props.item.item == 'EventsSingle'
      ) {
        //TODO: check if date is added otherwise use moment date
        //TODO: check if address is placed

        let form = formData.value
        form.color = color.value
        form.i_type = props.item.item
        form.date = moment().format('DD-MM-YYYY')
        form.disp_name = user.value.disp_name
        form.u_uid = user.value.uid
        form.b_uid = business.value.b_uid
        form.reseller = [reseller.value, ...sub_reseller.value]
        form.id = route.value.params.id
        if (form.addr) {
          form = { ...form.addr, ...form }
          delete form.addr
        }

        $fireStore
          .collection('apps')
          .doc(props.item.item)
          .collection('app')
          .add(form)
          .then(() => {
            successUpload()
          })
          .catch((err) => {
            unsuccessUpload(err)
          })
      } else if (props.item.type == 'Single') {
        console.log('SINGLE')
        let form = formData.value
        form.i_type = props.item.item
        form.date = moment().format('DD-MM-YYYY')
        form.disp_name = user.value.disp_name
        form.u_uid = user.value.uid
        form.b_uid = business.value.b_uid
        form.reseller = [reseller.value, ...sub_reseller.value]
        form.id = route.value.params.id
        if (form.addr) {
          form = { ...form.addr, ...form }
          delete form.addr
        }

        console.log('Form: ' + form)
        $fireStore
          .collection('apps')
          .doc(props.item.item)
          .collection('app')
          .add(form)
          .then(() => {
            successUpload()
          })
          .catch((err) => {
            console.log(err)
            unsuccessUpload(err)
          })
      }
    }
    function successUpload() {
      $vs.notify({
        color: 'success',
        title: `${this.item.item} added`,
        text: 'Whoop whoop, been uploaded',
      })
    }
    function successDelete() {
      $vs.notify({
        color: 'success',
        title: `${this.item.item} Deleted`,
        text: 'Successful deletion',
      })
    }
    function unsuccessUpload(er) {
      $vs.notify({
        color: 'danger',
        title: 'Oh no',
        text: `Error ${er}`,
      })
    }
    return { popupActivo, formData, addForm }
  },
}
</script>
