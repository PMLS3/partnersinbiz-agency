<!-- =========================================================================================
    File Name: Carousel.vue
    Description: Carousel demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="extra-component-vue-awesome-swiper-demo">
    <carousel-default />
    <carousel-navigation />
    <carousel-pagination />
    <carousel-progress />
    <carousel-multiple-slides-per-view />
    <carousel-multi-row-slides-layout />
    <carousel-effect-fade />
    <carousel-3d-effect />
    <carousel-3d-coverflow-effect />
    <carousel-autoplay />
    <carousel-gallery />
    <carousel-parallax />
    <carousel-lazy-loading />
    <carousel-responsive-breakpoints />
    <carousel-virtual-slides />
  </div>
</template>

<script>
import CarouselDefault from './ExampleCarouselDefault.vue'
import CarouselNavigation from './ExampleCarouselNavigation.vue'
import CarouselPagination from './ExampleCarouselPagination.vue'
import CarouselProgress from './ExampleCarouselProgress.vue'
import CarouselMultipleSlidesPerView from './ExampleCarouselMultipleSlidesPerView.vue'
import CarouselMultiRowSlidesLayout from './ExampleCarouselMultiRowSlidesLayout.vue'
import CarouselEffectFade from './ExampleCarouselEffectFade.vue'
import Carousel3dEffect from './ExampleCarousel3dEffect.vue'
import Carousel3dCoverflowEffect from './ExampleCarousel3dCoverflowEffect.vue'
import CarouselAutoplay from './ExampleCarouselAutoplay.vue'
import CarouselGallery from './ExampleCarouselGallery.vue'
import CarouselParallax from './ExampleCarouselParallax.vue'
import CarouselLazyLoading from './ExampleCarouselLazyLoading.vue'
import CarouselResponsiveBreakpoints from './ExampleCarouselResponsiveBreakpoints.vue'
import CarouselVirtualSlides from './ExampleCarouselVirtualSlides.vue'

export default {
  components: {
    CarouselDefault,
    CarouselNavigation,
    CarouselPagination,
    CarouselProgress,
    CarouselMultipleSlidesPerView,
    CarouselMultiRowSlidesLayout,
    CarouselEffectFade,
    Carousel3dEffect,
    Carousel3dCoverflowEffect,
    CarouselAutoplay,
    CarouselGallery,
    CarouselParallax,
    CarouselLazyLoading,
    CarouselResponsiveBreakpoints,
    CarouselVirtualSlides,
  },
}
</script>
