<template>
  <div>
    <vs-row vs-w="12">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="2"
        vs-sm="2"
        vs-xs="2"
      >
        <vs-radio v-model="b_type" vs-name="b_type" vs-value="page" class="mr-2"
          >Page</vs-radio
        >
        <vs-radio v-model="b_type" vs-name="b_type" vs-value="component"
          >Component</vs-radio
        >
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="8"
        vs-sm="8"
        vs-xs="8"
      >
        <vs-row v-if="b_type == 'page'">
          <vs-input
            v-model="page_name"
            placeholder="Page Name"
            v-if="!editing_page"
          ></vs-input>
          <vs-button @click="savePage()" v-if="!editing_page" icon="save">
          </vs-button>
          <vs-button @click="savePage()" v-if="editing_page" icon="update">
          </vs-button>
          <!-- <vs-button @click="newPage()">New Page </vs-button> -->
        </vs-row>

        <vs-row v-else>
          <vs-input
            v-model="component_name"
            placeholder="Component Name"
            v-if="!editing_page"
          ></vs-input>
          <vs-button @click="saveComponent()" v-if="!editing_page" icon="save">
          </vs-button>
        </vs-row>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="2"
        vs-sm="2"
        vs-xs="2"
      >
        <vs-button
          @click="addGrid('grid', true)"
          color="primary"
          type="border"
          icon="add"
        ></vs-button>
      </vs-col>
      <vs-divider color="primary" icon="check"></vs-divider>
    </vs-row>

    <vs-popup fullscreen title="Building Options" :active.sync="popupAdd">
      <PageGeneratorComponentSelection allowedType="all" />
    </vs-popup>
    <vs-popup title="Building Options" :active.sync="popupAddQuick">
      <PageGeneratorComponentQuickSelection />
    </vs-popup>
    <!-- <vs-popup
      :title="component_show"
      :active.sync="popup2"
      :button-close-hidden="true"
    >
      <vs-button
        style="float: right"
        radius
        color="danger"
        type="gradient"
        icon-pack="feather"
        icon="icon-x-circle"
        @click="$store.commit('page_builder/ACTIVE_EDIT_UPDATE', false)"
      ></vs-button>
      <div v-if="Object.keys(edit_component).length > 0">
        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <contentEdit :schema="edit_component.schema.content" />
          </vs-col>
        </vs-row>

        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <classEdit :schema="edit_component.schema.class" />
          </vs-col>
        </vs-row>

        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <styleEdit :schema="edit_component.schema.style" />
          </vs-col>
        </vs-row>

        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <inlineEdit :schema="edit_component.schema.inline" />
          </vs-col>
        </vs-row>

        {{ uploaded_images[0] }}
        <img
          :src="uploaded_images[0]"
          v-if="uploaded_images[0]"
          style="height: 125px"
        />
        <br />
        <imageUpload class="mb-2 mr-4 sm:mb-0" label="Image Upload" />
        <br />

      </div>
    </vs-popup> -->

    <!-- <vs-popup
      title="Components tree"
      :active.sync="edit_all"
      :button-close-hidden="true"
    >
      <div>
        <vs-button
          style="float: right"
          radius
          color="danger"
          type="gradient"
          icon-pack="feather"
          icon="icon-x-circle"
          @click="$store.commit('page_builder/EDIT_ALL', false)"
        ></vs-button>

        <Tree :data="component_list" />
      </div>
    </vs-popup> -->
  </div>
</template>

<script>
import moment from 'moment'
export default {
  layout: 'full_page',
  props: {
    list: {
      type: Array,
    },
  },

  data() {
    return {
      page_name: '',
      component_name: '',
      editing_page: false,
      popupAdd: false,
      popupAddQuick: false,
      b_type: 'page',
      place: [],
    }
  },
  mounted() {
    $nuxt.$on('add_comp', (data, schema, mainIndex) => {
      console.log('place nav', data, schema, mainIndex)
      this.popupAdd = true
      this.place = data
      $nuxt.$emit('place', this.place, schema, mainIndex)
    })

    $nuxt.$on('add_comp_quick', (data, schema, mainIndex) => {
      this.popupAddQuick = true
      this.place = data
      $nuxt.$emit('place', this.place, schema, mainIndex)
    })

    $nuxt.$on('close_comp', () => {
      this.popupAdd = false
      this.popupAddQuick = false
    })
  },
  computed() {},
  methods: {
    newPage() {},
    saveComponent() {
      let vm = this

      let ref = this.$fireStore.collection('page_builder').doc('components')

      ref
        .add({
          uid: vm.activeUserInfo.uid,
          component_name: vm.component_name,
          component_list: vm.list,
          created_date: moment().format('DD-MM-YYYY'),
          created_month: moment().format('MM-YYYY'),
        })
        .then(function () {
          vm.successUpload()
        })
    },
    savePage() {
      let vm = this

      let ref = this.$fireStore.collection('page_builder').doc('pages')

      if (this.editing_page) {
        ref
          .doc(vm.edited_page.id)
          .update({
            component_list: vm.component_list,
            updated_date: moment().format('DD-MM-YYYY'),
            updated_month: moment().format('MM-YYYY'),
          })
          .then(function () {
            vm.successUpload()
          })
      } else {
        ref
          .add({
            uid: vm.activeUserInfo.uid,
            page_name: vm.page_name,
            component_list: vm.component_list,
            created_date: moment().format('DD-MM-YYYY'),
            created_month: moment().format('MM-YYYY'),
          })
          .then(function () {
            vm.successUpload()
          })
      }
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded',
      })
    },
    addEdit() {},
    addGrid() {
      this.popupAdd = true
      $nuxt.$emit('place', [this.list.length], {}, 0)
      $nuxt.$emit('main-add', true)
    },
  },
}
</script>
