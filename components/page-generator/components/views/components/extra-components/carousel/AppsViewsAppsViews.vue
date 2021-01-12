<!-- =========================================================================================
    File Name: Carousel3dEffect.vue
    Description: Carousel with 3D effect
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card
    title="3d Effect"
    class="carousel-example"
    code-toggler
    @click="addComponent('carousel3dEffect')"
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
            src="@/assets/images/pages/carousel/banner-21.jpg"
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
            src="@/assets/images/pages/carousel/banner-27.jpg"
            alt="banner"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="responsive"
            src="@/assets/images/pages/carousel/banner-29.jpg"
            alt="banner"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="responsive"
            src="@/assets/images/pages/carousel/banner-30.jpg"
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
            src="@/assets/images/pages/carousel/banner-39.jpg"
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
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94
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
  position: relative;
  overflow: hidden;
  height: 330px;
  padding: 15px;
}

.swiper-container {
  width: 300px !important;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>
