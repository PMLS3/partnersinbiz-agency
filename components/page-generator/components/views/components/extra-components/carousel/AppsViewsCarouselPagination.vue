<!-- =========================================================================================
    File Name: CarouselPagination.vue
    Description: Carousel with pagination
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card
    title="Pagination"
    class="carousel-example"
    code-toggler
    @click="addComponent('carouselPagination')"
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
          src="@/assets/images/pages/carousel/banner-19.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@/assets/images/pages/carousel/banner-5.jpg"
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
      <div class="swiper-pagination" slot="pagination"></div>
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
