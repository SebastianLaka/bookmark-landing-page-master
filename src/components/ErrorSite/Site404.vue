<script setup lang="ts"></script>

<template>
  <div class="not-found-page">
    <h1 class="not-found-page__header">Error 404</h1>
    <p class="not-found-page__description">The page you are looking for could not be found.</p>
    <router-link to="/" class="not-found-page__button">Back to main site</router-link>
  </div>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .not-found-page {
    @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
    @include set-gap(1em, 0);
    padding-top: 6em;
    height: 60svh;
    &__header {
      color: map.get($colors, 'neutral-blue-950');
    }
    &__description {
      color: map.get($colors, 'neutral-grey-600');
    }
    &__button {
      color: map.get($colors, 'neutral-grey-50');
      background-color: map.get($colors, 'primary-blue-600');
      border: 0.15em solid map.get($colors, 'neutral-grey-50');
      padding: 0.75em 1em;
      border-radius: 0.4em;
      align-self: center;
      transition:
        color 0.3s ease-in-out,
        border-color 0.3s ease-in-out,
        background-color 0.3s ease-in-out;
      &:hover {
        background-color: map.get($colors, 'neutral-grey-50');
        color: map.get($colors, 'primary-blue-600');
        border-color: map.get($colors, 'primary-blue-600');
      }
    }
  }
}
@media (min-width: $desktop-small){
  .not-found-page{
    padding-top: 0;
   padding-bottom: 6em;
    height: 50svh;
  }
}
</style>
