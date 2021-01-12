<!-- =========================================================================================
    File Name: Carousel3dCoverflowEffect.vue
    Description: Carousel with 3D Coverflow effect
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card
    title="3d Effect Coverflow Effect"
    class="carousel-example"
    code-toggler
    @click="addComponent('carousel3dCoverflowEffect')"
  >
    <div class="swiper-inner">
      <!-- swiper -->
      <swiper
        :options="swiperOption"
        :dir="$vs.rtl ? 'rtl' : 'ltr'"
        :key="$vs.rtl"
      >
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
            src="@/assets/images/pages/carousel/banner-35.jpg"
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
            src="@/assets/images/pages/carousel/banner-33.jpg"
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
        <swiper-slide>
          <img
            class="responsive"
            src="@/assets/images/pages/carousel/banner-32.jpg"
            alt="banner"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </vx-card>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
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

<style scoped>
.swiper-inner {
  width: 100%;
  height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}
</style>
