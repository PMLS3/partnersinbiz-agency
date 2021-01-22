<template>
  <div>
    <vs-input
      class="inputx tree-search-input float-left mr-2"
      placeholder="Search..."
      v-model.lazy="searchword"
    />
    <vs-button color="primary" type="filled" @click="search" class="mb-3"
      >Search</vs-button
    >
    <v-tree
      ref="tree"
      :canDeleteRoot="true"
      :data="data"
      :draggable="true"
      :tpl="tpl"
      :halfcheck="true"
      :multiple="true"
    />
  </div>
</template>

<script>
import { VTree, VSelectTree } from 'vue-tree-halower'

export default {
  props: ['data'],
  data() {
    return {
      searchword: '',
      treeData: [
        {
          title: 'node1',
          expanded: true,
          children: [
            {
              title: 'node 1-1',
              expanded: true,
              children: [
                {
                  title: 'node 1-1-1',
                },
                {
                  title: 'node 1-1-2',
                },
                {
                  title: 'node 1-1-3',
                },
              ],
            },
            {
              title: 'node 1-2',
              children: [
                {
                  title: "<span style='color: red'>node 1-2-1</span>",
                },
                {
                  title: "<span style='color: red'>node 1-2-2</span>",
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    search() {
      this.$refs.tree.searchNodes(this.searchword)
    },
    tpl(...args) {
      let { 0: node, 2: parent, 3: index } = args
      let titleClass = node.selected ? 'node-title node-selected' : 'node-title'
      if (node.searched) titleClass += ' node-searched'
      return (
        <span>
          <span
            class={titleClass}
            domPropsInnerHTML={node.title}
            onClick={() => {
              this.$refs.tree.nodeSelected(node)
              console.log('here', domPropsInnerHTML)
            }}
          ></span>

          <button
            class="btn-delete text-danger border-none cursor-pointer px-2 py-1 rounded"
            onClick={() => this.$refs.tree.delNode(node, parent, index)}
          >
            delete
          </button>
          <button
            class="btn-delete text-warning border-none cursor-pointer px-2 py-1 rounded"
            onClick={() => {
              let payload = {
                active_card: true,
                component_show: 'buttons',
                schema: node,
                index: 0,
              }

              this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
            }}
          >
            edit
          </button>
          <button
            class="btn-delete text-success border-none cursor-pointer px-2 py-1 rounded"
            onClick={() => {
              console.log('node', node)
              this.$store.commit('page_builder/EDIT_ALL', false)

              let payload = {
                active_card: true,
                component_show: 'grid',
                place: node.place,
                index: 1,
              }
              this.$store.commit('page_builder/COMPONENTS_NEEDED', payload)
            }}
          >
            add
          </button>
        </span>
      )
    },
    async asyncLoad(node) {
      const { checked = false } = node
      this.$set(node, 'loading', true)
      let pro = new Promise((resolve) => {
        setTimeout(resolve, 2000, ['async node1', 'async node2'])
      })
      this.$refs.tree.addNodes(node, await pro)
      this.$set(node, 'loading', false)
      if (checked) {
        this.$refs.tree.childCheckedHandle(node, checked)
      }
    },
  },
  components: {
    VTree,
    VSelectTree,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vuexy/extraComponents/tree.scss';

button.btn-async {
  background: rgba(var(--vs-warning), 0.15);
}

button.btn-delete {
  background: rgba(var(--vs-danger), 0.15);
}
</style>
