<template>
  <div class="flex flex-row">
    <vs-button icon="amp_stories"></vs-button>
    <vs-button icon="storage"></vs-button>

    <vs-button
      class="ml-1"
      icon="add_circle_outline"
      @click="popupActivo = true"
    ></vs-button>

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
    const { store, route, $fireStore } = useContext()

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
      console.log('ITEM', props.item)
      console.log('itme', props.item.item)
      // console.log('itme', props.item.type)

      console.log('FormDAta', formData)

      let type = props.item.type
      console.log('type', type)

      if (type == 'Category') {
        let form = formData.value
        form.i_type = props.item.item
        form.date = moment().format('DD-MM-YYYY')
        form.disp_name = user.value.disp_name
        form.u_uid = user.value.uid
        form.b_uid = business.value.b_uid
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
        console.log('Route', route)

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
      this.$vs.notify({
        color: 'success',
        title: `${this.item.item} added`,
        text: 'Whoop whoop, been uploaded',
      })
    }
    function successDelete() {
      this.$vs.notify({
        color: 'success',
        title: `${this.item.item} Deleted`,
        text: 'Successful deletion',
      })
    }
    function unsuccessUpload(er) {
      this.$vs.notify({
        color: 'danger',
        title: 'Oh no',
        text: `Error ${er}`,
      })
    }
    return { popupActivo, formData, addForm }
  },
}
</script>
