<!-- =========================================================================================
    File Name: CarouselProgress.vue
    Description: Carousel with progress
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card
    title="Progress"
    class="carousel-example"
    code-toggler
    @click="addComponent('carouselProgress')"
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
          src="@/assets/images/pages/carousel/banner-10.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-7.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-9.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-11.jpg"
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
// import 'swiper/dist/css/swiper.min.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
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
            '@/assets/images/pages/carousel/banner-2.jpg',
          ],
        },
      })

      this.$store.commit('page_builder/COMPONENTS_LIST', payload)

      let payloads = {
        active_card: false,
        component_show: 'builder',
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    },
  },
  components: {
    // swiper,
    //   swiperSlide,
  },
}
</script>
