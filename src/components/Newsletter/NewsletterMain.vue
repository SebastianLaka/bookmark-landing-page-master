<script setup lang="ts">
import NewsletterHeader from './NewsletterHeader.vue'
import NewsletterForm from './NewsletterForm.vue';
</script>
<template>
  <section class="newsletter-container">
    <NewsletterHeader>
      <template #newsletter-header>
        <p>35,000 already joined</p>
        <h2>Stay up-to-date with what we’re doing</h2>
      </template>
    </NewsletterHeader>
    <NewsletterForm />
  </section>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .newsletter-container {
    @include flex-layout($flex-direction: column);
    @include set-gap(1.25em, 0);
    background-color: map.get($colors, 'primary-blue-600');
    color: map.get($colors, 'neutral-grey-50');
    padding:3em 1.5em;
  }
}
</style>
