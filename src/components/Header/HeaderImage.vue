<script setup lang="ts">
import Image from '../ReuseableComponents/Image.vue'
import HeroBackground from '@/assets/images/illustration-hero.svg'
</script>
<template>
  <div class="header-hero-image-section">
    <Image :src="HeroBackground" alt="Hero image in header" class="hero-image" />
    <div class="header-hero-image-section__background"></div>
  </div>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
.header-hero-image-section {
  @include position-element($position: relative);
  &__background {
    @include position-element($position:absolute, $bottom: 0, $right: 0, $z-index: -100);
    width: 80%;
    height: 80%;
    background-color: map.get($colors, 'primary-blue-600');
    border-bottom-left-radius: 6em;
  }
}
@media (min-width: $desktop-small){
  .header-hero-image-section{
    @include grid-child(7, 13);
  }
}
</style>
