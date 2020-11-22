<template>
  <vx-card :title="title" class="mt-base">
    <!-- ACTION SLOT -->
    <template slot="actions">
      <feather-icon icon="MoreHorizontalIcon"></feather-icon>
    </template>

    <!-- USER BIO -->
    <div class="user-bio">
      <p>
        {{ user.about }}
      </p>
    </div>

    <!-- OTEHR DATA -->
    <div class="mt-5">
      <h6>Joined:</h6>
      <p>{{ user.date }}</p>
    </div>

    <div class="mt-5">
      <h6>Lives:</h6>
      <p>{{ user.street }}</p>
    </div>

    <div class="mt-5">
      <h6>Email:</h6>
      <p>{{ user.email }}</p>
    </div>

    <div class="mt-5">
      <h6>Website:</h6>
      <p>www.pixinvent.com</p>
    </div>

    <div class="social-links flex mt-4">
      <a :href="user.fb">
        <feather-icon
          svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded"
          class="mr-2"
          icon="FacebookIcon"
        ></feather-icon>
      </a>
      <a :href="user.twt">
        <feather-icon
          svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded"
          class="mr-2"
          icon="TwitterIcon"
        ></feather-icon>
      </a>
      <a :href="user.insta">
        <feather-icon
          svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded"
          class="mr-2"
          icon="InstagramIcon"
        ></feather-icon>
      </a>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: "UiMiscUserBio",
  props: {
    title: { type: String, default: "About" },
    user: { type: Object, default: {} }
  }
};
</script>

<style></style>
