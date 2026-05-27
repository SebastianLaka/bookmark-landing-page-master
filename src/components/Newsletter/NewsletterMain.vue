<script setup lang="ts">
import NewsletterHeader from './NewsletterHeader.vue'
</script>
<template>
  <section class="newsletter-container">
    <NewsletterHeader>
      <template #newsletter-header>
        <p>35,000 already joined</p>
        <h2>Stay up-to-date with what we’re doing</h2>
      </template>
    </NewsletterHeader>
  </section>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .newsletter-container {
    background-color: map.get($colors, 'primary-blue-600');
    color: map.get($colors, 'neutral-grey-50');
    padding: 1em;
  }
}
</style>
