<template>
  <vs-card>
    <div slot="header">
      <h3>Class</h3>
    </div>
    <div>
      <div v-if="schema">
        <vs-col
          vs-type="flex"
          vs-justify="space-between"
          vs-align="center"
          vs-w="12"
          v-for="(item, i) in wordsSplit"
          :key="i"
        >
          <span>{{ item }}</span>
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
        <vs-collapse-item>
          <div slot="header">Padding/Margin</div>
          <vs-radio v-model="pmType" vs-name="pmType" vs-value="mx-"
            >Margin Horizontal</vs-radio
          >
          <vs-radio v-model="pmType" vs-name="pmType" vs-value="my-"
            >Margin Vertical</vs-radio
          >
          <vs-radio v-model="pmType" vs-name="pmType" vs-value="ml-"
            >Maring left</vs-radio
          >
          <vs-radio v-model="pmType" vs-name="pmType" vs-value="mr-"
            >Maring right</vs-radio
          >
          <vs-radio v-model="pmType" vs-name="pmType" vs-value="mt-"
            >Maring top</vs-radio
          >
          <vs-radio v-model="pmType" vs-name="pmType" vs-value="mb-"
            >Maring bottom</vs-radio
          >

          <vs-divider></vs-divider>
          <vs-radio v-model="pmType" vs-name="pmType" vs-value="px-"
            >Padding Horizontal</vs-radio
          >
          <vs-radio v-model="pmType" vs-name="pmType" vs-value="py-"
            >Padding Vertical</vs-radio
          >
          <vs-radio v-model="pmType" vs-name="pmType" vs-value="pl-"
            >Padding left</vs-radio
          >
          <vs-radio v-model="pmType" vs-name="pmType" vs-value="pr-"
            >Padding right</vs-radio
          >
          <vs-radio v-model="pmType" vs-name="pmType" vs-value="pt-"
            >Padding top</vs-radio
          >
          <vs-radio v-model="pmType" vs-name="pmType" vs-value="pb-"
            >Padding bottom</vs-radio
          >

          <vs-input-number min="0" v-model="number" />
          <vs-button @click="changeComponent(pmType + number)"
            >Submit</vs-button
          >
        </vs-collapse-item>
      </vs-collapse>
      <vs-col
        vs-type="flex"
        vs-justify="space-around"
        vs-align="center"
        vs-w="12"
      >
        <vs-textarea v-model="classUpdate" placeholder="Class" />
      </vs-col>
    </div>
    <div slot="footer">
      <vs-row vs-justify="flex-end">
        <vs-button icon="check" @click="update()">Submit</vs-button>
      </vs-row>
    </div>
  </vs-card>
</template>

<script>
export default {
  props: ['schema'],
  data() {
    return {
      classUpdate: '',
      number: 0,
      pmType: 'mx',
    }
  },
  computed: {
    wordsSplit() {
      if (this.schema) {
        if (this.schema.class) {
          return this.schema.class.trim().split(' ')
        } else {
          return ''
        }
      } else {
        return ''
      }
    },
  },
  watch: {
    edit_component: function () {
      switch (this.schema.title) {
        case 'DIV':
          this.options = {
            size: true,
            sizeOptions: {
              vs: true,
            },
            alignment: true,
            alignmentOptions: {
              justify: true,
              align: true,
              center: true,
              flex_start: true,
              flex_end: true,
              space_around: true,
              space_between: true,
            },
          }
          break
        case 'buttons':
          break
      }
    },
    schema() {
      this.classUpdate = this.schema.class
    },
  },
  created() {
    this.classUpdate = this.schema.class
  },

  methods: {
    deleteItem(item, i) {
      let test = this.classUpdate.replace(item, '')
      let str = test.replace(/ +(?= )/g, '')
      this.classUpdate = str

      this.update()
    },
    changeComponent(item) {
      console.log('item', item)
      this.classUpdate = this.classUpdate + item
      this.update()
    },
    update() {
      let payload = {
        schema: this.schema,
        classUpdate: this.classUpdate,
      }
      setTimeout(() => {
        $nuxt.$emit('edit_comp_update', payload)
      }, 1000)
    },
  },
}
</script>
