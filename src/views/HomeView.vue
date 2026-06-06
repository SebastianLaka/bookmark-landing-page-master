<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import HeaderMain from '@/components/Header/HeaderMain.vue'
const FeaturesMain = defineAsyncComponent(
  () => import('@/components/FeaturesSite/FeaturesMain.vue'),
)
const BrowserExtentions = defineAsyncComponent(
  () => import('@/components/BrowserExtentions/ExtentionsMain.vue'),
)
const AccordionMain = defineAsyncComponent(() => import('@/components/Accordion/AccordionMain.vue'))
const NewsletterMain = defineAsyncComponent(
  () => import('@/components/Newsletter/NewsletterMain.vue'),
)
</script>

<template>
  <HeaderMain />
  <Suspense>
    <template #default>
      <div class="site-wrapper">
        <FeaturesMain />
        <BrowserExtentions />
        <AccordionMain />
        <NewsletterMain />
      </div>
    </template>

    <template #fallback>
      <div class="sections-loader">
        <p>Loding...</p>
      </div>
    </template>
  </Suspense>
</template>
<style scoped lang="scss">
@use 'sass:map';

@use '@/assets/sass/mixins.scss' as *;
.site-wrapper{
@include flex-layout($flex-direction: column);
@include set-gap(6em, 0)
}
.sections-loader {
  padding: 5em;
  text-align: center;
  font-weight: 500;
  opacity: 0.7;
}
</style>
