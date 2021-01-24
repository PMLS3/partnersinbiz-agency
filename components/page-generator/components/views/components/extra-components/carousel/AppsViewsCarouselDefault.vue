<!-- =========================================================================================
    File Name: CarouselDefault.vue
    Description: Default Carousel demo
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card
    title="Default"
    class="carousel-example"
    code-toggler
    @click="addComponent('carouselDefault')"
  >
    <!-- swiper -->
    <swiper :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-18.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-15.jpg"
          alt="banner"
        />
      </swiper-slide>
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
          src="@/assets/images/pages/carousel/banner-16.jpg"
          alt="banner"
        />
      </swiper-slide>
    </swiper>
  </vx-card>
</template>

<script>
// import 'swiper/dist/css/swiper.min.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
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
