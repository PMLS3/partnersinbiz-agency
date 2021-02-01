<template>
  <div>
    <div class="w-full mb-3">
      <h3 class="text-gray-600">{{ schema.name }}</h3>

      <vs-button icon="check" class="float-right" @click="update()"></vs-button>
    </div>

    <vs-textarea v-model="classUpdate" placeholder="Class" class="w-full" />
    <vs-divider></vs-divider>

    <div class="my-4 text-base text-gray-800">Break Point</div>
    <div class="flex">
      <vs-tooltip text="Cover all" position="top">
        <vs-radio
          v-model="break_points"
          vs-name="break_points"
          vs-value="none"
          class="mr-2"
          >x</vs-radio
        >
      </vs-tooltip>
      <vs-tooltip text="Small: 640px" position="top">
        <vs-radio
          v-model="break_points"
          vs-name="break_points"
          vs-value="sm:"
          class="mr-2"
          >sm</vs-radio
        >
      </vs-tooltip>
      <vs-tooltip text="Medium: 768px" position="top">
        <vs-radio
          v-model="break_points"
          vs-name="break_points"
          vs-value="md:"
          class="mr-2"
          >md</vs-radio
        >
      </vs-tooltip>
      <vs-tooltip text="Large: 1024px" position="top">
        <vs-radio
          v-model="break_points"
          vs-name="break_points"
          vs-value="lg:"
          class="mr-2"
          >lg</vs-radio
        >
      </vs-tooltip>
      <vs-tooltip text="Extra large: 1280px" position="top">
        <vs-radio
          v-model="break_points"
          vs-name="break_points"
          vs-value="xl:"
          class="mr-2"
          >xl</vs-radio
        >
      </vs-tooltip>
      <vs-tooltip text="Extra Extra Large: 1536px" position="top">
        <vs-radio
          v-model="break_points"
          vs-name="break_points"
          vs-value="2xl:"
          class="mr-2"
          >2xl</vs-radio
        >
      </vs-tooltip>
    </div>
    <vs-divider></vs-divider>
    <PerfectScrollbar>
      <vs-tabs alignment="fixed" position="left">
        <vs-tab label="Current">
          <vs-col
            vs-type="flex"
            vs-justify="space-between"
            vs-align="center"
            vs-w="12"
            v-for="(item, i) in wordsSplit"
            :key="i"
          >
            <span>{{ item }}</span>
            <vs-button
              icon-pack="feather"
              size="small"
              color="danger"
              radius
              icon="icon-trash"
              @click="deleteItem(item, i)"
            ></vs-button>
          </vs-col>
        </vs-tab>
        <vs-tab label="Layout">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Box Sizing</div>

              <ClassLayoutBoxSizing @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Clear</div>

              <ClassLayoutClear @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Container</div>

              <ClassLayoutContainer @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Display</div>

              <ClassLayoutDisplay @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Floats</div>

              <ClassLayoutFloats @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Object Fit</div>

              <ClassLayoutObjectFit @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Object Position</div>

              <ClassLayoutObjectPosition @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Over flow</div>

              <ClassLayoutOverflow @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Overscroll Behaviour</div>

              <ClassLayoutOverscrollBehaviour @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Position</div>

              <ClassLayoutPosition @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Top/Right/Left/Bottom</div>

              <ClassLayoutTopRightBottomLeft @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Visibility</div>

              <ClassLayoutVisibility @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Z-index</div>

              <ClassLayoutZIndex @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Flexbox">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Flexbox</div>

              <ClassFlexbox @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Flexbox Grow</div>

              <ClassFlexboxGrow @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Flexbox Direction</div>

              <ClassFlexboxDirection @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Flexbox Order</div>

              <ClassFlexboxOrder @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Flexbox Shrink</div>

              <ClassFlexboxShrink @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Flexbox Wrap</div>

              <ClassFlexboxWrap @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Grid">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Grid Auto Columns</div>

              <ClassGridAutoColumns @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Grid Auto Flow</div>

              <ClassGridAutoFlow @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Grid Auto Rows</div>

              <ClassGridAutoRows @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Grid Column Start End</div>

              <ClassGridColumnStartEnd @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Grid Gap</div>

              <ClassGridGap @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Grid Tamplate Rows</div>

              <ClassGridTemplateRows @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Grid Row Start End</div>

              <ClassGridRowStartEnd @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Grid Template Columns</div>

              <ClassGridTemplateColumn @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Box Alignment">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Box Align Content</div>

              <ClassBoxAlignContent @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Box Align Items</div>

              <ClassBoxAlignItems @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Box Align Self</div>

              <ClassBoxAlignSelf @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Box Justify Content</div>

              <ClassBoxJustifyContent @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Box Justify Items</div>

              <ClassBoxJustifyItems @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Justify Self</div>

              <ClassBoxJustifySelf @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Box Place Content</div>

              <ClassBoxPlaceContent @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Box Place Items</div>

              <ClassBoxPlaceItems @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Box Place Self</div>

              <ClassBoxPlaceSelf @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Spacing">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Margin</div>

              <ClassSpacingMargin @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Padding</div>
              <ClassSpacingPadding @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Space Between</div>
              <ClassSpacingSpaceBetween @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Sizing">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Height</div>

              <ClassSizingHeight @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Width</div>

              <ClassSizingWidth @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Max Height</div>

              <ClassSizingMaxHeight @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Min Height</div>

              <ClassSizingMinHeight @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Max Width</div>

              <ClassSizingMaxWidth @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Min Width</div>

              <ClassSizingMinWidth @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Typography">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Typography</div>

              <ClassTypography @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Backgrounds">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Backgrounds Attachment</div>

              <ClassBackgroundsAttachment @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Backgrounds Clip</div>

              <ClassBackgroundsClip @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Backgrounds Color</div>

              <ClassBackgroundsColor @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Backgrounds Gradient Color Stops</div>

              <ClassBackgroundsGradientColorStops @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Backgrounds Image</div>

              <ClassBackgroundsImage @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Backgrounds Opacity</div>

              <ClassBackgroundsOpacity @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Backgrounds Position</div>

              <ClassBackgroundsPosition @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Backgrounds Repeat</div>

              <ClassBackgroundsRepeat @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Backgrounds Size</div>

              <ClassBackgroundsSize @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Borders">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Borders Color</div>

              <ClassBordersColor @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Divide Color</div>

              <ClassBordersDivideColor @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Divide Opacity</div>

              <ClassBordersDivideOpacity @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Divide Style</div>

              <ClassBordersDivideStyle @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Divide Width</div>

              <ClassBordersDivideWidth @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Opacity</div>

              <ClassBordersOpacity @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Radius</div>

              <ClassBordersRadius @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Ring Color</div>

              <ClassBordersRingColor @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Ring Offset Color</div>

              <ClassBordersRingOffsetColor @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Ring Offset Width</div>

              <ClassBordersRingOffsetWidth @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Ring Opacity</div>

              <ClassBordersRingOpacity @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Ring Width</div>

              <ClassBordersRingWidth @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Style</div>

              <ClassBordersStyle @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Borders Width</div>

              <ClassBordersWidth @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Effects">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Effects Box Shadow</div>

              <ClassEffectsBoxShadow @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Effects Opacity</div>

              <ClassEffectsOpacity @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Tables">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Tables Collapse</div>

              <ClassTablesCollapse @emitvalue="emitvalue" />
            </vs-collapse-item>
            <vs-collapse-item>
              <div slot="header">Tables Layout</div>

              <ClassTablesLayout @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Transitions">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Transitions Animation</div>

              <ClassTransitionsAnimation @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Transitions Delay</div>

              <ClassTransitionsDelay @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Transitions Duration</div>

              <ClassTransitionsDuration @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Transitions Property</div>

              <ClassTransitionsProperty @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Transitions Timing Function</div>

              <ClassTransitionsTimingFunction @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Transforms">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">Transforms</div>

              <ClassTransforms @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Transforms Origin</div>

              <ClassTransformsOrigin @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Transforms Rotate</div>

              <ClassTransformsRotate @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Transforms Scale</div>

              <ClassTransformsScale @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Transforms Skew</div>

              <ClassTransformsSkew @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">Transforms Translate</div>

              <ClassTransformsTranslate @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
        <vs-tab label="Interactivity">
          <vs-collapse type="shadow">
            <vs-collapse-item>
              <div slot="header">InterActivity Appearance</div>

              <ClassInteractivityAppearance @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">InterActivity Cursor</div>

              <ClassInteractivityCursor @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">InterActivity Outline</div>

              <ClassInteractivityOutline @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">InterActivity Pointer Events</div>

              <ClassInteractivityPointerEvents @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">InterActivity Resize</div>

              <ClassInteractivityResize @emitvalue="emitvalue" />
            </vs-collapse-item>

            <vs-collapse-item>
              <div slot="header">InterActivity User Select</div>

              <ClassInteractivityUserSelect @emitvalue="emitvalue" />
            </vs-collapse-item>
          </vs-collapse>
        </vs-tab>
      </vs-tabs>
    </PerfectScrollbar>

    <!-- <div v-if="schema">
      <vs-collapse>
        <vs-collapse-item>
          <div slot="header">Current Classes</div>
        </vs-collapse-item>
      </vs-collapse>
    </div>

    <vs-divider></vs-divider>
    <vs-collapse>
      <vs-collapse-item>
        <div slot="header">Break Point</div>
        <vs-tooltip text="Cover all" position="top">
          <vs-radio
            v-model="break_points"
            vs-name="break_points"
            vs-value="none"
            >x</vs-radio
          >
        </vs-tooltip>
        <vs-tooltip text="Small: 640px" position="top">
          <vs-radio v-model="break_points" vs-name="break_points" vs-value="sm:"
            >sm</vs-radio
          >
        </vs-tooltip>
        <vs-tooltip text="Medium: 768px" position="top">
          <vs-radio v-model="break_points" vs-name="break_points" vs-value="md:"
            >md</vs-radio
          >
        </vs-tooltip>
        <vs-tooltip text="Large: 1024px" position="top">
          <vs-radio v-model="break_points" vs-name="break_points" vs-value="lg:"
            >lg</vs-radio
          >
        </vs-tooltip>
        <vs-tooltip text="Extra large: 1280px" position="top">
          <vs-radio v-model="break_points" vs-name="break_points" vs-value="xl:"
            >xl</vs-radio
          >
        </vs-tooltip>
        <vs-tooltip text="Extra Extra Large: 1536px" position="top">
          <vs-radio
            v-model="break_points"
            vs-name="break_points"
            vs-value="2xl:"
            >2xl</vs-radio
          >
        </vs-tooltip>
      </vs-collapse-item>
    </vs-collapse>
    <vs-divider></vs-divider>
    <vs-collapse>
      <vs-collapse-item>
        <div slot="header">Padding/Margin</div>
        <vs-radio v-model="pmType" vs-name="pmType" vs-value="mx-"
          >Margin Horizontal</vs-radio
        >
        <vs-radio v-model="pmType" vs-name="pmType" vs-value="my-"
          >Margin Vertical</vs-radio
        >
        <vs-radio v-model="pmType" vs-name="pmType" vs-value="ml-"
          >Maring left</vs-radio
        >
        <vs-radio v-model="pmType" vs-name="pmType" vs-value="mr-"
          >Maring right</vs-radio
        >
        <vs-radio v-model="pmType" vs-name="pmType" vs-value="mt-"
          >Maring top</vs-radio
        >
        <vs-radio v-model="pmType" vs-name="pmType" vs-value="mb-"
          >Maring bottom</vs-radio
        >

        <vs-divider></vs-divider>
        <vs-radio v-model="pmType" vs-name="pmType" vs-value="px-"
          >Padding Horizontal</vs-radio
        >
        <vs-radio v-model="pmType" vs-name="pmType" vs-value="py-"
          >Padding Vertical</vs-radio
        >
        <vs-radio v-model="pmType" vs-name="pmType" vs-value="pl-"
          >Padding left</vs-radio
        >
        <vs-radio v-model="pmType" vs-name="pmType" vs-value="pr-"
          >Padding right</vs-radio
        >
        <vs-radio v-model="pmType" vs-name="pmType" vs-value="pt-"
          >Padding top</vs-radio
        >
        <vs-radio v-model="pmType" vs-name="pmType" vs-value="pb-"
          >Padding bottom</vs-radio
        >

        <vs-input-number min="0" v-model="number" class="w-24 mx-auto" />
        <vs-button
          @click="changeComponent(pmType + number)"
          class="float-right"
          size="small"
          >Submit</vs-button
        >
      </vs-collapse-item>
    </vs-collapse> -->
  </div>
</template>

<script>
export default {
  props: ['schema'],
  data() {
    return {
      classUpdate: '',

      break_points: 'none',
    }
  },
  computed: {
    wordsSplit() {
      if (this.schema) {
        if (this.schema.class) {
          return this.schema.class.trim().split(' ')
        } else {
          return ''
        }
      } else {
        return ''
      }
    },
  },
  watch: {
    edit_component: function () {
      switch (this.schema.title) {
        case 'DIV':
          this.options = {
            size: true,
            sizeOptions: {
              vs: true,
            },
            alignment: true,
            alignmentOptions: {
              justify: true,
              align: true,
              center: true,
              flex_start: true,
              flex_end: true,
              space_around: true,
              space_between: true,
            },
          }
          break
        case 'buttons':
          break
      }
    },
    schema() {
      this.classUpdate = this.schema.class
    },
  },
  created() {
    this.classUpdate = this.schema.class
  },

  methods: {
    deleteItem(item, i) {
      let test = this.classUpdate.replace(item, '')
      let str = test.replace(/ +(?= )/g, '')
      this.classUpdate = str

      this.update()
    },
    emitvalue(data) {
      console.log('data', data)
      this.changeComponent(data)
    },
    changeComponent(item) {
      let vm = this
      if (this.break_points != 'none') {
        item = this.break_points + item
      }
      let check_item = item.split('-')
      let check_array = this.classUpdate.split(' ')
      let found = false
      for (let i = 0; i < check_array.length; i++) {
        let check_array_item = check_array[i].split('-')

        if (check_array_item[0] == check_item[0]) {
          let newClass = vm.classUpdate.replace(check_array[i], item)
          vm.classUpdate = newClass
          found = true
        }
      }

      if (found) {
        this.update()
      } else {
        this.classUpdate = this.classUpdate + ' ' + item
        this.update()
      }
    },
    update() {
      let payload = {
        schema: this.schema,
        classUpdate: this.classUpdate,
      }
      this.$store.commit('page_builder/UPDATE_COMPONENT', payload)
    },
  },
}
</script>
