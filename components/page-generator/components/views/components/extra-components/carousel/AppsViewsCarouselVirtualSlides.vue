<!-- =========================================================================================
  File Name: CarouselVirtualSlides.vue
  Description: Carousel with virtual slides

========================================================================================== -->

<template>
  <vx-card
    title="Virtual Slides"
    class="carousel-example"
    code-toggler
    @click="addComponent('carouselVirtualSlides')"
  >
    <div class="mb-4">
      <vs-button class="mr-4 mb-4" @click.native="toSlide(0)"
        >To Slide 1</vs-button
      >
      <vs-button class="mr-4 mb-4" @click.native="toSlide(249)"
        >To Slide 250</vs-button
      >
      <vs-button class="mr-4 mb-4" @click.native="toSlide(499)"
        >To Slide 500</vs-button
      >
    </div>
    <!-- swiper -->
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      :dir="$vs.rtl ? 'rtl' : 'ltr'"
      :key="$vs.rtl"
    >
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </vx-card>
</template>

<script>
// import 'swiper/dist/css/swiper.min.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    // swiper,
    //   swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        virtual: {
          slides: (function () {
            const slides = []
            for (let i = 0; i < 600; i += 1) {
              slides.push(`Slide ${i + 1}`)
            }
            return slides
          })(),
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
  methods: {
    toSlide(i) {
      this.$refs.mySwiper.swiper.slideTo(i, 0)
    },
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
}
</script>

<style lang="scss" scoped>
.swiper-container {
  ::v-deep .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 300px;

    .theme-dark & {
      background-color: #242a47;
    }
  }
}
</style>
