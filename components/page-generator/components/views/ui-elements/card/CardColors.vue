<template>
    <div class="vx-row">

        <!-- TITLE COLOR -->
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
            <vx-card
                title="Title Color"
                title-color="primary"
                subtitle="Brownie pastry chocolate pastry chocolate pudding."
                code-toggler>
                <p class="mb-3">You can use <code>title-color</code> prop to change color of title of card. This prop supports hex, rgba, rgb and theme colors.</p>
                <p class="mb-3">Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I love.</p>

                
            </vx-card>
        </div>

        <!-- TITLE COLOR -->
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
            <vx-card
                title="Title Color"
                title-color="success"
                subtitle="Brownie pastry chocolate pastry chocolate pudding."
                code-toggler>
                <p class="mb-3">You can use <code>title-color</code> prop to change color of title of card. This prop supports hex, rgba, rgb and theme colors.</p>
                <p class="mb-3">Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I love.</p>

               
            </vx-card>
        </div>

        <!-- SUBTITLE COLOR -->
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
            <vx-card
                title="Subtitle Color"
                title-color="primary"
                subtitle-color="warning"
                subtitle="Brownie pastry chocolate pastry chocolate pudding."
                code-toggler>
                <p class="mb-3">You can use <code>subtitle-color</code> prop to change color of subtitle of card. This prop supports hex, rgba, rgb and theme colors.</p>

              
            </vx-card>
        </div>

        <!-- CONTENT COLOR -->
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
            <vx-card
                title="Content Color"
                title-color="primary"
                content-color="warning"
                subtitle="Brownie pastry chocolate pastry chocolate pudding."
                code-toggler>
                <p class="mb-3">You can use <code>content-color</code> prop to change color of title of card. This prop supports hex, rgba, rgb and theme colors.</p>

              
            </vx-card>
        </div>

        <!-- Background Color -->
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
            <vx-card
                title="Background Color"
                title-color="#fff"
                card-background="primary"
                content-color="#fff"
                code-toggler>
                <p class="mb-3">You can use <strong>card-background</strong> prop to change background color of card. This prop supports hex, rgba, rgb and theme colors.</p>
                <p class="mb-3">Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I love.</p>

            </vx-card>
        </div>

        <!-- Background Color -->
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
            <vx-card
                title="Background Color"
                title-color="#fff"
                card-background="success"
                content-color="#fff"
                code-toggler>
                <p class="mb-3">You can use <strong>card-background</strong> prop to change background color of card. This prop supports hex, rgba, rgb and theme colors.</p>
                <p class="mb-3">Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I love.</p>

           
            </vx-card>
        </div>

        <!-- Gradient Background Color -->
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
            <vx-card
                title="Gradient Background Color"
                title-color="#fff"
                content-color="#fff"
                card-background="linear-gradient(120deg, #7f7fd5, #86a8e7, #91eae4)"
                code-toggler>
                <p class="mb-3">You can use <strong>card-background</strong> prop to change background color of card. This prop supports hex, rgba, rgb and theme colors.</p>
                <p class="mb-3">Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I love.</p>

              
            </vx-card>
        </div>


        <!-- Gradient Background Color -->
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
            <vx-card
                title="Gradient Background Color"
                title-color="#fff"
                content-color="#fff"
                card-background="linear-gradient(to right, #56ab2f, #a8e063)"
                code-toggler>
                <p class="mb-3">You can use <strong>card-background</strong> prop to change background color of card. This prop supports hex, rgba, rgb and theme colors.</p>
                <p class="mb-3">Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I love.</p>

            </vx-card>
        </div>


        <!-- Gradient Background Image -->
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
            <vx-card
                title="Gradient Background Image"
                title-color="#fff"
                content-color="#fff"
                :card-background="'linear-gradient(120deg ,rgba(109,213,237,.8), rgba(33,147,176,0.5)), url(' + card_bg_img_1 + ')'"
                class="card-overlay bg-cover"
                code-toggler>
                <p class="mb-3">You can use <strong>card-background</strong> prop to change background of card. This prop supports hex, rgba, rgb and theme colors.</p>
                <p class="mb-3">Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I love.</p>

               
            </vx-card>
        </div>


    </div>
</template>

<script>
export default{
  data () {
    return {
      card_bg_img_1: require('@/assets/images/pages/card-bg-image-demo-1.jpg'),
      card_bg_img_2: require('@/assets/images/pages/card-bg-image-demo-2.jpg')
    }
  }
}
</script>
