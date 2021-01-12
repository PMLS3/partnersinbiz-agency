<!-- =========================================================================================
    File Name: component-generator.vue
    Description: Example of building components

========================================================================================== -->

<template>
  <!-- <div style="width: 100%"> -->
  <component
    :key="mykey"
    :is="schema.title"
    :schema="schema"
    :index="myindex"
    :mainIndex="mainIndex"
  ></component>
  <!-- </div> -->
</template>

<script>
//Used
//**components
import alert from '@/components/page-generator/components/use/components/AppsUseAlert'
import avatar from '@/components/page-generator/components/use/components/AppsUseAvatar'
import breadcrumb from '@/components/page-generator/components/use/components/AppsUseBreadcrumb'
import buttons from '@/components/page-generator/components/use/components/AppsUseButton'
import t_button from '@/components/page-generator/components/use/components/AppsUseT_button'

import chip from '@/components/page-generator/components/use/components/AppsUseChip'
import collapse from '@/components/page-generator/components/use/components/AppsUseCollapse'
import dialogs from '@/components/page-generator/components/use/components/AppsUseDialogs'
import divider from '@/components/page-generator/components/use/components/AppsUseDivider'
import dropdown from '@/components/page-generator/components/use/components/AppsUseDropdown'
import list from '@/components/page-generator/components/use/components/AppsUseList'
import loading from '@/components/page-generator/components/use/components/AppsUseLoading'
import navbar from '@/components/page-generator/components/use/components/AppsUseNavbar'
import notifications from '@/components/page-generator/components/use/components/AppsUseNotifications'
import pagination from '@/components/page-generator/components/use/components/AppsUsePagination'
import popup from '@/components/page-generator/components/use/components/AppsUsePopup'
import progressBar from '@/components/page-generator/components/use/components/AppsUseProgress'
import slider from '@/components/page-generator/components/use/components/AppsUseSlider'
import tabs from '@/components/page-generator/components/use/components/AppsUseTabs'
import tooltip from '@/components/page-generator/components/use/components/AppsUseTooltip'
import upload from '@/components/page-generator/components/use/components/AppsUseUpload'
import imagesAdd from '@/components/page-generator/components/use/components/AppsUseImages'
import imageAdd from '@/components/page-generator/components/use/components/AppsUseImage'
import vcard from '@/components/page-generator/components/use/ui-elements/card/AppsUseCard'
import grid from '@/components/page-generator/components/grid/grid'

//**extra */
//**carousel */
import carouselAutoplay from '@/components/page-generator/components/use/extra_components/carousel/AppsUseCarouselAutoplay'

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

//Content
import divi from '@/components/page-generator/components/use/content/AppsUseDivis'
import spanAdd from '@/components/page-generator/components/use/content/AppsUseSpanAdd'
import htmlAdd from '@/components/page-generator/components/use/content/AppsUseHtmlEditor'
import headerAdd from '@/components/page-generator/components/use/content/AppsUseHeaderAdd'
import footerAdd from '@/components/page-generator/components/use/content/AppsUseFooterAdd'
import bodyAdd from '@/components/page-generator/components/use/content/AppsUseBodyAdd'
import templateAdd from '@/components/page-generator/components/use/content/AppsUseTemplateAdd'
import formAdd from '@/components/page-generator/components/use/content/AppsUseForm'
import h1Tag from '@/components/page-generator/components/use/content/AppsUseh1Tag'
import h2Tag from '@/components/page-generator/components/use/content/AppsUseh2Tag'
import h3Tag from '@/components/page-generator/components/use/content/AppsUseh3Tag'
import h4Tag from '@/components/page-generator/components/use/content/AppsUseh4Tag'
import h5Tag from '@/components/page-generator/components/use/content/AppsUseh5Tag'
import h6Tag from '@/components/page-generator/components/use/content/AppsUseh6Tag'
import pTag from '@/components/page-generator/components/use/content/AppsUsepTag'
import hrTag from '@/components/page-generator/components/use/content/AppsUsehrTag'

//Apps
import eCommerce from '@/components/page-generator/components/use/apps/AppsUseeCommerce'
import Events from '@/components/page-generator/components/use/apps/AppsUseEvents'
import AroundUs from '@/components/page-generator/components/use/apps/AppsUseAroundUs'
import Blog from '@/components/page-generator/components/use/apps/AppsUseBlog'
import Contact from '@/components/page-generator/components/use/apps/AppsUseContact'
import DirectionView from '@/components/page-generator/components/use/apps/AppsUseDirectionView'
import Documents from '@/components/page-generator/components/use/apps/AppsUseDocuments'

import EmailPhoto from '@/components/page-generator/components/use/apps/AppsUseEmailPhoto'
import FanWall from '@/components/page-generator/components/use/apps/AppsUseFanWall'
import ImageGallery from '@/components/page-generator/components/use/apps/AppsUseImageGallery'
import InfoTier1 from '@/components/page-generator/components/use/apps/AppsUseInfoTier1'
import Loyalty from '@/components/page-generator/components/use/apps/AppsUseLoyalty'
import MailingList from '@/components/page-generator/components/use/apps/AppsUseMailingList'
import RealEstate from '@/components/page-generator/components/use/apps/RealEstate/AppsUseRealEstate'

import Youtube from '@/components/page-generator/components/use/apps/AppsUseYoutube'

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
    htmlAdd,
    popup,
    progressBar,
    slider,
    tabs,
    tooltip,
    upload,
    imagesAdd,
    imageAdd,
    headerAdd,
    footerAdd,
    bodyAdd,
    templateAdd,

    vcard,
    grid,
    //content
    h1Tag,
    h2Tag,
    h3Tag,
    h4Tag,
    h5Tag,
    h6Tag,
    hrTag,
    pTag,
    spanAdd,
    htmlAdd,
    headerAdd,
    footerAdd,
    bodyAdd,
    templateAdd,
    formAdd,
    //Apps
    eCommerce,
    Events,
    AroundUs,
    Blog,
    Contact,
    DirectionView,
    Documents,
    EmailPhoto,
    FanWall,
    ImageGallery,
    InfoTier1,
    Loyalty,
    MailingList,
    Youtube,
    RealEstate,
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
  props: ['schema', 'mykey', 'myindex', 'mainIndex'],
}
</script>
<style lang="scss">
@import '@/assets/scss/vuexy/pages/profile.scss';
</style>
