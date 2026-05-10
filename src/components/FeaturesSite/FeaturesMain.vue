<script setup lang="ts">
import FeaturesHeader from './FeaturesHeader.vue'
</script>
<template>
  <section class="features-main">
    <FeaturesHeader>
      <template #features-header>
        <div class="features-header-content">
          <h2 class="features-header-content__header">Features</h2>
          <p class="features-header-content__description">
            Our aim is to make it quick and easy for you to access your favourite websites. Your
            bookmarks sync between your devices so you can access them on the go.
          </p>
        </div>
      </template>
    </FeaturesHeader>
  </section>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .features-main {
    padding-top: 5em;
    .features-header-content {
      @include flex-layout($justify-content: center, $align-items: center, $flex-direction: column);
      @include set-gap(1em, 0);
      padding: 0 1em;
      &__description{
        text-align: center;
      }
    }
  }
}
@media (min-width: $tablet-view) {
  .features-main {
    .features-header-content {
      &__description {
        max-width: 70ch;
      }
    }
  }
}
@media (min-width: $desktop-small){
      .features-main {
    .features-header-content {
      &__description {
        max-width: 35ch;
      }
    }
  }
}
</style>
