<template>
  <div>
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
  </div>
</template>

<script>
import blog from './ExampleWireframesBlog'
import contact from './ExampleWireframesContact'
import contentT from './ExampleWireframesContent'
import cta from './ExampleWireframesCta'
import ecommerce from './ExampleWireframeEcommerce'
import feature from './ExampleWireframesFeature'
import footerr from './ExampleWireframesFooter'
import gallery from './ExampleWireframesGallery'
import headerr from './ExampleWireframesHeader'
import heros from './ExampleWireframesHero'
import pricing from './ExampleWireframesPricing'
import statistics from './ExampleWireframesStatistic'
import steps from './ExampleWireframeStep'
import team from './ExampleWireframeTeam'
import testimonial from './ExampleWireframeTestimonial'

export default {
  components: {
    blog,
    contact,
    contentT,
    cta,
    ecommerce,
    feature,
    footerr,
    gallery,
    headerr,
    heros,
    pricing,
    statistics,
    steps,
    team,
    testimonial,
  },
  data: () => ({
    val: 'blog',
  }),
}
</script>

<style></style>
