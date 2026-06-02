<script setup lang="ts">
import NavMain from '@/components/Nav/NavMain.vue'
import HeaderMain from '@/components/Header/HeaderMain.vue'
import FeaturesMain from '@/components/FeaturesSite/FeaturesMain.vue'
import BrowserExtentions from '@/components/BrowserExtentions/ExtentionsMain.vue'
import AccordionMain from '@/components/Accordion/AccordionMain.vue'
import NewsletterMain from '@/components/Newsletter/NewsletterMain.vue'
import FooterMain from '@/components/Footer/FooterMain.vue'
</script>
<template>
  <main class="main">
    <NavMain />
    <HeaderMain />
    <FeaturesMain />
    <BrowserExtentions />
    <AccordionMain />
    <div class="footer-group">
      <NewsletterMain />
      <FooterMain />
    </div>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/mixins.scss' as *;
.main {
  position: relative;
  @include flex-layout($flex-direction: column);
  @include set-gap(6em, 0);
  overflow-x: hidden;
}

</style>
