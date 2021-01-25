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

export default {
  name: 'ComponentCreatorEditor',

  components: {
    DIV,
    SPAN,
    BUTTON,
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
