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
import DIV from '@/components/page-builder/component-creator/components/Editor/components/ComponentCreatorEditorDivi.vue'
import BUTTON from '@/components/page-builder/component-creator/components/Editor/components/ComponentCreatorEditorButton.vue'
import SVGS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorSvg.vue'
import PATHS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorPath.vue'
import H1S from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorh1Tag.vue'
import H2S from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorh2Tag.vue'
import H3S from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorh3Tag.vue'
import H4S from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorh4Tag.vue'
import H5S from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorh5Tag.vue'
import H6S from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorh6Tag.vue'

import PS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorP.vue'
import FOOTERS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorFooter.vue'
import SMALLS from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorSmall.vue'
import CITES from '@/components/page-builder/component-creator/components/Editor/content/ComponentCreatorEditorCite.vue'

export default {
  name: 'ComponentCreatorEditor',

  components: {
    DIV,
    SPAN,
    BUTTON,
    SVGS,
    PATHS,
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
