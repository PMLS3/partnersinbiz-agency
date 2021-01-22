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
import blog from './blog/ExampleWireframesBlog'
import contact from './contact/ExampleWireframesContact'
import contentT from './content/ExampleWireframesContent'
import cta from './cta/ExampleWireframesCta'
import ecommerce from './ecommerce/ExampleWireframeEcommerce'
import feature from './feature/ExampleWireframesFeature'
import footerr from './footer/ExampleWireframesFooter'
import gallery from './gallery/ExampleWireframesGallery'
import headerr from './header/ExampleWireframesHeader'
import heros from './hero/ExampleWireframesHero'
import pricing from './pricing/ExampleWireframesPricing'
import statistics from './statistic/ExampleWireframesStatistic'
import steps from './step/ExampleWireframeStep'
import team from './team/ExampleWireframeTeam'
import testimonial from './testimonial/ExampleWireframeTestimonial'

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
