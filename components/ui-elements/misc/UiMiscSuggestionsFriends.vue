<template>
  <vx-card title="Suggestions" class="mt-base">
    <!-- ACTION SLOT -->
    <template slot="actions">
      <feather-icon icon="MoreHorizontalIcon"></feather-icon>
    </template>

    <!-- FRIENDS LIST -->
    <ul class="friend-suggesions-list">
      <li
        class="friend-suggestion flex items-center mb-4"
        v-for="(friend, index) in suggestedFriends"
        :key="index"
      >
        <div class="mr-3">
          <vs-avatar class="m-0" :src="friend.avatar" size="35px" />
        </div>
        <div class="leading-tight">
          <p class="font-medium">{{ friend.name }}</p>
          <span class="text-xs">{{ friend.mutualFriends }} Mutual Friends</span>
        </div>
        <div class="ml-auto cursor-pointer">
          <vs-button
            radius
            type="border"
            icon-pack="feather"
            icon="icon-user-plus"
          />
        </div>
      </li>
    </ul>
    <template slot="footer">
      <vs-button icon-pack="feather" icon="icon-plus" class="w-full"
        >Load More</vs-button
      >
    </template>
  </vx-card>
</template>

<script>
export default {
  name: "UiMiscSuggestionsFriends",
  props: {
    title: { type: String, default: "Suggestions" },
    suggestedFriends: { type: Array, default: [] }
  }
};
</script>
