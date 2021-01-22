<template>
  <div class="left-tools">
    <div
      v-for="(item, index) in tools"
      :key="item.key"
      class="left-tools-item"
      :class="{ active: toolsIndex === index }"
      @click.stop="toolsHandle(item.key, index)"
    >
      <div style="width: 100%" @click.stop="mouseChange(item.key, index)">
        <vs-button
          :icon="item.icon"
          type="flat"
          class="w-full h-full"
        ></vs-button>
        <!-- <span class="material-icons">
          {{ item.icon }}
        </span> -->
      </div>
      <!--  -->
      <!-- Upload Picture  -->
      <input
        v-if="item.key === 'picture'"
        style="display: none"
        @change="$emit('uploadFile', $event)"
        type="file"
        ref="upload"
        id="upload"
      />
      <!-- 🖌 -->
      <div
        v-if="item.key === 'brush'"
        class="extend"
        :style="{ top: `${index * 69}px` }"
        @click="mouseChange(item.key, index)"
      >
        <transition name="slide-fade">
          <div v-show="isFreeStatus">
            <div
              v-for="(i, index) in [5, 10, 15, 20, 25]"
              @click.stop="changeLineWidth(i, index)"
              style="display: inline-block; height: 100%; cursor: pointer"
              :key="index"
            >
              <span
                :style="{
                  display: 'inline-block',
                  width: `${i}px`,
                  height: `${i}px`,
                  borderRadius: `${i / 2}px`,
                  backgroundColor:
                    lineWidthIndex === index ? lineColor : '#e6e6e6',
                  margin: '0 15px',
                }"
              >
              </span>
            </div>
          </div>
        </transition>
      </div>
      <!-- 🎨 -->
      <div
        v-if="item.key === 'color'"
        class="extend"
        :style="{ top: `${index * 69}px` }"
        @click.stop="mouseChange(item.key, index)"
      >
        <transition name="slide-fade">
          <div v-show="isColorStatus">
            <span v-for="(item, index) in colorPicker" :key="index">
              <span
                @click.stop="changeLineColor(item, index)"
                :style="{
                  display: 'inline-block',
                  width: '20px',
                  height: '20px',
                  borderRadius: '5px',
                  backgroundColor: item,
                  margin: '0 15px',
                }"
              >
                <!-- Selected Dots -->
                <div
                  v-show="index === lineColorIndex"
                  class="check-point"
                ></div>
              </span>
            </span>
          </div>
        </transition>
      </div>

      <div
        v-if="item.key === 'colorfill'"
        class="extend"
        :style="{ top: `${index * 69}px` }"
        @click.stop="mouseChange(item.key, index)"
      >
        <transition name="slide-fade">
          <div v-show="isColorFillStatus">
            <span v-for="(item, index) in colorPicker" :key="index">
              <!-- <vs-checkbox v-model="fill" v-if="index == 0"></vs-checkbox> -->
              <span
                @click.stop="changeLineColorFill(item, index)"
                :style="{
                  display: 'inline-block',
                  width: '20px',
                  height: '20px',
                  borderRadius: '5px',
                  backgroundColor: item,
                  margin: '0 15px',
                }"
              >
                <!-- Selected Dots -->
                <div
                  v-show="index === lineColorIndex"
                  class="check-point"
                ></div>
              </span>
            </span>
          </div>
        </transition>
      </div>

      <!-- Geometry -->
      <div
        v-if="item.key === 'shape'"
        class="extend"
        :style="{ top: `${index * 69}px` }"
        @click.stop="mouseChange(item.key, index)"
      >
        <transition name="slide-fade">
          <div v-show="isShapeStatus">
            <div class="flex content-center">
              <vs-button
                :icon="item.icon"
                type="flat"
                class="w-full h-full"
                v-for="(item, index) in shapeList"
                @click.stop="toolsHandle(item.key, 20)"
                :key="index"
              ></vs-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <input
      @change="$emit('uploadFile', $event)"
      type="file"
      ref="upload"
      id="upload"
    />
  </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'

export default {
  name: 'UiDrawingBoardLeftTools',
  props: {
    strokeEnabled: {
      type: Boolean,
      required: true,
      default: true,
    },
    fillEnabled: {
      type: Boolean,
      required: true,
      default: true,
    },
  },

  data() {
    return {
      lineWidthIndex: 0,
      lineColorIndex: 0,
      lineColor: '#000000',
      toolIndex: 0,
      /** extend area **/
      isFreeStatus: false, // 🖌 Extended display
      isColorStatus: false, // 🎨 Extended display
      isColorFillStatus: false, // 🎨 Extended display

      isShapeStatus: false,
      shapeList: [
        {
          key: 'circle',
          name: 'Circle',
          icon: 'panorama_fish_eye',
        },
        {
          key: 'rectangle',
          name: 'Rectangle',
          icon: 'crop_portrait',
        },
        {
          key: 'ellipse',
          name: 'Ellipse',
          icon: 'exposure_zero',
        },
        {
          key: 'line',
          name: 'Line',
          icon: 'maximize',
        },
        {
          key: 'arrow',
          name: 'Arrow',
          icon: 'arrow_right_alt',
        },
        {
          key: 'triangle',
          name: 'Triangle',
          icon: 'change_history',
        },
        {
          key: 'square',
          name: 'Circle',
          icon: 'crop_square',
        },
        {
          key: 'star',
          name: 'Star',
          icon: 'grade',
        },
        {
          key: 'curve',
          name: 'Curve',
          icon: 'crop_square',
        },
        {
          key: 'pentagon',
          name: 'Pentagon',
          icon: 'crop_square',
        },
        {
          key: 'hexagon',
          name: 'Hexagon',
          icon: 'crop_square',
        },
      ],
      colorPicker: [
        '',
        '#4D4D4D',
        '#999999',
        '#F44E3B',
        '#FE9200',
        '#FCDC00',
        '#A4DD00',
        '#73D8FF',
        '#FDA1FF',
      ],
      tools: [
        {
          key: 'add',
          name: 'Add Artboard',
          icon: 'add_to_photos',
        },
        {
          key: 'brush',
          name: 'Brush',
          icon: 'create',
        },
        {
          key: 'color',
          name: 'Palette',
          icon: 'color_lens',
        },
        {
          key: 'colorfill',
          name: 'Palette',
          icon: 'color_lens',
        },
        {
          key: 'eraser',
          name: 'Eraser',
          icon: 'menu',
        },
        {
          key: 'shape',
          name: 'Graphics',
          icon: 'category',
        },
        {
          key: 'text',
          name: 'Text',
          icon: 'keyboard',
        },
        {
          key: 'picture',
          name: 'Image',
          icon: 'image',
        },
        {
          key: 'clear',
          name: 'Clear',
          icon: 'menu',
        },
        {
          key: 'background',
          name: 'Background',
          icon: 'wallpaper',
        },
        {
          key: 'setting',
          name: 'Setting',
          icon: 'settings',
        },
      ],
    }
  },

  computed: {
    // ...mapState('draw', ['type', 'lineWidth', 'lineColor', 'toolsIndex'])
    toolsIndex() {
      return this.toolIndex
    },
  },
  created() {
    this.fill = this.fillEnabled
    this.stroke = this.strokeEnabled
  },

  methods: {
    toolsHandle(key, index) {
      console.log('key', key, index)
      this.$emit('handleTools', key, index)
      if (index === 20) {
        this.isFreeStatus = false
        this.isColorStatus = false
        this.isColorFillStatus = false

        this.isShapeStatus = false
      }
    },

    changeLineWidth(width, index) {
      this.lineWidthIndex = index
      this.$emit('changeLineWidth', width)
      this.isFreeStatus = false
      this.isColorStatus = false
      this.isShapeStatus = false
    },
    changeLineColorFill(color, index) {
      console.log('ind', index)
      if (index == 0) {
        this.$emit('changeFill', false)
        this.isFreeStatus = false
        this.isColorStatus = false
        this.isShapeStatus = false
        this.isColorFillStatus = false
      } else {
        this.lineColorIndex = index
        this.$emit('colorSetFill', color) // Simulate brush click
        this.$emit('changeFill', true)
        this.isFreeStatus = false
        this.isColorStatus = false
        this.isShapeStatus = false
        this.isColorFillStatus = false
      }
    },

    changeLineColor(color, index) {
      console.log('ind', index)
      if (index == 0) {
        this.$emit('changeStroke', false)
        this.isFreeStatus = false
        this.isColorStatus = false
        this.isShapeStatus = false
        this.isColorFillStatus = false
      } else {
        this.lineColorIndex = index
        this.$emit('colorSet', color) // Simulate brush click
        this.$emit('changeStroke', true)

        this.isFreeStatus = false
        this.isColorStatus = false
        this.isShapeStatus = false
        this.isColorFillStatus = false
      }
    },

    mouseChange(type, index) {
      console.log('mouse', type, index)
      this.toolIndex = index

      switch (type) {
        case 'brush':
          if (this.isFreeStatus) {
            this.isFreeStatus = false
          } else {
            this.isFreeStatus = true
          }
          this.isColorStatus = false
          this.isColorFillStatus = false

          this.isShapeStatus = false
          this.$emit('handleTools', 'brush', index)
          break
        case 'color':
          if (this.isColorStatus) {
            this.isColorStatus = false
          } else {
            this.isColorStatus = true
          }
          this.isFreeStatus = false
          this.isShapeStatus = false
          this.isColorFillStatus = false

          break
        case 'colorfill':
          if (this.isColorFillStatus) {
            this.isColorFillStatus = false
          } else {
            this.isColorFillStatus = true
          }
          this.isFreeStatus = false
          this.isShapeStatus = false
          this.isColorStatus = false

          break
        case 'shape':
          if (this.isShapeStatus) {
            this.isShapeStatus = false
          } else {
            this.isShapeStatus = true
          }
          this.isFreeStatus = false
          this.isColorStatus = false
          this.isColorFillStatus = false

          break
        default:
          this.isFreeStatus = false
          this.isColorStatus = false
          this.isShapeStatus = false
          this.isColorFillStatus = false

          break
      }
    },
  },
}
</script>

<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.left-tools {
  float: left;
  width: 69px;
  height: 100%;
  border-right: 1px solid #e6e6e6;
  margin: 0;
  padding-left: 0;
  background-color: #fff;
  overflow: auto;

  .extend {
    display: inline-block;
    position: absolute;
    height: 65px;
    left: 70px;
    z-index: 100;
    padding: 0;
    border: none;
    border-radius: 2px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.6);

    &-shape {
      margin: 0px 10px;
      padding: 5px 10px;
      color: black;
    }

    .check-point {
      background-color: white;
      margin: 5px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      text-align: center;
    }
  }

  &-item {
    height: 64px;
    text-align: center;
    font-size: 25px;
    line-height: 69px;
    margin-bottom: 5px;
  }

  &-item:hover {
    background-color: #ecf5ff;
  }

  .active {
    background-color: #77c9ff;
    color: white;
  }
}
</style>
