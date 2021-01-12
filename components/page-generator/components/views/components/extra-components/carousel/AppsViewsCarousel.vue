<!-- =========================================================================================
    File Name: Carousel.vue
    Description: Carousel demo
    ----------------------------------------------------------------------------------------
  
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
import CarouselDefault from './AppsViewsCarouselDefault.vue'
import CarouselNavigation from './AppsViewsCarouselNavigation.vue'
import CarouselPagination from './AppsViewsCarouselPagination.vue'
import CarouselProgress from './AppsViewsCarouselProgress.vue'
import CarouselMultipleSlidesPerView from './AppsViewsCarouselMultipleSlidesPerView.vue'
import CarouselMultiRowSlidesLayout from './AppsViewsCarouselMultiRowSlidesLayout.vue'
import CarouselEffectFade from './AppsViewsCarouselEffectFade.vue'
import Carousel3dEffect from './AppsViewsCarousel3dEffect.vue'
import Carousel3dCoverflowEffect from './AppsViewsCarousel3dCoverflowEffect.vue'
import CarouselAutoplay from './AppsViewsCarouselAutoplay.vue'
import CarouselGallery from './AppsViewsCarouselGallery.vue'
import CarouselParallax from './AppsViewsCarouselParallax.vue'
import CarouselLazyLoading from './AppsViewsCarouselLazyLoading.vue'
import CarouselResponsiveBreakpoints from './AppsViewsCarouselResponsiveBreakpoints.vue'
import CarouselVirtualSlides from './AppsViewsCarouselVirtualSlides.vue'

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
