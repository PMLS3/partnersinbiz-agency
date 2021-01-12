<template>
  <vs-card class="mt-8">
    <div slot="header">
      <h3>
        Style
      </h3>
    </div>
    <div>
      <span
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</span
      >
      <vs-divider></vs-divider>
      <div v-if="schema">
        <vs-col
          vs-type="flex"
          vs-justify="space-between"
          vs-align="center"
          vs-w="12"
          v-for="(item, i) in Object.entries(schema)"
          :key="i"
        >
          <span>{{ item[0] }}:{{ item[1] }}</span>
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
      <vs-divider class="mt-4"></vs-divider>
      <vs-collapse class="mb-12">
        <vs-collapse-item v-if="options.color">
          <div slot="header">
            Color
          </div>
          <vs-radio
            v-if="options.colorOptions.background"
            v-model="colortype"
            vs-name="colortype"
            vs-value="background-color"
            >Background Color</vs-radio
          >
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
          >
            <ul class="clearfix">
              <!-- THEME COLORS -->
              <li
                v-for="color in themeColors"
                :key="color"
                :style="{ backgroundColor: color }"
                :class="ColorOptionClasses(color)"
                class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left border border-solid d-theme-border-grey-light"
                @click="ColorLocal = color"
              />

              <!-- CUSTOM COLOR -->
              <li
                :style="{ backgroundColor: customNavbarColor }"
                :class="ColorOptionClasses(ColorOptionClasses)"
                class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left"
                @click="ColorLocal = customNavbarColor"
              />

              <li class="float-left">
                <input
                  v-model="customNavbarColor"
                  class="w-10 cursor-pointer h-10 rounded-lg m-2"
                  type="color"
                />
              </li>
            </ul>
          </vs-col>
        </vs-collapse-item>
      </vs-collapse>

      <vs-col
        vs-type="flex"
        vs-justify="space-around"
        vs-align="center"
        vs-w="12"
      >
        <vs-input v-model="styleUpdateKey" placeholder="key" />
        <vs-input v-model="styleUpdateValue" placeholder="value" />
      </vs-col>
    </div>
    <div slot="footer">
      <vs-row vs-justify="flex-end">
        <!-- <vs-button
                    type="gradient"
                    color="danger"
                    icon="favorite"
                    @click="update('inline')"
                  ></vs-button> -->
        <vs-button color="primary" icon="add_photo_alternate" @click="useImage"
          >Use Image</vs-button
        >
        <vs-button
          type="gradient"
          color="success"
          icon="check"
          @click="update()"
          >Submit</vs-button
        >
      </vs-row>
    </div>
  </vs-card>
</template>

<script>
export default {
  props: ['schema'],
  data() {
    return {
      styleUpdateKey: '',
      styleUpdateValue: '',
      options: {
        color: false,
        colorOptions: {
          background: false
        }
      },
      themeColors: [
        '#FFF',
        '#7367F0',
        '#28C76F',
        '#EA5455',
        '#FF9F43',
        '#1E1E1E'
      ],
      customNavbarColor: '#3DC9B3',
      colortype: 'background-color'
    }
  },
  computed: {
    edit_component() {
      return this.$store.state.page_builder.edit_component
    },
    styleUpdate() {
      let obj = {
        [this.styleUpdateKey]: this.styleUpdateValue
      }
      return obj
    },
    uploaded_images() {
      return this.$store.state.form.uploaded_images
    },
    ColorOptionClasses() {
      return color => {
        const classes = {}
        if (color == this.ColorLocal) classes['shadow-outline'] = true
        if (this.navbarTypeLocal == 'static')
          classes['cursor-not-allowed'] = true
        return classes
      }
    },
    ColorLocal: {
      get() {
        return this.navbarColor
      },
      set(val) {
        this.styleUpdateKey = this.colortype
        this.styleUpdateValue = val
        this.update()
      }
    }
  },
  watch: {
    edit_component: function() {
      switch (this.edit_component.schema.title) {
        case 'grid':
          this.options = {
            color: true,
            colorOptions: {
              background: true
            }
          }
          break
        case 'buttons':
          break
      }
    }
  },
  methods: {
    changeComponent(key, value) {
      this.styleUpdateKey = key
      this.styleUpdateValue = value
      this.update()
    },
    deleteItem(item, i) {
      delete this.edit_component.schema.style[item[0]]

      this.update()
    },
    useImage() {
      this.styleUpdateValue = `url(${this.uploaded_images[0]})`
    },
    update() {
      let vm = this
      let style
      let content
      let inline
      let classUp
      let place = this.edit_component.schema.place

      if (this.styleUpdateValue && this.styleUpdateKey) {
        style = { ...this.edit_component.schema.style, ...this.styleUpdate }
      } else {
        if (this.edit_component.schema.style) {
          style = this.edit_component.schema.style
        } else {
          style = ''
        }
      }

      if (this.edit_component.schema.content) {
        content = this.edit_component.schema.content
      } else {
        content = ''
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
        inline: inline
      }

      this.$store.commit('page_builder/COMPONENTS_UPDATE', payload)
      this.styleUpdateKey = ''
      this.styleUpdateValue = ''
    }
  }
}
</script>

<style></style>
