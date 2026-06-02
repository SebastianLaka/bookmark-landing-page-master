<script setup lang="ts">
import AccordionHeader from './AccordionHeader.vue'
import AccordionItem from './AccordionItem.vue'
import { useSiteStore } from '../../stores/site-store'
const siteStore = useSiteStore()
</script>
<template>
  <section class="accordion-main">
    <AccordionHeader>
      <template #accordion-content>
        <h2 class="accordion-header__header">Frequently Asked Questions</h2>
        <p class="accordion-header__description">
          Here are some of our FAQs. If you have any other questions you’d like answered please feel
          free to email us.
        </p>
      </template>
    </AccordionHeader>
    <AccordionItem :accordion="siteStore.accordionContent" />
  </section>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .accordion-main {
    @include flex-layout($flex-direction: column);
    @include set-gap(2em, 0);
    padding: 0 1.5em 0;
    .accordion-header{
      &__description{
        max-width: 70ch;
        text-align: center;
        padding: 0 1em;
      }
    }
  }
}

@media (min-width: $desktop-wide) {
  .accordion-main {
    @include grid-layout($columns: 12);
  }
}
</style>
