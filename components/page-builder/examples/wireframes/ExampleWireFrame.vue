<template>
  <!-- <div>
    <vs-radio v-model="val" vs-name="val" vs-value="blog">Blog</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="contact"
      >Contact Us</vs-radio
    >
    <vs-radio v-model="val" vs-name="val" vs-value="contentT">Content</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="cta">CTA</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="ecommerce"
      >eCommerce</vs-radio
    >
    <vs-radio v-model="val" vs-name="val" vs-value="feature">Feature</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="footerr">Footer</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="gallery">Gallery</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="headerr">Header</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="heros">Hero</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="box">Box Layout</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="side">Side Layout</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="cardL"
      >Card Layout</vs-radio
    >
    <vs-radio v-model="val" vs-name="val" vs-value="card">Card</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="overlays"
      >Overlays</vs-radio
    >

    <vs-radio v-model="val" vs-name="val" vs-value="navigation"
      >Navigation</vs-radio
    >

    <vs-radio v-model="val" vs-name="val" vs-value="headings">Heading</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="tables">Tables</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="lists">Lists</vs-radio>

    <vs-radio v-model="val" vs-name="val" vs-value="pricing">Pricing</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="statistics"
      >Statistics</vs-radio
    >
    <vs-radio v-model="val" vs-name="val" vs-value="steps">Step</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="team">Team</vs-radio>
    <vs-radio v-model="val" vs-name="val" vs-value="testimonial"
      >Testimonials</vs-radio
    >

    <component :is="val" />
  </div> -->
  <vs-tabs alignment="fixed" position="left">
    <vs-tab label="Blog"> <ExampleWireframesBlog /> </vs-tab>
    <vs-tab label="Card"> <ExampleWireFrameCard /> </vs-tab>
    <vs-tab label="Contact"> <ExampleWireframesContact /> </vs-tab>
    <vs-tab label="Heading"> <ExampleWireframesContent /> </vs-tab>
    <vs-tab label="CTA"> <ExampleWireframesCta /> </vs-tab>
    <vs-tab label="eCommercce"> <ExampleWireframeEcommerce /> </vs-tab>
    <vs-tab label="Features"> <ExampleWireframesFeature /> </vs-tab>
    <vs-tab label="Footer"> <ExampleWireframesFooter /> </vs-tab>
    <vs-tab label="Forms"> <ExampleWireframesForms /> </vs-tab>
    <vs-tab label="Gallery"> <ExampleWireframesGallery /> </vs-tab>
    <vs-tab label="Header"> <ExampleWireframesHeader /> </vs-tab>
    <vs-tab label="Headings"> <ExampleWireframesHeading /> </vs-tab>
    <vs-tab label="Hero"> <ExampleWireframesHero /> </vs-tab>
    <vs-tab label="Layouts">
      <vs-tab label="Box"> <ExampleWireframesBox /> </vs-tab>
      <vs-tab label="Card"> <ExampleWireFrameCard /> </vs-tab>
      <vs-tab label="Side"> <ExampleWireframesSide /> </vs-tab>
    </vs-tab>
    <vs-tab label="Lists"> <ExampleWireFrameLists /> </vs-tab>
    <vs-tab label="Navigation"> <ExampleWireFrameNavigation /> </vs-tab>
    <vs-tab label="Overlays"> <ExampleWireFrameOverlays /> </vs-tab>
    <vs-tab label="Pricing"> <ExampleWireframesPricing /> </vs-tab>
    <vs-tab label="Statistics"> <ExampleWireframesStatistic /> </vs-tab>
    <vs-tab label="Step"> <ExampleWireframeStep /> </vs-tab>
    <vs-tab label="Table"> <ExampleWireFrameTable /> </vs-tab>
    <vs-tab label="Team"> <ExampleWireframeTeam /> </vs-tab>
    <vs-tab label="Testimonial"> <ExampleWireframeTestimonial /> </vs-tab>
    <vs-tab label="UI"> <ExampleWireFrameUi /> </vs-tab>
  </vs-tabs>
</template>

<script>
export default {
  name: 'ExampleWireFrame',
}
</script>

<style></style>
