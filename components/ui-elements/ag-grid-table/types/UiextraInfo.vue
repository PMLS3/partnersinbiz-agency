<template>
  <div>
    <client-only>
      <div class="px-6">
        <vs-row>
          <vs-col
            v-tooltip="'col - 4'"
            vs-type="flex"
            vs-w="4"
            v-if="choices.view"
          >
            <div>
              <div class="px-6 py-6">
                <label for="filter"
                  >Selected View - if marked unchecked everyone can see this
                  {{ item }}</label
                >
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="filter"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>
              </div>

              <div class="px-6 py-6" v-if="filter">
                <label for="filter">Communication Group</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="group_push_notes"
                  multiple
                  :closeOnSelect="false"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>

                <div class="px-6 py-6" v-if="group_push_notes">
                  <v-select
                    :options="business.p_notes"
                    v-model="group_push_notes_selected"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    :closeOnSelect="false"
                  />
                </div>
                <label for="filter">Group View</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="group_views"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>

                <div class="px-6 py-6" v-if="group_views">
                  <v-select
                    :options="business.views"
                    v-model="group_views_selected"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    :closeOnSelect="false"
                  />
                </div>

                <label for="filter">Branches (staff)</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="group_branches"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>

                <div class="px-6 py-6" v-if="group_branches">
                  <v-select
                    :options="business.branches"
                    v-model="group_branches_selected"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    :closeOnSelect="false"
                  />
                </div>

                <label for="filter">Positions (staff)</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="group_positions"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>

                <div class="px-6 py-6" v-if="group_positions">
                  <v-select
                    :options="business.pos"
                    v-model="group_positions_selected"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    :closeOnSelect="false"
                  />
                </div>
              </div>
            </div>
          </vs-col>
          <vs-col
            v-tooltip="'col - 4'"
            vs-type="flex"
            vs-w="4"
            v-if="choices.adding"
          >
            <div>
              <div class="px-6 py-6">
                <label for="filter"
                  >Adding View - if marked unchecked everyone can add to
                  form</label
                >
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="add_filter"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>
              </div>

              <div class="px-6 py-6" v-if="add_filter">
                <label for="filter">Backend Only</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="add_group_none"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>
                <label for="filter">Communication Group</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="add_group_push_notes"
                  multiple
                  :closeOnSelect="false"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>

                <div class="px-6 py-6" v-if="add_group_push_notes">
                  <v-select
                    :options="business.p_notes"
                    v-model="add_group_push_notes_selected"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    :closeOnSelect="false"
                  />
                </div>
                <label for="filter">Group View</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="add_group_views"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>

                <div class="px-6 py-6" v-if="add_group_views">
                  <v-select
                    :options="business.views"
                    v-model="add_group_views_selected"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    :closeOnSelect="false"
                  />
                </div>

                <label for="filter">Branches (staff)</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="add_group_branches"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>

                <div class="px-6 py-6" v-if="add_group_branches">
                  <v-select
                    :options="business.branches"
                    v-model="add_group_branches_selected"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    :closeOnSelect="false"
                  />
                </div>

                <label for="filter">Positions (staff)</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="add_group_positions"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>

                <div class="px-6 py-6" v-if="add_group_positions">
                  <v-select
                    :options="business.pos"
                    v-model="add_group_positions_selected"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    :closeOnSelect="false"
                  />
                </div>
              </div>
            </div>
          </vs-col>
          <vs-col
            v-tooltip="'col - 4'"
            vs-type="flex"
            vs-w="4"
            v-if="choices.editing"
          >
            <div>
              <div class="px-6 py-6">
                <label for="filter"
                  >Editing View - if marked unchecked everyone can edit to
                  form</label
                >
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="edit_filter"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>
              </div>

              <div class="px-6 py-6" v-if="edit_filter">
                <label for="filter">Backend Only</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="edit_group_none"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>
                <label for="filter">Communication Group</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="edit_group_push_notes"
                  multiple
                  :closeOnSelect="false"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>

                <div class="px-6 py-6" v-if="edit_group_push_notes">
                  <v-select
                    :options="business.p_notes"
                    v-model="edit_group_push_notes_selected"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    :closeOnSelect="false"
                  />
                </div>
                <label for="filter">Group View</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="edit_group_views"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>

                <div class="px-6 py-6" v-if="edit_group_views">
                  <v-select
                    :options="business.views"
                    v-model="edit_group_views_selected"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    :closeOnSelect="false"
                  />
                </div>

                <label for="filter">Branches (staff)</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="edit_group_branches"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>

                <div class="px-6 py-6" v-if="edit_group_branches">
                  <v-select
                    :options="business.branches"
                    v-model="edit_group_branches_selected"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    :closeOnSelect="false"
                  />
                </div>

                <label for="filter">Positions (staff)</label>
                <vs-switch
                  color="primary"
                  icon-pack="feather"
                  vs-icon-on="icon-check-circle"
                  vs-icon-off="icon-slash"
                  v-model="edit_group_positions"
                >
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>

                <div class="px-6 py-6" v-if="edit_group_positions">
                  <v-select
                    :options="business.pos"
                    v-model="edit_group_positions_selected"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    multiple
                    :closeOnSelect="false"
                  />
                </div>
              </div>
            </div>
          </vs-col>
        </vs-row>

        <div v-if="choices.popup">
          <label for="filter">Add a Pop up when user goes into feature?</label>
          <vs-switch
            color="primary"
            icon-pack="feather"
            vs-icon-on="icon-check-circle"
            vs-icon-off="icon-slash"
            v-model="pop_filter"
          >
            <span slot="on">YES</span>
            <span slot="off">NO</span>
          </vs-switch>

          <div>
            <vs-input lable="Message" v-model="popMessage"></vs-input>
          </div>
        </div>

        <vs-divider></vs-divider>
      </div>
    </client-only>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  props: ['choices', 'item', 'item_id'],
  components: {
    vSelect,
  },
  data() {
    return {
      front: true,
      filter: false,
      group_branches: false,
      group_positions: false,
      group_views: false,
      group_push_notes: false,
      group_none: false,
      group_push_notes_selected: '',
      group_branches_selected: '',
      group_positions_selected: '',
      group_views_selected: '',

      pop_filter: false,
      popMessage: '',

      add_filter: false,
      add_group_none: false,
      add_group_branches: false,
      add_group_positions: false,
      add_group_views: false,
      add_group_push_notes: false,
      add_group_push_notes_selected: '',
      add_group_branches_selected: '',
      add_group_positions_selected: '',
      add_group_views_selected: '',

      edit_filter: false,
      edit_group_branches: false,
      edit_group_none: false,
      edit_group_positions: false,
      edit_group_views: false,
      edit_group_push_notes: false,
      edit_group_push_notes_selected: '',
      edit_group_branches_selected: '',
      edit_group_positions_selected: '',
      edit_group_views_selected: '',

      popupActivo4: false,

      filterAll: {
        item_id: this.$route.params.id,
      },

      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    }
  },
  // watch: {

  // },
  computed: {
    business() {
      if (process.client) {
        if (localStorage.getItem('mainBusiness')) {
          return JSON.parse(localStorage.getItem('mainBusiness'))
        } else {
          return this.$store.state.business.main_business
        }
      }
    },
    user() {
      if (process.client) {
        if (localStorage.getItem('userInfo')) {
          return JSON.parse(localStorage.getItem('userInfo'))
        } else {
          return this.$store.state.auth.active_user
        }
      }
    },
  },

  created() {
    this.$store.dispatch('form/filterAll', this.filterAll)
  },
  watch: {
    pop_filter: function () {
      this.filterAll.pop_filter = this.pop_filter
      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    popMessage: function () {
      this.filterAll.popMessage = this.popMessage

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    filter: function () {
      if (!this.filter) {
        ;(this.group_views = false),
          (this.group_positions = false),
          (this.group_branches = false),
          (this.group_push_notes = false)
      }
      this.filterAll.filter = this.filter

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    group_branches: function () {
      if (this.group_branches) {
        ;(this.group_positions = false),
          (this.group_views = false),
          (this.group_push_notes = false)
      }
      this.filterAll.group_branches = this.group_branches

      this.$store.dispatch('form/filterAll', this.filterAll)
    },

    group_push_notes: function () {
      if (this.group_push_notes) {
        ;(this.group_positions = false),
          (this.group_views = false),
          (this.group_branches = false)
      }
      this.filterAll.group_push_notes = this.group_push_notes

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    group_push_notes_selected() {
      this.filterAll.group_positions_selected = this.group_positions_selected

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    group_positions: function () {
      if (this.group_positions) {
        ;(this.group_branches = false),
          (this.group_views = false),
          (this.group_push_notes = false)
      }
      this.filterAll.group_positions = this.group_positions

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    group_views: function () {
      if (this.group_views) {
        ;(this.group_positions = false),
          (this.group_branches = false),
          (this.group_push_notes = false)
      }
      this.filterAll.group_views = this.group_views

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    group_branches_selected: function () {
      this.filterAll.group_branches_selected = this.group_branches_selected

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    group_positions_selected: function () {
      this.filterAll.group_positions_selected = this.group_positions_selected

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    group_views_selected: function () {
      this.filterAll.group_views_selected = this.group_views_selected

      this.$store.dispatch('form/filterAll', this.filterAll)
    },

    add_filter: function () {
      if (!this.filter) {
        ;(this.add_group_views = false),
          (this.add_group_positions = false),
          (this.add_group_branches = false),
          (this.add_group_push_notes = false)
      }
      this.filterAll.add_filter = this.add_filter

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    add_group_none: function () {
      if (this.group_none) {
        ;(this.add_group_views = false),
          (this.add_group_positions = false),
          (this.add_group_branches = false),
          (this.add_group_push_notes = false)
      }
      this.filterAll.add_group_none = this.add_group_none

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    add_group_branches: function () {
      if (this.add_group_branches) {
        ;(this.add_group_positions = false),
          (this.add_group_views = false),
          (this.add_group_push_notes = false)
      }
      this.filterAll.add_group_branches = this.add_group_branches

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    add_group_push_notes: function () {
      if (this.add_group_push_notes) {
        ;(this.add_group_positions = false),
          (this.add_group_views = false),
          (this.add_group_branches = false)
      }
      this.filterAll.add_group_push_notes = this.add_group_push_notes

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    add_group_push_notes_selected() {
      this.filterAll.add_group_positions_selected = this.add_group_positions_selected

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    add_group_positions: function () {
      if (this.add_group_positions) {
        ;(this.add_group_branches = false),
          (this.add_group_views = false),
          (this.add_group_push_notes = false)
      }
      this.filterAll.add_group_positions = this.add_group_positions

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    add_group_views: function () {
      if (this.add_group_views) {
        ;(this.add_group_positions = false),
          (this.add_group_branches = false),
          (this.add_group_push_notes = false)
      }
      this.filterAll.add_group_views = this.add_group_views

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    add_group_branches_selected: function () {
      this.filterAll.add_group_branches_selected = this.add_group_branches_selected

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    add_group_positions_selected: function () {
      this.filterAll.add_group_positions_selected = this.add_group_positions_selected

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    add_group_views_selected: function () {
      this.filterAll.add_group_views_selected = this.add_group_views_selected

      this.$store.dispatch('form/filterAll', this.filterAll)
    },

    edit_filter: function () {
      if (!this.edit_filter) {
        ;(this.edit_group_views = false),
          (this.edit_group_positions = false),
          (this.edit_group_branches = false),
          (this.edit_group_push_notes = false)
        this.edit_group_none = false
      }
      this.filterAll.edit_filter = this.edit_filter

      this.$store.dispatch('form/filterAll', this.filterAll)
    },

    edit_group_none: function () {
      if (this.edit_group_none) {
        ;(this.edit_group_views = false),
          (this.edit_group_positions = false),
          (this.edit_group_branches = false),
          (this.edit_group_push_notes = false)
      }
      this.filterAll.edit_group_none = this.edit_group_none

      this.$store.dispatch('form/filterAll', this.filterAll)
    },

    edit_group_branches: function () {
      if (this.edit_group_branches) {
        ;(this.edit_group_positions = false),
          (this.edit_group_views = false),
          (this.edit_group_push_notes = false)
        this.edit_group_none = false
      }
      this.filterAll.edit_group_branches = this.edit_group_branches
      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    edit_group_push_notes: function () {
      if (this.edit_group_push_notes) {
        ;(this.edit_group_positions = false),
          (this.edit_group_views = false),
          (this.edit_group_branches = false)
        this.edit_group_none = false
      }
      this.filterAll.edit_group_push_notes = this.edit_group_push_notes
      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    edit_group_push_notes_selected() {
      this.filterAll.edit_group_positions_selected = this.edit_group_positions_selected

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    edit_group_positions: function () {
      if (this.edit_group_positions) {
        ;(this.edit_group_branches = false),
          (this.edit_group_views = false),
          (this.edit_group_push_notes = false)
        this.edit_group_none = false
      }

      this.filterAll.edit_group_positions = this.edit_group_positions

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    edit_group_views: function () {
      if (this.edit_group_views) {
        ;(this.edit_group_positions = false),
          (this.edit_group_branches = false),
          (this.add_group_push_notes = false)
        this.edit_group_none = false
      }

      this.filterAll.edit_group_views = this.edit_group_views

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    edit_group_branches_selected: function () {
      this.filterAll.edit_group_branches_selected = this.edit_group_branches_selected

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    edit_group_positions_selected: function () {
      this.filterAll.edit_group_positions_selected = this.edit_group_positions_selected

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
    edit_group_views_selected: function () {
      this.filterAll.edit_group_views_selected = this.edit_group_views_selected

      this.$store.dispatch('form/filterAll', this.filterAll)
    },
  },
}
</script>

<style lang="scss" scoped>
#theme-customizer {
  .vs-sidebar {
    position: fixed;
    z-index: 520;
    width: 400px;
    max-width: 90vw;
  }
}
.pac-container {
  z-index: 52011;
  background-color: inherit;
}
textarea {
  background-color: inherit;
  color: white;
}
select {
  background-color: inherit;
  color: white;
}
.customizer-btn {
  position: fixed;
  top: 50%;
  right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 500;

  .vs-icon {
    animation: spin 1.5s linear infinite;
  }
}

.scroll-area--customizer {
  height: calc(100% - 5rem);
}
</style>
