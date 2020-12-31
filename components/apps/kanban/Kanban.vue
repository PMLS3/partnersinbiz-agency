<template>
  <div class="flex w-full h-full">
    <div class="w-64 px-8 py-3 bg-gray-100 border-r" v-if="type == 'support'">
      <div class="flex items-center">
        <img :src="business.logo" class="w-8 h-8 rounded-full" />
        <h2
          class="ml-2 text-xs font-semibold tracking-wide text-gray-600 uppercase"
        >
          {{ business.b_name }}
        </h2>
      </div>

      <nav class="mt-8">
        <h2 class="text-xs font-semibold tracking-wide text-gray-600 uppercase">
          Issues
        </h2>
        <div class="mt-2 -mx-3">
          <a
            href="#"
            class="flex justify-between px-3 py-2 text-sm font-medium text-gray-900 bg-gray-200 m item-center"
          >
            <span>All</span>
            <span class="text-xs font-semibold text-gray-700">{{
              all_issues
            }}</span>
          </a>

          <a
            href="#"
            class="flex justify-between px-3 py-2 text-sm font-medium text-gray-700 m item-center"
          >
            <span>Assigned to me</span>
            <span class="text-xs font-semibold text-gray-700">{{
              assigned_issues
            }}</span>
          </a>

          <a
            href="#"
            class="flex justify-between px-3 py-2 text-sm font-medium text-gray-700 m item-center"
          >
            <span>Created by me</span>
            <span class="text-xs font-semibold text-gray-700">{{
              assigned_issues
            }}</span>
          </a>
          <!-- <a
            href="#"
            class="flex justify-between px-3 py-2 text-sm font-medium text-gray-700 m item-center "
          >
            <span>Archived</span>
            <span class="text-xs font-semibold text-gray-700">36</span>
          </a> -->
        </div>

        <h2
          class="mt-4 text-xs font-semibold tracking-wide text-gray-600 uppercase"
        >
          Tags
        </h2>
        <div class="mt-2 -mx-3">
          <a
            href="#"
            class="flex justify-between px-3 py-2 text-sm font-medium text-gray-900 m item-center"
            v-for="(tag, index) in tags"
            :key="index"
          >
            <span>{{ tag.name }}</span>
            <span
              :class="` font-semibold text-${tag.color}-700  rounded h-4 w-4`"
              :style="`background-color: ${tag.color}`"
            ></span>
          </a>
        </div>
        <span
          class="flex items-center h-12 mt-2 -ml-1 text-sm font-medium text-gray-600"
        >
          <svg
            class="w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="ml-1"> New Project </span>
        </span>
      </nav>
      <vs-divider></vs-divider>
    </div>
    <div class="flex-1 min-w-0 bg-white">
      <div class="border-b-2 border-gray-200">
        <header class="px-6">
          <!-- <div
            class="flex items-center justify-between py-3 border-b border-gray-200"
          >
            <div class="flex-1">
              <div class="relative">
                <vs-input
                  class="w-full max-w-xs py-2 pl-10 pr-4 text-sm placeholder-gray-600 border border-gray-400 rounded-md bloack"
                  placeholder="Search"
                />
              </div>
            </div>
            <div class="flex items-center">
              <span>
                <svg
                  class="w-6 h-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </span>
              <span class="ml-6">
                <img
                  class="object-cover w-8 h-8 rounded-full"
                  :src="user.avatar ? user.avatar : business.logo"
                />
              </span>
            </div>
          </div> -->
          <div class="flex items-center justify-between py-2">
            <div class="flex items-center">
              <h2
                class="text-2xl leading-tight text-gray-900 font-semibild"
                v-if="type == 'support'"
              >
                All Issues
              </h2>
              <div class="flex items-center ml-6" v-if="type == 'support'">
                <span class="-ml-1 border-2 border-white rounded-full">
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    :src="user.avatar ? user.avatar : business.logo"
                  />
                </span>
                <span class="-ml-2 border-2 border-white rounded-full">
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    :src="user.avatar ? user.avatar : business.logo"
                  />
                </span>
                <span class="-ml-2 border-2 border-white rounded-full">
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    :src="user.avatar ? user.avatar : business.logo"
                  />
                </span>
                <span class="-ml-2 border-2 border-white rounded-full">
                  <img
                    class="object-cover w-8 h-8 rounded-full"
                    :src="user.avatar ? user.avatar : business.logo"
                  />
                </span>
              </div>
            </div>

            <div class="flex center-items">
              <!-- <span class="inline-flex bg-gray-300 border rounded-md p-2px">
                <span class="px-2 py-1">
                  <svg
                    class="w-6 h-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                    />
                  </svg>
                </span>
                <span class="px-2 py-1 bg-white rounded shadow">
                  <svg
                    class="w-6 h-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    />
                  </svg>
                </span>
              </span> -->
              <vs-button
                icon="save"
                class="flex items-center py-2 pl-2 pr-4 ml-5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-gray-300"
                @click="$emit('save-board')"
                >Save All</vs-button
              >
              <vs-button
                class="flex items-center py-2 pl-2 pr-4 ml-5 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-gray-300"
                icon="control_point"
                v-if="newItemActive"
              >
                <span class="ml-1" @click="addForm(0)"> New Item </span>
              </vs-button>
              <vs-button
                class="flex items-center py-2 pl-2 pr-4 ml-2 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-gray-300"
                icon="control_point"
                v-if="newBoardActive"
              >
                <span class="ml-1" @click="popupActivo2 = !popupActivo2">
                  New Board
                </span>
              </vs-button>

              <vs-button
                class="flex items-center py-2 pl-2 pr-4 ml-2 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-gray-300"
                icon="control_point"
                v-if="newTagActive"
              >
                <span class="ml-1" @click="popupActivo3 = !popupActivo3">
                  New Tag
                </span>
              </vs-button>
            </div>
          </div>
        </header>
      </div>
      <div id="app">
        <div class="flex justify-center">
          <div class="flex min-h-screen py-12 overflow-x-scroll">
            <div
              v-for="(column, index) in columns"
              :key="index"
              class="px-3 py-3 mr-4 bg-gray-100 rounded column-width"
            >
              <div class="p-2 mb-3">
                <div class="flex float-right -mt-4">
                  <vs-button
                    icon="undo"
                    type="line"
                    v-if="index != 0"
                    @click="move(index, index - 1)"
                  ></vs-button>
                  <vs-button
                    icon="redo"
                    type="line"
                    v-if="index != columns.length - 1"
                    @click="move(index, index + 1)"
                  ></vs-button>
                </div>
                <span
                  class="w-full p-2 text-sm font-medium text-white bg-blue-900 rounded hover:bg-gray-300"
                  @click="addForm(index)"
                  v-if="newItemActive"
                >
                  New Item
                </span>
              </div>
              <hr />
              <p
                class="pt-2 font-sans text-2xl font-semibold tracking-wide text-gray-700"
              >
                {{ column.title }}
              </p>

              <draggable
                :list="column.children"
                :animation="200"
                ghost-class="ghost-card"
                group="children"
              >
                <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
                <TaskCard
                  v-for="task in column.children"
                  :key="task.id"
                  :task="task"
                  class="mt-3 cursor-move"
                  @add-more="addMore(task.id, index)"
                ></TaskCard>
                <!-- </transition-group> -->
              </draggable>
            </div>
          </div>
        </div>
        <vs-popup title="Create Station" :active.sync="popupActivo">
          <FormGenerator
            :schema="formSchema"
            v-model="formData"
            class="p-6"
          ></FormGenerator>
          <div class="vx-row">
            <div class="w-full vx-col">
              <div class="flex flex-wrap items-center justify-end mt-8">
                <vs-button class="mt-2 ml-auto" @click="save_form()"
                  >Save Changes</vs-button
                >
                <vs-button
                  class="mt-2 ml-4"
                  type="border"
                  color="warning"
                  @click="popupActivo = !popupActivo"
                  >Cancel</vs-button
                >
              </div>
            </div>
          </div>
        </vs-popup>
        <vs-popup title="Create New Board" :active.sync="popupActivo2">
          <FormGenerator
            :schema="columnSchema"
            v-model="columnData"
            class="p-6"
          ></FormGenerator>
          <div class="vx-row">
            <div class="w-full vx-col">
              <div class="flex flex-wrap items-center justify-end mt-8">
                <vs-button class="mt-2 ml-auto" @click="save_column()"
                  >Save Changes</vs-button
                >
                <vs-button
                  class="mt-2 ml-4"
                  type="border"
                  color="warning"
                  @click="popupActivo2 = !popupActivo2"
                  >Cancel</vs-button
                >
              </div>
            </div>
          </div>
        </vs-popup>

        <vs-popup title="Create New Tag" :active.sync="popupActivo3">
          <FormGenerator
            :schema="tagSchema"
            v-model="tagData"
            class="p-6"
          ></FormGenerator>
          <div class="vx-row">
            <div class="w-full vx-col">
              <div class="flex flex-wrap items-center justify-end mt-8">
                <vs-button class="mt-2 ml-auto" @click="save_tag()"
                  >Save Changes</vs-button
                >
                <vs-button
                  class="mt-2 ml-4"
                  type="border"
                  color="warning"
                  @click="popupActivo3 = !popupActivo3"
                  >Cancel</vs-button
                >
              </div>
            </div>
          </div>
        </vs-popup>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'kanban-form',
  components: {
    // TaskCard: () =>
    //   process.client ? import('./components/TaskCard.vue') : null,
    draggable: () => (process.client ? import('vuedraggable') : null),
    // formGenerator: () =>
    //   process.client
    //     ? import('@/components/forms/FormGenerator/formGenerator')
    //     : null,
  },
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    formSchema: {
      type: Array,
      default: () => [],
    },
    columnSchema: {
      type: Array,
      default: () => [],
    },
    tagSchema: {
      type: Array,
      default: () => [],
    },
    newBoardActive: {
      type: Boolean,
      default: true,
    },
    newItemActive: {
      type: Boolean,
      default: true,
    },
    newTagActive: {
      type: Boolean,
      default: true,
    },
    archive: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      popupActivo: false,
      popupActivo2: false,
      popupActivo3: false,
      formData: {},
      columnData: {},
      tagData: {},

      selectedIndex: 0,
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.active_user
    },
    business() {
      return this.$store.state.business.main_business
    },
    date() {
      return Date.now()
    },
    all_issues() {
      let vm = this
      let data = 0
      if (vm.columns) {
        for (let i = 0; i < vm.columns.length; i++) {
          if (vm.columns[i].children) {
            data = data + vm.columns[i].children.length
          }
        }
      }

      return data
    },
    assigned_issues() {
      let vm = this
      let data = 0
      if (this.columns) {
        for (let i = 0; i < vm.columns.length; i++) {
          if (vm.columns[i].children) {
            for (let e = 0; e < vm.columns[i].children.length; e++) {
              if (
                vm.columns[i].children[e].assigned_uid.includes(vm.user.uid)
              ) {
                data = data + 1
              }
            }
          }
        }
      }

      return data
    },
    created_issues() {
      let vm = this
      let data = 0
      if (this.columns) {
        for (let i = 0; i < vm.columns.length; i++) {
          if (vm.columns[i].children) {
            for (let e = 0; e < vm.columns[i].children.length; e++) {
              if (vm.columns[i].children[e].created_uid == vm.user.uid) {
                data = data + 1
              }
            }
          }
        }
      }

      return data
    },

    tagColor() {
      let items
      for (let index = 0; index < this.tags.length; index++) {
        if (this.tags[index].name == this.formData.type) {
          items = this.tags[index]
        }
      }
      return items
    },
  },
  methods: {
    addMore(taskId, index) {
      console.log('addMore', taskId, index)
    },
    save_form() {
      let setColor = 'black'
      let type = 'Default'
      let date = moment(this.date).format('MMM Do ')
      if (this.tagColor.color) {
        setColor = this.tagColor.color
      }
      if (this.formData.date) {
        date = moment(this.formData.date).format('MMM Do ')
      }
      if (this.formData.type) {
        type = this.formData.type
      }
      let data = {
        title: this.formData.title,
        type: type,
        desc: this.formData.desc,
        color: setColor,
        date: date,
        url: this.user.avatar ? this.user.avatar : this.business.logo,
      }
      let payload = {
        index: this.selectedIndex,
        data: data,
      }
      this.popupActivo = false

      this.$emit('saveItem', payload)
      this.formData = {}
    },
    save_column() {
      this.popupActivo2 != this.popupActivo2

      this.$emit('saveColumn', this.columnData)

      this.columnData = {}
    },
    save_tag() {
      this.popupActivo3 != this.popupActivo3

      this.$emit('saveTag', this.tagData)

      this.tagData = {}
    },
    addForm(index) {
      this.selectedIndex = index
      this.popupActivo = true
    },
    move(old_index, new_index) {
      console.log('move', old_index, new_index)
      let arr = this.columns
      while (old_index < 0) {
        old_index += arr.length
      }
      while (new_index < 0) {
        new_index += arr.length
      }
      if (new_index >= arr.length) {
        var k = new_index - arr.length
        while (k-- + 1) {
          arr.push(undefined)
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
      console.log('arr', arr)
    },
  },
}
</script>

<style scoped>
.column-width {
  min-width: 320px;
  width: 320px;
}
/* Unfortunately @apply cannot be setup in codesandbox, 
but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
</style>
