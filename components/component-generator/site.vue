<!-- =========================================================================================
    File Name: component-generator.vue
    Description: Example of building components

========================================================================================== -->

<template>
  <component
    :key="key"
    :is="schema.title"
    :schema="schema"
    :index="index"
    :mainIndex="mainIndex"
  ></component>
</template>

<script>
//Used
//**components
import alert from '@/components/page-generator/components/use/components/alert'
import avatar from '@/components/page-generator/components/use/components/avatar'
import breadcrumb from '@/components/page-generator/components/use/components/breadcrumb'
import buttons from '@/components/page-generator/components/use/components/button'
import chip from '@/components/page-generator/components/use/components/chip'
import collapse from '@/components/page-generator/components/use/components/collapse'
import dialogs from '@/components/page-generator/components/use/components/dialogs'
import divi from '@/components/page-generator/components/use/components/divi'
import divider from '@/components/page-generator/components/use/components/divider'
import dropdown from '@/components/page-generator/components/use/components/dropdown'
import list from '@/components/page-generator/components/use/components/list'
import loading from '@/components/page-generator/components/use/components/loading'
import navbar from '@/components/page-generator/components/use/components/navbar'
import notifications from '@/components/page-generator/components/use/components/notifications'
import pagination from '@/components/page-generator/components/use/components/pagination'
import popup from '@/components/page-generator/components/use/components/popup'
import progressBar from '@/components/page-generator/components/use/components/progress'
import slider from '@/components/page-generator/components/use/components/slider'
import tabs from '@/components/page-generator/components/use/components/tabs'
import tooltip from '@/components/page-generator/components/use/components/tooltip'
import upload from '@/components/page-generator/components/use/components/upload'
import imagesAdd from '@/components/page-generator/components/use/components/images'
import imageAdd from '@/components/page-generator/components/use/components/image'

import card from '@/components/page-generator/components/use/ui-elements/card/card'
import grid from '@/components/page-generator/components/grid/grid'

//**extra */
//**carousel */
import carouselAutoplay from '@/components/page-generator/components/use/extra_components/carousel/carousel_autoplay'

//Carousel
import carousel3dCoverflowEffect from '@/components/page-generator/components/components/extra-components/carousel/Carousel3dCoverflowEffect'
import carousel3dEffect from '@/components/page-generator/components/components/extra-components/carousel/Carousel3dEffect'
import carouselDefault from '@/components/page-generator/components/components/extra-components/carousel/CarouselDefault'
import carouselEffectFade from '@/components/page-generator/components/components/extra-components/carousel/CarouselEffectFade'
import carouselGallery from '@/components/page-generator/components/components/extra-components/carousel/CarouselGallery'
import carouselLazyLoading from '@/components/page-generator/components/components/extra-components/carousel/CarouselLazyLoading'
import carouselMulitpleSlidesPerView from '@/components/page-generator/components/components/extra-components/carousel/CarouselMultipleSlidesPerView'
import carouselMultiRowSlidesLayout from '@/components/page-generator/components/components/extra-components/carousel/CarouselMultiRowSlidesLayout'
import carouselNavigation from '@/components/page-generator/components/components/extra-components/carousel/CarouselNavigation'
import carouselPagination from '@/components/page-generator/components/components/extra-components/carousel/CarouselPagination'
import carouselParallax from '@/components/page-generator/components/components/extra-components/carousel/CarouselParallax'
import carouselProgress from '@/components/page-generator/components/components/extra-components/carousel/CarouselProgress'
import carouselResponsiveBreakpoints from '@/components/page-generator/components/components/extra-components/carousel/CarouselResponsiveBreakpoints'
import carouselVirtualSlides from '@/components/page-generator/components/components/extra-components/carousel/CarouselVirtualSlides'

//Cards
import basicCard from '@/components/page-generator/components/ui-elements/card/basic/basicCard'
import basicCardNumb from '@/components/page-generator/components/ui-elements/card/basic/numb'
import basicCardProgress from '@/components/page-generator/components/ui-elements/card/basic/progress'
import basicCardProfileMinimal from '@/components/page-generator/components/ui-elements/card/basic/profile_minimal'
import basicCardProfile from '@/components/page-generator/components/ui-elements/card/basic/profile'
import basicCardProfileScore from '@/components/page-generator/components/ui-elements/card/basic/profile_score'
import basicCardOverlay from '@/components/page-generator/components/ui-elements/card/basic/overlay'
import basicCardOverlay2 from '@/components/page-generator/components/ui-elements/card/basic/overlay2'

import eCommerce from '@/components/page-generator/components/use/apps/eCommerce'
import Events from '@/components/page-generator/components/use/apps/Events'

export default {
  name: 'componentGenerator',

  components: {
    //used
    //**components */
    alert,
    avatar,
    breadcrumb,
    buttons,
    chip,
    collapse,
    dialogs,
    divi,
    divider,
    dropdown,
    list,
    loading,
    navbar,
    notifications,
    pagination,
    popup,
    progressBar,
    slider,
    tabs,
    tooltip,
    upload,
    imagesAdd,
    imageAdd,

    card,
    grid,

    //Apps
    eCommerce,
    Events,
    // Calendar,

    //Cards
    basicCard,
    basicCardNumb,
    basicCardProgress,
    basicCardProfileMinimal,
    basicCardProfile,
    basicCardProfileScore,
    basicCardOverlay,
    basicCardOverlay2,

    //Carousel
    carouselAutoplay,
    carousel3dCoverflowEffect,
    carousel3dEffect,
    carouselDefault,
    carouselEffectFade,
    carouselGallery,
    carouselLazyLoading,
    carouselMulitpleSlidesPerView,
    carouselMultiRowSlidesLayout,
    carouselNavigation,
    carouselPagination,
    carouselParallax,
    carouselProgress,
    carouselResponsiveBreakpoints,
    carouselVirtualSlides,
  },
  data() {
    return {
      popup: false,
      field: {},
      index: 0,
      styleData: {
        border: '1px solid black',
        'min-height': '50px',
        position: 'relative',
      },
    }
  },
  props: ['schema', 'key', 'is', 'index', 'mainIndex'],
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/vuexy/pages/profile.scss';
</style>
