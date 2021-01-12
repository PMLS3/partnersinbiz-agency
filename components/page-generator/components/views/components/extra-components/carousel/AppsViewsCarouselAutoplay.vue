<!-- =========================================================================================
    File Name: CarouselAutplay.vue
    Description: Carousel with Autplay
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card
    title="Autoplay"
    class="carousel-example"
    code-toggler
    @click="addComponent('carouselAutoplay')"
  >
    <!-- swiper -->
    <swiper
      :options="swiperOption"
      :dir="$vs.rtl ? 'rtl' : 'ltr'"
      :key="$vs.rtl"
    >
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-16.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-13.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-4.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-2.jpg"
          alt="banner"
        />
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
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    addComponent(name) {
      let payload = []

      payload.push({
        title: name,
        content: {
          images: []
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
