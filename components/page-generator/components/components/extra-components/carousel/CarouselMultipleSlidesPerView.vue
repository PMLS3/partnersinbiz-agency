<!-- =========================================================================================
    File Name: CarouselMultipleSlidesPerView.vue
    Description: Carousel with multiple slides
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card :title="schema.content.title" class="carousel-example">
    <!-- swiper -->
    <swiper
      :options="swiperOption"
      :dir="$vs.rtl ? 'rtl' : 'ltr'"
      :key="$vs.rtl"
    >
      <swiper-slide v-for="(img, i) in schema.content.images" :key="i">
        <img class="responsive" :src="img" alt="banner" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </vx-card>
</template>

<script>
// import 'swiper/dist/css/swiper.min.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: ['schema'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      },
    }
  },
  components: {
    // swiper,
    //   swiperSlide,
  },
}
</script>
