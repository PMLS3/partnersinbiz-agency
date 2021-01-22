<template>
  <vs-card class="mt-8" style="width: 100%">
    <div slot="header">
      <h3>Inline</h3>
    </div>
    <div>
      <span
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</span
      >
      <vs-divider></vs-divider>

      <div v-if="schema">
        <vs-col
          vs-type="flex"
          vs-justify="space-between"
          vs-align="center"
          vs-w="12"
          v-for="(item, i) in Object.entries(schema)"
          :key="i"
        >
          <span>{{ item[0] }}:{{ item[1] }}</span>
          <vs-button
            icon-pack="feather"
            size="small"
            color="danger"
            radius
            icon="icon-trash"
            @click="deleteItem(item, i)"
          ></vs-button>
        </vs-col>
      </div>
      <vs-divider class="mt-4"></vs-divider>
      <!-- <vs-collapse>
        <vs-collapse-item>
          <div slot="header">
            Options
          </div> -->
      <vs-collapse class="mb-12">
        <vs-collapse-item v-if="options.color">
          <div slot="header">Color</div>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-radio
              v-model="colortype"
              vs-name="colortype"
              vs-value="color"
              v-if="options.colorOptions.color"
              >Color</vs-radio
            >

            <vs-radio
              v-model="colortype"
              vs-name="colortype"
              vs-value="colorx2"
              v-if="options.colorOptions.gradient"
              >Color 2/ Gradient</vs-radio
            >

            <vs-radio
              v-model="colortype"
              vs-name="colortype"
              vs-value="text_color"
              v-if="options.colorOptions.textCol"
              >Text Color</vs-radio
            >

            <vs-radio
              v-model="colortype"
              vs-name="colortype"
              vs-value="badge_color"
              v-if="options.colorOptions.badge"
              >Badge Color</vs-radio
            >
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-radio
              v-model="colortype"
              vs-name="colortype"
              vs-value="text"
              v-if="options.colorOptions.text"
              >Text</vs-radio
            >
            <vs-radio
              v-model="colortype"
              vs-name="colortype"
              vs-value="active_text_color"
              v-if="options.colorOptions.active"
              >Active Text Color</vs-radio
            >

            <vs-radio
              v-model="colortype"
              vs-name="colortype"
              vs-value="background_color"
              v-if="options.colorOptions.background"
              >Background Color</vs-radio
            >

            <vs-radio
              v-model="colortype"
              vs-name="colortype"
              vs-value="background_color_pop"
              v-if="options.colorOptions.pop"
              >Background Color Pop</vs-radio
            >
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
          >
            <vs-button
              color="primary"
              type="filled"
              @click="changeComponent(colortype, 'primary')"
              >Primary</vs-button
            >
            <vs-button
              color="success"
              type="filled"
              @click="changeComponent(colortype, 'success')"
              >Success</vs-button
            >
            <vs-button
              color="danger"
              type="filled"
              @click="changeComponent(colortype, 'danger')"
              >Danger</vs-button
            >
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mt-4"
          >
            <vs-button
              color="warning"
              type="filled"
              @click="changeComponent(colortype, 'warning')"
              >Warning</vs-button
            >
            <vs-button
              color="dark"
              type="filled"
              @click="changeComponent(colortype, 'dark')"
              >Dark</vs-button
            >
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
          >
            <ul class="clearfix">
              <!-- THEME COLORS -->
              <li
                v-for="color in themeColors"
                :key="color"
                :style="{ backgroundColor: color }"
                :class="ColorOptionClasses(color)"
                class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left border border-solid d-theme-border-grey-light"
                @click="ColorLocal = color"
              />

              <!-- CUSTOM COLOR -->
              <li
                :style="{ backgroundColor: customNavbarColor }"
                :class="ColorOptionClasses(ColorOptionClasses)"
                class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left"
                @click="ColorLocal = customNavbarColor"
              />

              <li class="float-left">
                <input
                  v-model="customNavbarColor"
                  class="w-10 cursor-pointer h-10 rounded-lg m-2"
                  type="color"
                />
              </li>
            </ul>
          </vs-col>
        </vs-collapse-item>
        <vs-collapse-item v-if="options.types">
          <div slot="header">Types</div>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-button
              size="small"
              type="border"
              v-if="options.typesOptions.border"
              @click="changeComponent('type', 'border')"
              >Border</vs-button
            >
            <vs-button
              size="small"
              type="flat"
              v-if="options.typesOptions.flat"
              @click="changeComponent('type', 'flat')"
              >Flat</vs-button
            >
            <vs-button
              size="small"
              type="gradient"
              v-if="options.typesOptions.gradient"
              @click="changeComponent('type', 'gradient')"
              >Gradient</vs-button
            >
            <vs-button
              size="small"
              type="filled"
              v-if="options.typesOptions.filled"
              @click="changeComponent('type', 'filled')"
              >Filled</vs-button
            >
            <vs-button
              size="small"
              type="line"
              v-if="options.typesOptions.line"
              @click="changeComponent('type', 'line')"
              >Line</vs-button
            >
          </vs-col>

          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-button
              size="small"
              type="filled"
              v-if="options.typesOptions.shadow"
              @click="changeComponent('type', 'shadow')"
              >Shadow</vs-button
            >
            <vs-button
              size="small"
              type="filled"
              v-if="options.typesOptions.flex"
              @click="changeComponent('type', 'flex')"
              >Flex</vs-button
            >
            <vs-button
              size="small"
              type="filled"
              v-if="options.typesOptions.fund"
              @click="changeComponent('type', 'fund')"
              >Fund</vs-button
            >
            <vs-button
              size="small"
              type="filled"
              v-if="options.typesOptions.relief"
              @click="changeComponent('type', 'relief')"
              >Relief</vs-button
            >
            <vs-button
              size="small"
              type="filled"
              v-if="options.typesOptions.color"
              @click="changeComponent('type', 'color')"
              >Color</vs-button
            >
            <vs-button
              size="small"
              type="filled"
              v-if="options.typesOptions.default"
              @click="changeComponent('type', 'default')"
              >Default</vs-button
            >
            <vs-button
              size="small"
              type="filled"
              v-if="options.typesOptions.margin"
              @click="changeComponent('type', 'margin')"
              >Margin</vs-button
            >
          </vs-col>
        </vs-collapse-item>
        <vs-collapse-item v-if="options.size">
          <div slot="header">Size</div>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
            v-if="options.sizeOptions.buttons"
          >
            <vs-button size="small" @click="changeComponent('size', 'small')"
              >Small</vs-button
            >
            <vs-button @click="changeComponent('size', '')">Medium</vs-button>
            <vs-button size="large" @click="changeComponent('size', 'large')"
              >Large</vs-button
            >
          </vs-col>

          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
            v-if="options.sizeOptions.percPix"
          >
            <vs-radio v-model="sizeType" vs-name="sizeType" vs-value="%"
              >Percentage</vs-radio
            >

            <vs-radio v-model="sizeType" vs-name="sizeType" vs-value="px"
              >Pixel</vs-radio
            >
          </vs-col>

          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
            v-if="options.sizeOptions.percPix"
          >
            <vs-input v-model="sizeUpdate" placeholder="px" />
            <vs-button @click="changeComponent('size', sizeUpdate + sizeType)"
              >submit</vs-button
            >
          </vs-col>

          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
            v-if="options.sizeOptions.vs"
          >
            <vs-input v-model="size.lg" label="lg" placeholder="lg" />
            <vs-input v-model="size.sm" label="sm" placeholder="sm" />
            <vs-input v-model="size.xs" label="xs" placeholder="xs" />

            <vs-button @click="changeComponent('size', size)">submit</vs-button>
          </vs-col>
        </vs-collapse-item>
        <vs-collapse-item v-if="options.alignment" class="mb-6">
          <div slot="header">Alignment</div>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-6"
          >
            <vs-radio
              v-model="alignmenttype"
              vs-name="justify"
              vs-value="justify"
              v-if="options.alignmentOptions.justify"
              >Justify</vs-radio
            >

            <vs-radio
              v-model="alignmenttype"
              vs-name="alignmenttype"
              vs-value="line_origin"
              v-if="options.alignmentOptions.origin"
              >Line Origin</vs-radio
            >

            <vs-radio
              v-model="alignmenttype"
              vs-name="alignmenttype"
              vs-value="line_position"
              v-if="options.alignmentOptions.line_position"
              >Line Position</vs-radio
            >

            <vs-radio
              v-model="alignmenttype"
              vs-name="alignmenttype"
              vs-value="align"
              v-if="options.alignmentOptions.align"
              >Align</vs-radio
            >

            <vs-radio
              v-model="alignmenttype"
              vs-name="alignmenttype"
              vs-value="position"
              v-if="options.alignmentOptions.position"
              >Position</vs-radio
            >

            <vs-radio
              v-model="alignmenttype"
              vs-name="alignmenttype"
              vs-value="alignment"
              v-if="options.alignmentOptions.alignment"
              >Alignment</vs-radio
            >
          </vs-col>
          <vs-col vs-w="12">
            <vs-button
              class="mx-3 my-3"
              v-if="options.alignmentOptions.left"
              @click="changeComponent(alignmenttype, 'left')"
              >Left</vs-button
            >
            <vs-button
              class="mx-3 my-3"
              v-if="options.alignmentOptions.left_center"
              @click="changeComponent(alignmenttype, 'left-center')"
              >Left Center</vs-button
            >
            <vs-button
              class="mx-3 my-3"
              v-if="options.alignmentOptions.center"
              @click="changeComponent(alignmenttype, 'center')"
              >Center</vs-button
            ><vs-button
              v-if="options.alignmentOptions.right_center"
              @click="changeComponent(alignmenttype, 'right-center')"
              >Right Center</vs-button
            >

            <vs-button
              class="mx-3 my-3"
              v-if="options.alignmentOptions.right"
              @click="changeComponent(alignmenttype, 'right')"
              >Right</vs-button
            ><vs-button
              class="mx-3 my-3"
              v-if="options.alignmentOptions.top"
              @click="changeComponent(alignmenttype, 'top')"
              >Top</vs-button
            ><vs-button
              class="mx-3 my-3"
              v-if="options.alignmentOptions.fixed"
              @click="changeComponent(alignmenttype, 'fixed')"
              >Fixed</vs-button
            >

            <vs-button
              class="mx-3 my-3"
              v-if="options.alignmentOptions.flex_start"
              @click="changeComponent(alignmenttype, 'flex-start')"
              >Flex Start</vs-button
            ><vs-button
              class="mx-3 my-3"
              v-if="options.alignmentOptions.flex_end"
              @click="changeComponent(alignmenttype, 'flex-end')"
              >Flex End</vs-button
            >
            <vs-button
              class="mx-3 my-3"
              v-if="options.alignmentOptions.space_around"
              @click="changeComponent(alignmenttype, 'space-around')"
              >Space Around</vs-button
            >
            <vs-button
              class="mx-3 my-3"
              v-if="options.alignmentOptions.space_between"
              @click="changeComponent(alignmenttype, 'space-between')"
              >Space Between</vs-button
            >
          </vs-col>
        </vs-collapse-item>

        <vs-collapse-item v-if="options.inputs">
          <div slot="header">Inputs</div>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-radio
              v-model="inputUpdate"
              vs-name="inputUpdate"
              vs-value="href"
              v-if="options.inputOptions.href"
              >Href</vs-radio
            >

            <vs-radio
              v-model="inputUpdate"
              vs-name="inputUpdate"
              vs-value="label"
              v-if="options.inputOptions.label"
              >Label</vs-radio
            >

            <vs-radio
              v-model="inputUpdate"
              vs-name="inputUpdate"
              vs-value="placeholder"
              v-if="options.inputOptions.placeholder"
              >Placeholder</vs-radio
            >
          </vs-col>

          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-radio
              v-model="inputUpdate"
              vs-name="inputUpdate"
              vs-value="vs_placeholder"
              v-if="options.inputOptions.vs_placeholder"
              >VS Placeholder</vs-radio
            >

            <vs-radio
              v-model="inputUpdate"
              vs-name="inputUpdate"
              vs-value="seperator"
              v-if="options.inputOptions.seperator"
              >Seperator</vs-radio
            >
          </vs-col>

          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-input v-model="inputtyped" placeholder="input" />
            <vs-button @click="changeComponent(inputUpdate, inputtyped)"
              >Submit</vs-button
            >
          </vs-col>
        </vs-collapse-item>

        <vs-collapse-item v-if="options.booleans">
          <div slot="header">Booleans</div>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="step_decimals"
              v-if="options.booleansOptions.step"
              >Step Decimals</vs-radio
            >

            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="indeterminate"
              v-if="options.booleansOptions.indeterminate"
              >Indeterminate</vs-radio
            >

            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="fullscreen"
              v-if="options.booleansOptions.fullscreen"
              >Fullscreen</vs-radio
            >
            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="avatar"
              v-if="options.booleansOptions.avatar"
              >Avatar</vs-radio
            >
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="open_hover"
              v-if="options.booleansOptions.open_hover"
              >Open Hover</vs-radio
            >

            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="disabled"
              v-if="options.booleansOptions.disabled"
              >Disabled</vs-radio
            >

            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="active"
              v-if="options.booleansOptions.active"
              >Active</vs-radio
            >
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="target"
              v-if="options.booleansOptions.target"
              >Target</vs-radio
            >

            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="ticks"
              v-if="options.booleansOptions.ticks"
              >Ticks</vs-radio
            >

            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="divider"
              v-if="options.booleansOptions.divider"
              >Divider</vs-radio
            >
          </vs-col>

          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="accordian"
              v-if="options.booleansOptions.accordian"
              >Accordian</vs-radio
            >

            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="radius"
              v-if="options.booleansOptions.radius"
              >Radius</vs-radio
            >

            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="closable"
              v-if="options.booleansOptions.closable"
              >Closable</vs-radio
            >

            <vs-radio
              v-model="truefalse"
              vs-name="truefalse"
              vs-value="transparent"
              v-if="options.booleansOptions.transparent"
              >Transparent</vs-radio
            >
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-button size="small" @click="changeComponent(truefalse, true)"
              >True</vs-button
            >
            <vs-button size="small" @click="changeComponent(truefalse, false)"
              >False</vs-button
            >
          </vs-col>
        </vs-collapse-item>

        <vs-collapse-item v-if="options.border">
          <div slot="header">Border</div>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-button
              size="small"
              @click="changeComponent('border_style', 'dotted')"
              >Dotted</vs-button
            >
            <vs-button
              size="small"
              @click="changeComponent('border_style', 'dashed')"
              >Dashed</vs-button
            >
            <vs-button
              size="small"
              @click="changeComponent('border_style', 'solid')"
              >Solid</vs-button
            >
          </vs-col>
        </vs-collapse-item>

        <vs-collapse-item v-if="options.icon">
          <div slot="header">Icon</div>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-radio v-model="icontype" vs-name="icontype" vs-value="icon"
              >Icon</vs-radio
            >

            <vs-radio
              v-model="icontype"
              vs-name="icontype"
              vs-value="close_icon"
              >Close Icon</vs-radio
            >

            <vs-radio
              v-model="icontype"
              vs-name="icontype"
              vs-value="remove_icon"
              >Remove Icon</vs-radio
            >

            <vs-radio
              v-model="icontype"
              vs-name="icontype"
              vs-value="icon_arrow"
              >Arrow Icon</vs-radio
            >
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="space-around"
            vs-align="center"
            vs-w="12"
            class="mb-4"
          >
            <vs-button
              icon-pack="feather"
              icon="icon-info"
              @click="changeComponent(icontype, 'icon-info')"
            ></vs-button>
          </vs-col>
        </vs-collapse-item>

        <vs-collapse-item v-if="options.link">
          <div slot="header">Link</div>

          <vs-button radius @click="changeComponent('radius', true)"
            >Radius</vs-button
          >
          <vs-button @click="changeComponent('radius', false)"
            >No Radius</vs-button
          >
        </vs-collapse-item>
      </vs-collapse>
      <!-- </vs-collapse-item> -->
      <!-- </vs-collapse> -->
      <vs-divider class="mt-10"></vs-divider>

      <vs-col
        vs-type="flex"
        vs-justify="space-around"
        vs-align="center"
        vs-w="12"
      >
        <vs-input v-model="inlineUpdateKey" placeholder="key" />
        <vs-input v-model="inlineUpdateValue" placeholder="value" />
      </vs-col>
    </div>
    <div slot="footer">
      <vs-row vs-justify="flex-end">
        <vs-button
          type="gradient"
          color="success"
          icon="check"
          @click="update()"
          >Submit</vs-button
        >
      </vs-row>
    </div>
  </vs-card>
</template>

<script>
export default {
  props: ['schema'],
  data() {
    return {
      customNavbarColor: '#3DC9B3',
      colortype: 'color',
      alignmenttype: 'position',
      truefalse: 'active',
      sizeType: 'px',
      sizeUpdate: 0,
      inputUpdate: 'label',
      inputtyped: '',
      icontype: 'icon',
      size: {
        lg: '',
        sm: '',
        xs: '',
      },
      options: {
        color: false,
        colorOptions: {
          color: false,
          gradient: false,
          textCol: false,
          badge: false,
          text: false,
          active: false,
          background: false,
          pop: false,
        },
        types: false,
        typesOptions: {
          border: false,
          flat: false,
          gradient: false,
          filled: false,
          line: false,
          shadow: false,
          flex: false,
          fund: false,
          relief: false,
          color: false,
          default: false,
          margin: false,
        },
        size: false,
        sizeOptions: {
          buttons: false,
          percPix: false,
          vs: false,
        },
        alignment: false,
        alignmentOptions: {
          justify: false,
          origin: false,
          line_position: false,
          align: false,
          position: false,
          alignment: false,
          left: false,
          left_center: false,
          center: false,
          right_center: false,
          right: false,
          top: false,
          fixed: false,
          flex_start: false,
          flex_end: false,
          space_around: false,
          space_between: false,
        },
        inputs: false,
        inputOptions: {
          href: false,
          label: false,
          placeholder: false,
          vs_placeholder: false,
          seperator: false,
        },
        booleans: false,
        booleansOptions: {
          step: false,
          indeterminate: false,
          fullscreen: false,
          avatar: false,
          open_hover: false,
          disabled: false,
          active: false,
          target: false,
          ticks: false,
          divider: false,
          accordian: false,
          radius: false,
          closable: false,
          transparent: false,
        },
        border: false,
        icon: false,
        link: false,
      },

      themeColors: [
        '#FFF',
        '#7367F0',
        '#28C76F',
        '#EA5455',
        '#FF9F43',
        '#1E1E1E',
      ],
      inlineUpdateKey: '',
      inlineUpdateValue: '',
    }
  },
  computed: {
    inlineUpdate() {
      let obj = {
        [this.inlineUpdateKey]: this.inlineUpdateValue,
      }
      return obj
    },
    ColorOptionClasses() {
      return (color) => {
        const classes = {}
        if (color == this.ColorLocal) classes['shadow-outline'] = true
        if (this.navbarTypeLocal == 'static')
          classes['cursor-not-allowed'] = true
        return classes
      }
    },
    ColorLocal: {
      get() {
        return this.navbarColor
      },
      set(val) {
        this.inlineUpdateKey = this.colortype
        this.inlineUpdateValue = val
        this.update()
      },
    },
    edit_component() {
      return this.$store.state.page_builder.edit_component
    },
  },

  //  this.options = {
  //         color: false,
  //         colorOptions: {
  //           color: false,
  //           gradient: false,
  //           textCol: false,
  //           badge:false,
  //           text: false,
  //           active: false,
  //           background: false,
  //           pop: false
  //         },
  //         types: false,
  //         typesOptions: {
  //           border: false,
  //           flat: false,
  //           gradient: false,
  //           filled: false,
  //           line: false,
  //           shadow: false,
  //           flex: false,
  //           fund: false,
  //           relief: false,
  //           color: false,
  //           default: false,
  //           margin: false,
  //         },
  //         size: false,
  //         sizeOptions: {
  //           buttons: false,
  //           percPix: false,
  //           vs: false
  //         },
  //         alignment: false,
  //         alignmentOptions: {
  //           justify: false,
  //           origin: false,
  //           line_position: false,
  //           align: false,
  //           position: false,
  //           alignment: false,
  //           left: false,
  //           left_center: false,
  //           center: false,
  //           right_center: false,
  //           right: false,
  //           top: false,
  //           fixed: false,
  //           flex_start: false,
  //           flex_end: false,
  //           space_around: false,
  //           space_between: false

  //         },
  //         inputs: false,
  //         inputOptions: {
  //           href: false,
  //           label: false,
  //           placeholder: false,
  //           vs_placeholder: false,
  //           seperator: false
  //         },
  //         booleans: false,
  //         booleansOptions: {
  //           step: false,
  //           indeterminate: false,
  //           fullscreen: false,
  //           avatar: false,
  //           open_hover: false,
  //           disabled: false,
  //           active: false,
  //           target: false,
  //           ticks: false,
  //           divider: false,
  //           accordian: false,
  //           radius: false,
  //           closable: false,
  //           transparent: false
  //         },
  //         border: false,
  //         icon: false,
  //         link: false,
  //       }

  watch: {
    edit_component: function () {
      switch (this.edit_component.schema.title) {
        case 'grid':
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
          this.options = {
            color: true,
            colorOptions: {
              color: true,
              gradient: true,
              textCol: true,
              badge: false,
              text: true,
              active: false,
              background: false,
              pop: false,
            },
          }
          break
      }
    },
  },
  methods: {
    changeComponent(key, value) {
      this.inlineUpdateKey = key
      this.inlineUpdateValue = value
      this.update()
    },
    deleteItem(item, i) {
      delete this.edit_component.schema.inline[item[0]]
      this.update()
    },
    update() {
      let vm = this
      let style
      let content
      let inline
      let classUp
      let place = this.edit_component.schema.place

      let imagesUploaded = this.uploaded_images

      if (this.edit_component.schema.style) {
        style = this.edit_component.schema.style
      } else {
        style = ''
      }

      if (this.edit_component.schema.content) {
        content = this.edit_component.schema.content
      } else {
        content = ''
      }

      if (this.inlineUpdateKey && this.inlineUpdateValue) {
        inline = { ...this.edit_component.schema.inline, ...this.inlineUpdate }
      } else {
        if (this.edit_component.schema.inline) {
          inline = this.edit_component.schema.inline
        } else {
          inline = ''
        }
      }

      if (vm.edit_component.schema.class) {
        classUp = vm.edit_component.schema.class
      } else {
        classUp = ''
      }

      let payload = {
        place: place,
        content: content,
        style: style,
        class: classUp,
        inline: inline,
      }

      this.$store.commit('page_builder/COMPONENTS_UPDATE', payload)
      this.inlineUpdateValue = ''
      this.inlineUpdateKey = ''
      this.successUpload()
    },
    successDelete() {
      this.$vs.notify({
        color: 'danger',
        title: 'Delete Success',
        text: 'Property has been deleted!',
      })
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, property been uploaded',
      })
    },
  },
}
</script>
