<template>
  <component
    :key="mykey"
    :is="schema.title"
    :schema="schema"
    :index="myindex"
    :mainIndex="mainIndex"
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
