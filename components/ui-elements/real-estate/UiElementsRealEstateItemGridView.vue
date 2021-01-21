<!-- =========================================================================================
  File Name: ItemGridView.vue
  Description: Item Component - Grid VIew
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card class="overflow-hidden grid-view-item mb-base" v-on="$listeners">
    <template slot="no-body">
      <div
        class="flex items-center justify-center h-64 mb-4 bg-white cursor-pointer item-img-container"
        @click="navigate_to_detail_view"
      >
        <img :src="item.img[0]" :alt="item.title" class="px-4 grid-view-img" />
      </div>
      <div class="px-4 item-details">
        <div class="flex items-center justify-between">
          <div
            class="flex px-2 py-1 border border-solid rounded text-warning border-warning"
          >
            <span class="mr-1 text-sm">{{ item.rating }}</span>
            <feather-icon icon="StarIcon" svgClasses="h-4 w-4" />
          </div>
          <h6 class="font-bold">R{{ item.price }}</h6>
        </div>

        <div class="my-4">
          <h6
            class="mb-1 font-semibold truncate cursor-pointer hover:text-primary"
            @click="navigate_to_detail_view"
          >
            {{ item.title }}
          </h6>
          <p class="text-sm truncate item-description" v-html="item.desc">
            {{ item.desc | str_limit(8) }}
          </p>
        </div>
      </div>

      <slot name="action-buttons" />
    </template>
    <vs-popup fullscreen title="fullscreen" :active.sync="popupActivo4">
      <UiElementsRealEstateDetailedView
        :real_estate="real_estate"
        v-if="popupActivo4"
      />
      {{ real_estate }}
    </vs-popup>
  </vx-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      real_estate: {},
      popupActivo4: false,
    }
  },
  filters: {
    str_limit(value, size) {
      if (!value) return ''
      value = value.toString()

      if (value.length <= size) {
        return value
      }
      return value.substr(0, size) + '...'
    },
  },
  methods: {
    navigate_to_detail_view() {
      this.real_estate = this.item
      this.popupActivo4 = true
      // this.$store.dispatch('eCommerce/selectedItem', this.item)

      // this.$router.push(`/eCommerce/detail_view/${this.item.objectID}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.grid-view-item {
  .grid-view-img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    transition: 0.35s;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);

    .grid-view-img {
      opacity: 0.9;
    }
  }
}
</style>
