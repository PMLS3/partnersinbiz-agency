<template>
  <vs-card class="mt-8">
    <div slot="header">
      <h3>Content</h3>
    </div>
    <div>
      <span
        >Use this section to update the content of the selected Component</span
      >
      <vs-divider></vs-divider>
      <h5>Current Settings</h5>
      <div v-if="schema">
        <vs-col
          vs-type="flex"
          vs-justify="space-between"
          vs-align="center"
          vs-w="12"
          v-for="(item, i) in Object.entries(schema)"
          :key="i"
        >
          <h6>{{ item[0] }}: {{ item[1] }}</h6>
          <vs-button
            icon-pack="feather"
            size="small"
            color="danger"
            radius
            icon="icon-trash"
            @click="deleteItem(item, i)"
          ></vs-button>
        </vs-col>
      </div>
      <vs-divider class="mt-8"></vs-divider>
      <vs-row v-if="options.title">
        <vs-input placeholder="Title" v-model="title" />
        <vs-button @click="changeComponent('title', title)">Update</vs-button>
      </vs-row>
    </div>
  </vs-card>
</template>

<script>
export default {
  props: ['schema'],
  data() {
    return {
      contentUpdateValue: '',
      contentUpdateKey: '',
      title: '',
      options: {
        title: false,
      },
    }
  },

  computed: {
    contentUpdate() {
      let obj = {
        [this.contentUpdateKey]: this.contentUpdateValue,
      }
      return obj
    },
    edit_component() {
      return this.$store.state.page_builder.edit_component
    },
    uploaded_images() {
      return this.$store.state.form.uploaded_images
    },
  },
  watch: {
    edit_component: function () {
      switch (this.edit_component.schema.title) {
        case 'grid':
          this.options = {}
          break
        case 'buttons':
          this.options = {
            title: true,
          }
          break
      }
    },
  },
  methods: {
    changeComponent(key, value) {
      this.contentUpdateKey = key
      this.contentUpdateValue = value
      this.update()
    },
    deleteItem(item, i) {
      delete this.edit_component.schema.content[item[0]]
      this.update()
    },
    useImage() {
      this.contentUpdateValue = this.uploaded_images
    },

    update() {
      let vm = this
      let style
      let content
      let inline
      let classUp
      let place = this.edit_component.schema.place

      let imagesUploaded = this.uploaded_images

      if (this.edit_component.schema.style) {
        style = this.edit_component.schema.style
      } else {
        style = ''
      }

      if (this.contentUpdateKey && this.contentUpdateValue) {
        content = {
          ...this.edit_component.schema.content,
          ...this.contentUpdate,
        }
      } else {
        if (this.edit_component.schema.content) {
          content = this.edit_component.schema.content
        } else {
          content = ''
        }
      }

      if (this.edit_component.schema.inline) {
        inline = this.edit_component.schema.inline
      } else {
        inline = ''
      }

      if (vm.edit_component.schema.class) {
        classUp = vm.edit_component.schema.class
      } else {
        classUp = ''
      }

      let payload = {
        place: place,
        content: content,
        style: style,
        class: classUp,
        inline: inline,
      }

      this.$store.commit('page_builder/COMPONENTS_UPDATE', payload)

      this.contentUpdateValue = ''
      this.contentUpdateKey = ''
    },
  },
}
</script>
