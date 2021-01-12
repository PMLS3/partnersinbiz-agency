<template>
  <vx-card>
                    <img :src="schema.content.img" alt="content-img" class="responsive rounded-lg">
                    <div class="my-6">
                        <h5 class="mb-2">{{ schema.content.title }}</h5>
                        <p class="text-grey">{{ schema.content.subtitle }}</p>
                    </div>
                    <vs-divider></vs-divider>
                    <div class="flex justify-between flex-wrap">
                        <span>
                            <p class="text-xl">{{ schema.content.footer_text_left_value }}</p>
                            <p class="text-grey">{{ schema.content.footer_text_left_label }}</p>
                        </span>
                        <span>
                            <p class="text-xl">{{ schema.content.footer_text_right_value }}</p>
                            <p class="text-grey">{{ schema.content.footer_text_right_label }}</p>
                        </span>
                    </div>
                </vx-card>
</template>

<script>
export default {
        name: "buttons",
  props: ["schema", "index", "mainIndex"],

}
</script>

<style>

</style>