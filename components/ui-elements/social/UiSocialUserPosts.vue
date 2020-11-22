<template>
  <div>
    <vx-card class="mt-base" v-for="(post, index) in userPosts" :key="index">
      <div>
        <!-- POST HEADER -->
        <div class="post-header flex justify-between mb-4">
          <div class="flex items-center">
            <div>
              <vs-avatar
                class="m-0"
                :src="userLatestPhotos[0]"
                size="45px"
              ></vs-avatar>
            </div>
            <div class="ml-4">
              <h6>{{ post.author }}</h6>
              <small
                >{{ post.time | date(true) }} at {{ post.time | time }}</small
              >
            </div>
          </div>
          <div class="flex">
            <feather-icon
              class="ml-4"
              icon="HeartIcon"
              :svgClasses="{
                'text-danger fill-current stroke-current': post.isLiked
              }"
            ></feather-icon>
          </div>
        </div>

        <!-- POST CONTENT -->
        <div class="post-content">
          <p>{{ post.text }}</p>
        </div>
        <div class="post-media-container mb-6 mt-4">
          <ul class="flex post-media-list">
            <li
              class="post-media m-1 w-full"
              v-for="(media, mediaIdex) in post.media.slice(0, 2)"
              :key="mediaIdex"
            >
              <img
                class="responsive rounded"
                :src="media.img"
                alt="user-upload"
                v-if="mediaType(media) == 'image'"
              />
              <!-- <video-player
                    ref="player"
                    class="media-video-player"
                    :options="playerOptions(media)"
                    v-else-if="mediaType(media) == 'video'"
                    v-once
                  /> -->
              <span class="text-lg text-primary" v-else
                >Unknown Media Type</span
              >
            </li>
          </ul>
          <span class="flex justify-end" v-if="post.media.length > 2">
            <a class="inline-flex items-center text-sm" href=""
              ><span>View All</span>
              <feather-icon
                :icon="$vs.rtl ? 'ChevronsLeftIcon' : 'ChevronsRightIcon'"
                svgClasses="h-4 w-4"
              ></feather-icon
            ></a>
          </span>
        </div>

        <!-- POST ACTION DATA -->
        <div>
          <div class="flex justify-between">
            <div class="flex items-center">
              <div class="flex items-center">
                <feather-icon
                  class="mr-2"
                  icon="HeartIcon"
                  svgClasses="h-5 w-5"
                ></feather-icon>
                <span>{{ post.likes }}</span>
              </div>
              <ul class="users-liked user-list ml-3 sm:ml-6">
                <li
                  v-for="(user, userIndex) in post.usersLiked"
                  :key="userIndex"
                >
                  <vx-tooltip :text="user.name" position="bottom">
                    <vs-avatar
                      :src="user.img"
                      size="30px"
                      class="border-2 border-white border-solid -m-1"
                    ></vs-avatar>
                  </vx-tooltip>
                </li>
              </ul>
              <small class="ml-2">+{{ post.likes - 5 }} more</small>
            </div>
            <div class="flex items-center">
              <feather-icon
                class="mr-2"
                icon="MessageSquareIcon"
                svgClasses="h-5 w-5"
              ></feather-icon>
              <span>{{ post.comments }}</span>
            </div>
          </div>
          <div class="comments-container mt-4">
            <ul class="user-comments-list">
              <li
                v-for="(commentedUser,
                commentIndex) in post.usersCommented.slice(0, 2)"
                :key="commentIndex"
                class="commented-user flex items-center mb-4"
              >
                <div class="mr-3">
                  <vs-avatar class="m-0" :src="commentedUser.img" size="30px" />
                </div>
                <div class="leading-tight">
                  <p class="font-medium">{{ commentedUser.author }}</p>
                  <span class="text-xs">{{ commentedUser.comment }}</span>
                </div>
                <div class="ml-auto">
                  <div class="flex">
                    <feather-icon
                      icon="HeartIcon"
                      svgClasses="h-4 w-4"
                      class="mr-2 cursor-pointer"
                    ></feather-icon>
                    <feather-icon
                      icon="MessageSquareIcon"
                      svgClasses="h-4 w-4"
                      class="cursor-pointer"
                    ></feather-icon>
                  </div>
                </div>
              </li>
            </ul>
            <span
              class="flex justify-end"
              v-if="post.usersCommented.length > 2"
            >
              <a class="inline-flex items-center text-sm" href=""
                ><span>View All</span>
                <feather-icon
                  :icon="$vs.rtl ? 'ChevronsLeftIcon' : 'ChevronsRightIcon'"
                  svgClasses="h-4 w-4"
                ></feather-icon
              ></a>
            </span>
          </div>
          <div class="post-comment">
            <vs-textarea
              label="Add Comment"
              class="mb-2"
              v-model="post.commentbox"
            />
            <vs-button size="small">Post Comment</vs-button>
          </div>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
export default {
  name: "UiSocialUserPosts",
  props: {
    title: { type: String, default: "" },
    userPosts: { type: Array, default: [] },
    userLatestPhotos: { type: Array, default: [] }
  },
  data() {
    return {
      mediaExtensions: {
        img: ["jpg", "jpeg", "png", "bmp", "gif", "exif", "tiff"],
        video: ["avi", "flv", "wmv", "mov", "mp4", "3gp"]
      }
    };
  },
  computed: {
    mediaType() {
      return media => {
        if (media.img) {
          const ext = media.img.split(".").pop();
          if (this.mediaExtensions.img.includes(ext)) return "image";
        } else if (media.sources && media.poster) {
          // other validations
          return "video";
        }
      };
    },
    playerOptions() {
      return media => {
        return {
          height: "360",
          fluid: true,
          autoplay: false,
          muted: true,
          language: "en",
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: media.sources,
          poster: media.poster
        };
      };
    }
  }
};
</script>
