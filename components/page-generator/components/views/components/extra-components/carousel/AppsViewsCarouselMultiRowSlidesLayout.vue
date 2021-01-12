<!-- =========================================================================================
    File Name: CarouselMultiRowSlidesLayout.vue
    Description: Carousel with multiple row layout
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card
    title="Multi Row Slides Layout"
    class="carousel-example"
    code-toggler
    @click="addComponent('carouselMultiRowSlidesLayout')"
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
          src="@/assets/images/pages/carousel/banner-31.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-32.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-33.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-34.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-35.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-23.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-37.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-38.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-39.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-40.jpg"
          alt="banner"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
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
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          }
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
