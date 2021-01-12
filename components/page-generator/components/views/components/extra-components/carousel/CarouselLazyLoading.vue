<!-- =========================================================================================
  File Name: CarouselLazyLoading.vue
  Description: Carousel with lazy loading
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card
    title="Lazy Loading"
    class="carousel-example"
    code-toggler
    @click="addComponent('carouselLazyLoading')"
  >
    <!-- swiper -->
    <swiper
      :options="swiperOption"
      :dir="$vs.rtl ? 'rtl' : 'ltr'"
      :key="$vs.rtl"
    >
      <swiper-slide v-for="slide in slides" :key="slide.img">
        <img :data-src="slide.img" class="swiper-lazy" />
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
    </swiper>
  </vx-card>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      swiperOption: {
        // Enable lazy loading
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slides: [
        { img: require('@/assets/images/pages/carousel/banner-13.jpg') },
        { img: require('@/assets/images/pages/carousel/banner-7.jpg') },
        { img: require('@/assets/images/pages/carousel/banner-10.jpg') },
        { img: require('@/assets/images/pages/carousel/banner-16.jpg') },
        { img: require('@/assets/images/pages/carousel/banner-20.jpg') }
      ]
    }
  },
  methods: {
    addComponent(name) {
      let payload = []

      payload.push({
        title: name,
        content: {
          images: [
            '@/assets/images/pages/carousel/banner-16.jpg',
            '@/assets/images/pages/carousel/banner-13.jpg',
            '@/assets/images/pages/carousel/banner-4.jpg',
            '@/assets/images/pages/carousel/banner-2.jpg'
          ]
        }
      })

      this.$store.commit('page_builder/COMPONENTS_LIST', payload)

      let payloads = {
        active_card: false,
        component_show: 'builder'
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444 !important;
  min-height: 300px;
}

.swiper-slide img {
  width: auto;
  height: auto;
  max-width: 100%;
  /*max-height: 100%;*/
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
