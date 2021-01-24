<!-- =========================================================================================
    File Name: CarouselAutplay.vue
    Description: Carousel with Autplay
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card
    :title="schema.content.title"
    class="carousel-example"
    @click="add()"
  >
    <!-- swiper -->
    <swiper
      :options="swiperOption"
      :dir="$vs.rtl ? 'rtl' : 'ltr'"
      :key="$vs.rtl"
      @click="add()"
    >
      <swiper-slide
        v-for="(img, i) in schema.content.images"
        :key="i"
        @click="add()"
      >
        <img class="responsive" :src="img" alt="banner" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </swiper>
  </vx-card>
</template>

<script>
// import 'swiper/dist/css/swiper.min.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'carouselAutoplay',
  props: ['schema', 'index', 'mainIndex'],
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  methods: {
    add() {
      console.log('fiel', this.mainIndex, this.index)

      let payload = {
        active_card: true,
        component_show: 'grid',
        schema: this.schema,
        index: this.mainIndex,
        mainIndex: this.index,
      }
      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    },
  },

  components: {
    // swiper,
    //   swiperSlide,
  },
}
</script>
