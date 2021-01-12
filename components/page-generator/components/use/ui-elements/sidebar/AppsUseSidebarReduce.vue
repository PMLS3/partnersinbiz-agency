<template lang="html">
  <div id="parentx">
    <!-- <vs-button
      @click=";(active = !active), (notExpand = false)"
      color="success"
      type="filled"
      class="mt-10"
      >Open Sidebar Reduce-expand</vs-button
    >
    <vs-button
      @click=";(active = !active), (notExpand = true)"
      color="success"
      type="filled"
      class="mt-10"
      >Open Sidebar Reduce-only</vs-button
    > -->
    <vs-sidebar
      :reduce="reduce"
      hidden-background="false"
      :reduce-not-hover-expand="notExpand"
      parent="body"
      default-index="1"
      color="success"
      class="sidebarx"
      spacer
      v-model="active"
    >
      <div class="header-sidebar" slot="header">
        <vs-avatar size="70px" :src="heading.url" v-if="heading.url" />
        <vs-avatar size="70px" :src="heading.url2" v-else />
      </div>
      <vs-sidebar-group open title="Settings">
        <vs-sidebar-item index="1" icon="menu" @click="reduce = !reduce">
          {{ heading.title }}
        </vs-sidebar-item>
        <div v-if="branch.use">
          <!-- <p class="mt-5">Branch</p> -->
          {{ branch.branches }}
          <div v-if="branch.branches">
            <v-select
              label="Branch"
              placeholder="Branch"
              class="my-2 mx-2"
              v-model="branched"
              :options="branch.branches"
            ></v-select>
          </div>
          <div>
            <small>No Branches</small>
          </div>

          <vs-divider></vs-divider>
        </div>
      </vs-sidebar-group>

      <div v-for="(item, index) in items" :key="index">
        <vs-sidebar-item
          index="1"
          :icon="item.icon"
          v-if="!item.group"
          @click="onClickButton(item.name)"
        >
          {{ item.name }}
        </vs-sidebar-item>

        <vs-sidebar-group :title="item.name" v-if="item.group">
          <div v-for="(ite, inde) in item.children">
            <vs-sidebar-item
              index="2"
              :icon="ite.icon"
              v-if="!ite.group"
              @click="onClickButton(ite.name)"
            >
              {{ ite.name }}
            </vs-sidebar-item>

            <vs-sidebar-group v-if="ite.group" :title="ite.name">
              <div v-for="(it, ind) in ite.children">
                <vs-sidebar-item
                  index="2"
                  :icon="it.icon"
                  v-if="!it.group"
                  @click="onClickButton(it.name)"
                >
                  {{ it.name }}
                </vs-sidebar-item>
              </div>
            </vs-sidebar-group>
          </div>
        </vs-sidebar-group>
      </div>

      <!-- <vs-divider icon="person" position="left">
        User
      </vs-divider>

      <vs-sidebar-item index="6" icon="account_box">
        Profile
      </vs-sidebar-item> -->

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  props: ['items', 'heading', 'branch'],
  components: {
    vSelect
  },
  data: () => ({
    active: false,
    notExpand: false,
    hiddenBackground: false,
    reduce: true,
    active: true,
    hidden: true,
    branched: ''
  }),
  methods: {
    // Send back the item clicked
    onClickButton(val) {
      this.$emit('clicked', val)
    }
  },
  watch: {
    branched: function() {
      this.$emit('branched', this.branched)
    }
  }
}
</script>

<style scoped>
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* > button
      margin-left 10px */
.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important */
</style>
