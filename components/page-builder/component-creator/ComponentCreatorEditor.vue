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

export default {
  name: 'ComponentCreatorEditor',

  components: {
    DIV,
    SPAN,
    BUTTON,
    SVGS,
    PATHS,
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
