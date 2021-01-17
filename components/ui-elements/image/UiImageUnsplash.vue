<template>
  <div>
    <div class="flex">
      <vs-input placeholder="Placeholder" v-model="search" />
      <vs-button @click="searchTerm(1)">Submit</vs-button>
    </div>

    <div class="p-4">
      <ul class="flex">
        <li>
          <vs-checkbox v-model="let_color">Color</vs-checkbox>
        </li>
        <li>
          <vs-checkbox v-model="let_order_by">Order by</vs-checkbox>
        </li>
        <li>
          <vs-checkbox v-model="let_content_filter">Content Filter</vs-checkbox>
        </li>
        <li>
          <vs-checkbox v-model="let_orientation">Orientation</vs-checkbox>
        </li>
      </ul>
    </div>

    <div class="flex">
      <v-select
        v-model="order_by"
        :clearable="false"
        :options="order_by_options"
        name="order_by"
        :dir="$vs.rtl ? 'rtl' : 'ltr'"
        v-if="let_order_by"
        class="w-48 m-4"
      />

      <v-select
        v-model="content_filter"
        :clearable="false"
        :options="content_filter_options"
        name="content_filter"
        :dir="$vs.rtl ? 'rtl' : 'ltr'"
        v-if="let_content_filter"
        class="w-48 m-4"
      />

      <v-select
        v-model="color"
        :clearable="false"
        :options="color_options"
        name="order_by"
        :dir="$vs.rtl ? 'rtl' : 'ltr'"
        v-if="let_color"
        class="w-48 m-4"
      />

      <v-select
        v-model="orientation"
        :clearable="false"
        :options="orientation_options"
        name="orientation"
        :dir="$vs.rtl ? 'rtl' : 'ltr'"
        v-if="let_orientation"
        class="w-48 m-4"
      />
    </div>

    <!-- {{ status }} -->
    <!-- <UiImagePhoto /> -->
    <UiImageGallery :photos="status.results" />

    <!-- <p>Current: {{ page }}</p> -->
    <!-- <vs-button @click="page++">Increment</vs-button>
    <vs-button @click="page--">Decrement</vs-button> -->
    <!-- <br /><br /> -->
    <div class="items-center">
      <vs-pagination
        v-if="status.total_pages"
        :total="status.total_pages"
        v-model="page"
      ></vs-pagination>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: { vSelect },
  data() {
    return {
      search: '',
      page: 1,
      pages: 20,
      per_page: 30,
      let_order_by: false,
      order_by: 'relevant',
      order_by_options: ['relevant', 'latest'],
      collections: ' ',
      let_content_filter: false,
      content_filter: 'low',
      content_filter_options: ['low', 'high'],
      let_color: false,
      color: '',
      color_options: [
        ' ',
        'black_and_white',
        'black',
        'white',
        'yellow',
        'orange',
        'red',
        'purple',
        'magenta',
        'green',
        'teal',
        'blue',
      ],
      let_orientation: false,
      orientation: 'landscape',
      orientation_options: ['landscape', 'portrait', 'squarish'],
      status: [],
      currentx: 5,
    }
  },
  watch: {
    page() {
      this.searchTerm(this.page)
    },
  },
  methods: {
    searchTerm(page) {
      let url = `https://api.unsplash.com/search/photos?client_id=bd1cnz9Q0gEsiTCSV67IPfUCBXpi_9Yiziook5RuHlM&query=${this.search}&page=${page}&per_page=${this.per_page}&order_by=${this.order_by}`

      //  this.$axios.setHeader('X-Api-Key', 'BbV8aERAr8AEQ68ZbUf9vzp1')
      // let params = {
      //   query: this.search,
      //   page: this.page,
      //   per_page: this.per_page,
      //   order_by: this.order_by,
      // }
      if (this.let_content_filter) {
        url = url + '&content_filter=' + this.content_filter
      }
      if (this.let_color) {
        // params.color = this.color
        url = url + '&color=' + this.color
      }
      if (this.let_orientation) {
        // params.orientation = this.orientation
        url = url + '&orientation=' + this.orientation
      }

      this.$axios.$get(url).then(
        (response) => {
          console.log(response)
          this.status = response
        },
        (error) => {
          console.log(error)
        }
      )
    },
  },
}
</script>

<style></style>
