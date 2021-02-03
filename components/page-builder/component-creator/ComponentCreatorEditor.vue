<template>
  <component
    :key="mykey"
    :is="schema.title"
    :schema="schema"
    :index="myindex"
    :mainIndex="mainIndex"
    :item_id="schema.id"
  ></component>
</template>

<script>
import SPAN from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorSpanAdd.vue'
import DIV from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorDiv.vue'
import UL from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorUl.vue'
import LI from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorLi.vue'
import NAV from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorNav.vue'
import BODY from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorBody.vue'
import FORM from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorForm.vue'

import ARTICLE from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorArticle.vue'
import ASIDE from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorAside.vue'

import HEADERS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorHeader.vue'
import BUTTON from '@/components/page-builder/component-creator/components/Editor/components/ComponentCreatorEditorButton.vue'

import H1S from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorh1Tag.vue'
import H2S from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorh2Tag.vue'
import H3S from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorh3Tag.vue'
import H4S from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorh4Tag.vue'
import H5S from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorh5Tag.vue'
import H6S from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorh6Tag.vue'

import PS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorP.vue'
import SECTIONS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorSection.vue'
import IMGS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorImg.vue'
import VIDEO from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorVideo.vue'
import A from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorA.vue'
import HR from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorHr.vue'

import INPUT from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorInput.vue'

import SVGS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorSvg.vue'
import GS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorG.vue'
import POLYGONS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorPolygon.vue'

import PATHS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorPath.vue'
import RECTS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorRect.vue'
import LINES from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorLine.vue'
import CIRCLES from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorCircle.vue'

import FOOTERS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorFooter.vue'
import SMALLS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorSmall.vue'
import CITES from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorCite.vue'

import TRANSITIONS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorTransition.vue'

import Blog from '@/components/apps/blog/AppsBlog.vue'
import AroundUs from '@/components/apps/around-us/AppsAroundUs.vue'
import Broadcaster from '@/components/apps/broadcaster/AppsBroadcaster.vue'
import ClassRoom from '@/components/apps/classroom/AppsClassroom.vue'
import Contacts from '@/components/apps/contacts/AppsContacts.vue'
import Documents from '@/components/apps/documents/AppsDocuments.vue'
import Drawingboard from '@/components/apps/drawing-board/AppsDrawingBoard.vue'
import eCommerce from '@/components/apps/eCommerce/AppsEcommerce.vue'
import Email from '@/components/apps/email/Email.vue'
import EmailPhoto from '@/components/apps/email-photo/AppsEmailPhoto.vue'
import Events from '@/components/apps/events/AppsEvents.vue'
import Fanwall from '@/components/apps/fanwall/AppsFanwall.vue'
import Golf from '@/components/apps/golf/AppsGolf.vue'
import ImageGallery from '@/components/apps/image-gallery/AppsImageGallery.vue'
import InfoTier from '@/components/apps/info-tier/AppsInfoTier.vue'
import Kanban from '@/components/apps/kanban/Kanban.vue'
import Loyalty from '@/components/apps/loyalty/AppsLoyalty.vue'
import MailingList from '@/components/apps/mailing-list/AppsMailingList.vue'
import Music from '@/components/apps/music/AppsMusic'
import ProjectManagement from '@/components/apps/project-management/AppsProjectManagement.vue'
import Radio from '@/components/apps/radio/AppsRadio.vue'
import RealEstate from '@/components/apps/real-estate/AppsRealEstate.vue'
import Videos from '@/components/apps/videos/AppsVideos.vue'

export default {
  name: 'ComponentCreatorEditor',

  components: {
    DIV,
    SPAN,
    BUTTON,
    SVGS,
    PATHS,
    RECTS,
    GS,
    HR,
    A,
    UL,
    LI,
    NAV,
    POLYGONS,
    SECTIONS,
    ARTICLE,
    ASIDE,
    LINES,
    CIRCLES,
    HEADERS,
    BODY,
    FORM,
    INPUT,
    H1S,
    H2S,
    H3S,
    H4S,
    H5S,
    H6S,
    PS,
    FOOTERS,
    SMALLS,
    CITES,
    IMGS,
    VIDEO,
    TRANSITIONS,
    Blog,
    AroundUs,
    Broadcaster,
    ClassRoom,
    Contacts,
    Documents,
    Drawingboard,
    eCommerce,
    Email,
    EmailPhoto,
    Events,
    Fanwall,
    Golf,
    ImageGallery,
    InfoTier,
    Kanban,
    Loyalty,
    MailingList,
    Music,
    ProjectManagement,
    Radio,
    RealEstate,
    Videos,
  },
  data() {
    return {
      popup: false,
      field: {},
      index: 0,
    }
  },
  props: ['schema', 'mykey', 'myindex', 'mainIndex'],
}
</script>
