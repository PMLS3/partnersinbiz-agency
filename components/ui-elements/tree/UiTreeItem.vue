<template>
  <div>
    <div
      :class="`relative w-full border-l-2  border-${color}-600`"
      :style="indent"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @dragenter.prevent
      @dragover.prevent
      @drop.prevent="drop(schema)"
    >
      <div
        :class="`px-4 py-2 mb-1 mr-1 text-xs text-${color}-500 border border-l-4  border-${color}-500  hover:bg-${color}-500 hover:text-white `"
      >
        {{ schema.name }}
        <div class="float-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="18px"
            height="18px"
            v-if="showChildren"
            @click="showChildren = !showChildren"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="18px"
            height="18px"
            @click="showChildren = !showChildren"
            v-else
          >
            <path
              stroke="#374151"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="18px"
            height="18px"
            v-if="showItem"
            @click="showItem = !showItem"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click="showItem = !showItem"
            v-else
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </div>
      </div>

      <div v-if="showItem">
        <small> {{ schema.title }} </small>

        <vs-input v-model="schema.name" label="Name" />

        <vs-input v-model="schema.id" label="Id" />
        <vs-input v-model="schema.class" label="Class" />
        <vs-input v-model="schema.innerText" label="Inner Text" />

        <br /><br />
        <ComponentsCreatorEditorButtons
          :schema="schema"
          :index="index"
          :mainIndex="mainIndex"
        />
      </div>
    </div>
    <div v-if="showChildren">
      <UiTreeMenu
        v-for="(field, ind) in schema.children"
        :key="ind"
        :schema="field"
        :mainIndex="mainIndex"
        :depth="depth + 1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiTreeItem',
  props: ['schema', 'index', 'mainIndex', 'depth'],
  components: {
    ComponentsCreatorEditorButtons: () =>
      import(
        '@/components/page-builder/component-creator/ComponentsCreatorEditorButtons.vue'
      ),
  },
  data() {
    return {
      hover: false,
      showItem: false,
      showChildren: true,
      colors: [
        'gray',
        'blue',
        'orange',
        'yellow',
        'green',
        'purple',
        'indigo',
        'red',
        'pink',
      ],
    }
  },
  computed: {
    indent() {
      return { transform: `translate(${this.depth * 15}px)` }
    },
    color() {
      return this.colors[this.depth]
    },
  },
  methods: {
    drop(item) {
      console.log('drop', item)
      console.log('drop', this.mainIndex)
      let payload = {
        schema: item,
        MainIndex: this.mainIndex,
      }
      setTimeout(() => {
        console.log('payload:', payload)
        this.$store.commit('page_builder/DRAG_END_COMPONENT', payload)
      }, 1000)
    },
    dragleave(evt, item) {
      console.log('drag leave', evt, item)
    },
    dragover(evt, item) {
      console.log('dragover', evt, item)
    },
  },
}
</script>
