<template>
  <div id="theme-customizer">
    <div class="px-6">
      <div class="px-6 py-6">
        <label for="filter"
          >Selected View - if marked unchecked everyone can see this
          category</label
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
            :options="companyDetails.group_push_notes"
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
            :options="companyDetails.group_views"
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
            :options="companyDetails.group_branches"
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
            :options="companyDetails.group_positions"
            v-model="group_positions_selected"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
            multiple
            :closeOnSelect="false"
          />
        </div>
      </div>
      <vs-divider></vs-divider>
      <div>
        <div class="px-6 py-6">
          <label for="filter"
            >Adding View - if marked unchecked everyone can add to form</label
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
            v-model="group_none"
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
              :options="companyDetails.group_push_notes"
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
              :options="companyDetails.group_views"
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
              :options="companyDetails.group_branches"
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
              :options="companyDetails.group_positions"
              v-model="add_group_positions_selected"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
              multiple
              :closeOnSelect="false"
            />
          </div>
        </div>
      </div>
      <div>
        <vs-divider></vs-divider>
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
  </div>
</template>

<script>
import vSelect from "vue-select";

export default {
  props: ["value", "label", "underLabel", "addingData"],
  components: {
    vSelect
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
      group_push_notes_selected: "",
      group_branches_selected: "",
      group_positions_selected: "",
      group_views_selected: "",

      pop_filter: false,
      popMessage: "",

      add_filter: false,
      add_group_branches: false,
      add_group_positions: false,
      add_group_views: false,
      add_group_push_notes: false,
      add_group_push_notes_selected: "",
      add_group_branches_selected: "",
      add_group_positions_selected: "",
      add_group_views_selected: "",

      popupActivo4: false,
      configdateTimePicker: {
        enableTime: true,
        enableSeconds: true,
        noCalendar: true
      },
      Categories: [""],
      formData: {},
      htmlForEditor: "",
      active: false,
      date: null,

      time: null,
      dateEnd: null,
      timeEnd: null,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    };
  },
  // watch: {

  // },
  computed: {
    appcode() {
      return this.$store.getters["appcode"];
    },
    component() {
      return this.$store.getters["app/component"];
    },
    currentComponent() {
      return this.$store.getters["app/currentcomponent"];
    },
    companyDetails() {
      return this.$store.getters["app/companyDetails"];
    }
  },
  watch: {
    imageUrl: function() {
      this.imageUrls = this.imageUrl;
    },
    pop_filter: function() {
      this.$store.dispatch("form/pop_filter", this.pop_filter);
    },
    popMessage: function() {
      this.$store.dispatch("form/popMessage", this.popMessage);
    },
    filter: function() {
      if (!this.filter) {
        (this.group_views = false),
          (this.group_positions = false),
          (this.group_branches = false),
          (this.group_push_notes = false);
      }
      this.$store.dispatch("form/filter", this.filter);
    },
    group_branches: function() {
      if (this.group_branches) {
        (this.group_positions = false),
          (this.group_views = false),
          (this.group_push_notes = false);
      }
      this.$store.dispatch("form/group_branches", this.group_branches);
    },

    group_push_notes: function() {
      if (this.group_push_notes) {
        (this.group_positions = false),
          (this.group_views = false),
          (this.group_branches = false);
      }
      this.$store.dispatch("form/group_push_notes", this.group_push_notes);
    },
    group_push_notes_selected() {
      this.$store.dispatch(
        "form/group_push_notes_selected",
        this.group_positions_selected
      );
    },
    group_positions: function() {
      if (this.group_positions) {
        (this.group_branches = false),
          (this.group_views = false),
          (this.group_push_notes = false);
      }
      this.$store.dispatch("form/group_positions", this.group_positions);
    },
    group_views: function() {
      if (this.group_views) {
        (this.group_positions = false),
          (this.group_branches = false),
          (this.group_push_notes = false);
      }
      this.$store.dispatch("form/group_views", this.group_views);
    },
    group_branches_selected: function() {
      this.$store.dispatch(
        "form/group_branches_selected",
        this.group_branches_selected
      );
    },
    group_positions_selected: function() {
      this.$store.dispatch(
        "form/group_positions_selected",
        this.group_positions_selected
      );
    },
    group_views_selected: function() {
      this.$store.dispatch(
        "form/group_views_selected",
        this.group_views_selected
      );
    },

    add_filter: function() {
      if (!this.filter) {
        (this.add_group_views = false),
          (this.add_group_positions = false),
          (this.add_group_branches = false),
          (this.add_group_push_notes = false);
      }
      this.$store.dispatch("form/add_filter", this.add_filter);
    },
    group_none: function() {
      if (this.group_none) {
        (this.add_group_views = false),
          (this.add_group_positions = false),
          (this.add_group_branches = false),
          (this.add_group_push_notes = false);
      }
      this.$store.dispatch("form/group_none", this.group_none);
    },
    add_group_branches: function() {
      if (this.add_group_branches) {
        (this.add_group_positions = false),
          (this.add_group_views = false),
          (this.add_group_push_notes = false);
      }
      this.$store.add_dispatch(
        "form/add_group_branches",
        this.add_group_branches
      );
    },
    add_group_push_notes: function() {
      if (this.add_group_push_notes) {
        (this.add_group_positions = false),
          (this.add_group_views = false),
          (this.add_group_branches = false);
      }
      this.$store.dispatch(
        "form/add_group_push_notes",
        this.add_group_push_notes
      );
    },
    add_group_push_notes_selected() {
      this.$store.dispatch(
        "form/add_group_push_notes_selected",
        this.add_group_positions_selected
      );
    },
    add_group_positions: function() {
      if (this.add_group_positions) {
        (this.add_group_branches = false),
          (this.add_group_views = false),
          (this.add_group_push_notes = false);
      }
      this.$store.dispatch(
        "form/add_group_positions",
        this.add_group_positions
      );
    },
    add_group_views: function() {
      if (this.add_group_views) {
        (this.add_group_positions = false),
          (this.add_group_branches = false),
          (this.add_group_push_notes = false);
      }
      this.$store.dispatch("form/add_group_views", this.add_group_views);
    },
    add_group_branches_selected: function() {
      this.$store.dispatch(
        "form/add_group_branches_selected",
        this.add_group_branches_selected
      );
    },
    add_group_positions_selected: function() {
      this.$store.dispatch(
        "form/add_group_positions_selected",
        this.add_group_positions_selected
      );
    },
    add_group_views_selected: function() {
      this.$store.dispatch(
        "form/add_group_views_selected",
        this.add_group_views_selected
      );
    },

    date: function() {
      let payload = this.date;
      this.$store.dispatch("form/datePick", payload);
    },
    time: function() {
      let payload = this.time;
      this.$store.dispatch("form/timePick", payload);
    },
    dateEnd: function() {
      let payload = this.dateEnd;
      this.$store.dispatch("form/datePickEnd", payload);
    },
    timeEnd: function() {
      let payload = this.timeEnd;
      this.$store.dispatch("form/timePickEnd", payload);
    },
    currentComponent: function() {
      let newCategory = this.$fireStore
        .collection(this.appcode)
        .doc(this.component)
        .collection("category")
        .where("currentComponent", "==", this.$route.params.id);
      newCategory.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          let doc = change.doc;
          this.Categories.push({
            id: doc.id,
            component: doc.data().component,
            componentname: doc.data().componentname,
            category: doc.data().category,
            downloadURL: doc.data().downloadURL,
            downloadUrl: doc.data().downloadUrl,
            description: doc.data().description
          });
        });
      });
    },
    Categories: function() {
      console.log("cat", this.addingData.schema[0]);
      var i;
      for (i = 0; i < this.Categories.length; i++) {
        this.addingData.schema[0].options.push(this.Categories[i].category);
      }
    }
  },
  mounted() {},
  methods: {
    frontChange() {
      this.front = !this.front;
    },
    newCategory() {
      let payload = {
        label: this.label,
        form: this.formData,
        html: this.htmlForEditor
      };
      this.$store.dispatch("form/addFormData", payload);
      this.active = false;
    }
  }
};
</script>

<style lang="scss">
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
