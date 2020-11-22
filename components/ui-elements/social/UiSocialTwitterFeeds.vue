<template>
  <vx-card :title="title" class="mt-base">
    <ul class="twitter-feeds-list">
      <li
        class="twitter-feed"
        :class="{ 'mt-8': index }"
        v-for="(feed, index) in twitterFeeds"
        :key="feed.id"
      >
        <!-- FEED HEADER -->
        <div class="twitter-feed-header flex items-center">
          <vs-avatar class="m-0" :src="feed.authorAvatar" size="35px" />
          <div class="leading-tight ml-3">
            <p class="feed-author font-semibold">
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
        <small class="mt-3 inline-block">{{ feed.time | date(true) }}</small>
      </li>
    </ul>
  </vx-card>
</template>

<script>
export default {
  name: "UiSocialTwitterFeeds",
  props: {
    title: { type: String, default: "Your Feed" },
    twitterFeeds: { type: Array, default: [] }
  }
};
</script>

<style></style>
