<template>
  <vx-card :title="title" class="mt-base">
    <ul class="twitter-feeds-list" v-if="twitterFeeds.length > 0">
      <li
        class="twitter-feed"
        :class="{ 'mt-8': index }"
        v-for="(feed, index) in twitterFeeds"
        :key="feed.id"
      >
        <!-- FEED HEADER -->
        <div class="flex items-center twitter-feed-header">
          <vs-avatar class="m-0" :src="feed.authorAvatar" size="35px" />
          <div class="ml-3 leading-tight">
            <p class="font-semibold feed-author">
              {{ feed.authorDisplayName }}
            </p>
            <span class="flex items-center"
              ><small>@{{ feed.authorUsername }}</small
              ><feather-icon
                class="ml-1"
                icon="CheckIcon"
                svgClasses="h-3 w-3 bg-primary rounded-full text-white"
              ></feather-icon
            ></span>
          </div>
        </div>

        <!-- FEED CONTENT -->
        <p class="mt-4">{{ feed.content }}</p>
        <div class="tags-container" v-if="feed.tags.length">
          <span
            v-for="tag in feed.tags"
            :key="tag"
            id="tag"
            class="mr-2 text-primary"
            >#{{ tag }}</span
          >
        </div>
        <small class="inline-block mt-3">{{ feed.time | date(true) }}</small>
      </li>
    </ul>
    <ul v-if="simpleCalendarEvents.length > 0">
      {{
        simpleCalendarEvents
      }}

      <li
        class="twitter-feed"
        :class="{ 'mt-8': index }"
        v-for="(feed, index) in simpleCalendarEvents"
        :key="feed.id"
      >
        <!-- FEED HEADER -->
        <div class="flex items-center twitter-feed-header">
          <vs-avatar class="m-0" :src="user.avatar" size="35px" />
          <div class="ml-3 leading-tight">
            <p class="font-semibold feed-author">
              {{ user.display_name }}
            </p>
            <span class="flex items-center"
              ><small>@{{ user.display_name }}</small
              ><feather-icon
                class="ml-1"
                icon="CheckIcon"
                svgClasses="h-3 w-3 bg-primary rounded-full text-white"
              ></feather-icon
            ></span>
          </div>
        </div>

        <!-- FEED CONTENT -->
        <!-- <p class="mt-4" v-if="feed.tweets">{{ feed.tweets[0].textarea }}</p> -->
        <!-- <div class="tags-container" v-if="feed.tags.length">
          <span
            v-for="tag in feed.tags"
            :key="tag"
            id="tag"
            class="mr-2 text-primary"
            >#{{ tag }}</span
          >
        </div> -->
        <small class="inline-block mt-3"
          >{{ feed.scheduled_date | date(true) }} - {{ feed.time }}</small
        >
      </li>
    </ul>
  </vx-card>
</template>

<script>
export default {
  name: 'UiSocialTwitterFeeds',
  props: {
    title: { type: String, default: 'Your Feed' },
    twitterFeeds: { type: Array, default: () => [] },
    simpleCalendarEvents: { type: Array, default: () => [] },
  },
  computed: {
    user() {
      return this.$store.state.auth.main_user
    },
  },
}
</script>

<style></style>
