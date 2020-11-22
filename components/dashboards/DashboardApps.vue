<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO: if not coming from front business, change
========================================================================================== -->

<template>
  <div id="knowledge-base-page">
    <!-- JUMBOTRON -->
    <div class="knowledge-base-jumbotron">
      <div
        class="p-8 rounded-lg knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 mb-base"
      >
        <h1 class="mb-1 text-white">Run your business from here</h1>
        <p class="text-white">
          {{ motivational_quotes }}
        </p>
        <vs-input
          icon-no-border
          placeholder="Search Topic or Keyword"
          v-model="knowledgeBaseSearchQuery"
          icon-pack="feather"
          icon="icon-search"
          size="large"
          class="w-full mt-6"
        />
      </div>
    </div>

    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div
        class="w-full vx-col md:w-1/3 sm:w-1/2 mb-base min-h-250"
        v-for="item in filteredKB"
        :key="item.id"
      >
        <CardSimple :item="item" class="h-full" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, useContext, computed, onMounted } from "@nuxtjs/composition-api";
export default {
  name: "dashboardApps",
  setup() {
    const { store } = useContext();
    onMounted(() => {
      store.commit("business/UPDATE_BUSINESS_INFO", business.value);
    });
    let knowledgeBaseSearchQuery = ref("");
    const kb = ref([
      {
        title: "Builders",
        description: "Page, Email, Forms and Social Media builders...",
        graphic: require("@/assets/illustrations/abstract.svg"),
        url: "/dashboard/builders"
      },
      {
        title: "Events",
        description: "Create Event Calendars for all your awesome events",
        graphic: require("@/assets/illustrations/online_calendar.svg"),
        url: "/dashboard/events"
      },
      {
        title: "Around Us",
        description: "Show users places, events around their location",
        graphic: require("@/assets/illustrations/location_search.svg"),
        url: "/dashboard/around-us"
      },
      {
        title: "Blog",
        description: "Share your knowledge",
        graphic: require("@/assets/illustrations/personal_notebook.svg"),
        url: "/dashboard/blog"
      },
      {
        title: "Contacts",
        description:
          "Create Contact lists to be used all over for effective communication",
        graphic: require("@/assets/illustrations/everywhere_together.svg"),
        url: "/dashboard/contacts"
      },
      {
        title: "eCommerce",
        description:
          "It is all online, advertise and sell your digital and physical products as well as services",
        graphic: require("@/assets/illustrations/web_shopping.svg"),
        url: "/dashboard/ecommerce"
      },
      {
        title: "Email Photo",
        description: "Gather photos from your users",
        graphic: require("@/assets/illustrations/taking_selfie.svg"),
        url: "/dashboard/email-photo"
      },
      {
        title: "Fan Wall",
        description: "Up the engagement with your own Fan Wall!",
        graphic: require("@/assets/illustrations/browsing_online.svg"),
        url: "/dashboard/fan-wall"
      },
      {
        title: "Image Gallery",
        description: "Illustrate your images",
        graphic: require("@/assets/illustrations/online_gallery.svg"),
        url: "/dashboard/image-gallery"
      },
      {
        title: "Info Tier",
        description: "A lot of knowledge to be shared",
        graphic: require("@/assets/illustrations/add_notes.svg"),
        url: "/dashboard/info-tier"
      },
      {
        title: "Real Estate",
        description: "Run your own real estate portfolio",
        graphic: require("@/assets/illustrations/apartment_rent.svg"),
        url: "/dashboard/real-estate"
      },
      {
        title: "Mailing List",
        description: "Create Sign up forms to your mailing lists",
        graphic: require("@/assets/illustrations/files_sent.svg"),
        url: "/dashboard/mailing-list"
      },
      {
        title: "Documents",
        description: "Create a central storage for all your documents",
        graphic: require("@/assets/illustrations/add_documents.svg"),
        url: "/dashboard/documents"
      },
      {
        title: "Loyalty",
        description: "Reward your loayla customers with a loyalty scheme",
        graphic: require("@/assets/illustrations/send_gift.svg"),
        url: "/dashboard/loyalty"
      },
      {
        title: "Videos",
        description: "Upload your Videos to showcase",
        graphic: require("@/assets/illustrations/online_video.svg"),
        url: "/dashboard/videos"
      },
      {
        title: "Music",
        description: "Upload your Music to showcase",
        graphic: require("@/assets/illustrations/music.svg"),
        url: "/dashboard/music"
      },
      {
        title: "Golf",
        description: "How far to the pin?",
        graphic: require("@/assets/illustrations/golf.svg"),
        url: "/dashboard/golf"
      },
      {
        title: "Drawing Board",
        description: "Multi User Drawing boards!",
        graphic: require("@/assets/illustrations/predictive_analytics.svg"),
        url: "/dashboard/drawing-board"
      },
      {
        title: "Radio",
        description: "Create your own station and playlists",
        graphic: require("@/assets/illustrations/listening.svg"),
        url: "/dashboard/radio"
      },
      {
        title: "Classroom",
        description:
          "Education is key, and we have your classroom needs covered",
        graphic: require("@/assets/illustrations/exams.svg"),
        url: "/dashboard/classroom"
      },
      {
        title: "Video Call",
        description: "Conference call to a whole new level",
        graphic: require("@/assets/illustrations/group_video.svg"),
        url: "/dashboard/video-call"
      },
      {
        title: "Alert Button",
        description:
          "Feeling Stressed? Need urgent assistance? Let all know where you are!",
        graphic: require("@/assets/illustrations/my_location.svg"),
        url: "/dashboard/video-call"
      },
      {
        title: "Project Management",
        description: "Kanban style management tool",
        graphic: require("@/assets/illustrations/our_solution.svg"),
        url: "/dashboard/video-call"
      },
      {
        title: "Broadcaster",
        description: "Your own broadcast station",
        graphic: require("@/assets/illustrations/podcast.svg"),
        url: "/dashboard-apps-broadcast"
      }
    ]);
    const user = computed(() => store.state.auth.main_user);
    let filteredKB = computed(() => {
      return kb.value.filter(
        item =>
          item.title
            .toLowerCase()
            .includes(knowledgeBaseSearchQuery.value.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(knowledgeBaseSearchQuery.value.toLowerCase())
      );
    });
    let motivational_quotes = computed(() => {
      let num = Math.floor(Math.random() * 55);
      return store.state.info.motivational_quotes[num];
    });

    let business = computed(() => {
      return store.state.business.main_business;
    });
    return {
      knowledgeBaseSearchQuery,
      kb,
      filteredKB,
      motivational_quotes,
      business
    };
  }

  //   created() {
  //     this.$store.commit("business/UPDATE_BUSINESS_INFO", this.business);
  //   }
};
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url("~/assets/images/background/night.jpeg");
  background-size: cover;
}
</style>
