<template>
  <!-- Toolbar -->
  <div class="edit">
    <div class="edit-tools">
      <div
        v-for="(item, index) in tools"
        :disabled="isDisabled(item.key)"
        :key="item.key"
      >
        <vs-button
          :class="{
            active: currentIndex === index,
            'btn-disabled': isDisabled(item.key),
          }"
          @click="handleTools(item.key, index)"
          :icon="item.icon"
          type="line"
          v-if="showNavBar"
        >
        </vs-button>
      </div>

      <!-- Right sidebar Chat -->
      <SideChat />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'UiDrawingBoardTopTools',
  props: {
    showNavBar: {
      type: Boolean,
      default: true,
    },
  },
  components: {},
  data() {
    return {
      currentIndex: '',
      editStatus: false,
      tools: [
        {
          key: 'undo',
          name: 'Previous',
          icon: 'undo',
        },
        {
          key: 'redo',
          name: 'Next Step',
          icon: 'redo',
        },
        {
          key: 'drag',
          name: 'Drag',
          icon: 'touch_app',
        },
        {
          key: 'copy',
          name: 'Copy',
          icon: 'content_copy',
        },
        {
          key: 'paste',
          name: 'Paste',
          icon: 'content_paste',
        },
        {
          key: 'save',
          name: 'Save',
          icon: 'save',
        },
        {
          key: 'select',
          name: 'Select',
          icon: 'tab_unselected',
        },
      ],
    }
  },

  computed: {
    ...mapState('tools', ['redoArr', 'undoArr']),
  },

  methods: {
    isDisabled(key) {
      if (key === 'redo') {
        return this.redoArr.length === 0
      }
      if (key === 'undo') {
        return this.undoArr.length === 0
      }
    },
    handleTools(key, index) {
      this.currentIndex = index
      console.log('key', key)
      if (key == 'drag') {
        this.$emit('useHand', key)
      } else if (key == 'select') {
        this.$emit('changeSet', key)
      } else {
        this.$emit('handle-tools', key)
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
.edit {
  z-index: 999;
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;

  &-hide {
    width: 40px;
    height: 20px;
    border-radius: 0 0 40px 40px;
    background-color: #74bc7b;
  }

  &-tools {
    width: 300px;
    height: 50px;
    border-right: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.6);
    border-radius: 5px;

    &-item {
      display: inline-block;
      background: #fff;
      width: 50px;
      height: 50px;
      text-align: center;
      font-size: 24px;
      line-height: 50px;
      border: 1px solid #dcdfe6;
      outline: none;
      margin: 0;
    }

    &-item:hover {
      background-color: #ecf5ff;
    }

    .active {
      background-color: #77c9ff;
      color: white;
    }

    .btn-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }
}
</style>
