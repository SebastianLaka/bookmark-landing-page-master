<script setup lang="ts"></script>
<template>
  <div class="accordion-header">
    <slot name="accordion-content" />
  </div>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .accordion-header {
    @include flex-layout($flex-direction: column, $align-items: center);
    @include set-gap(1.25em, 0);
  }
}
@media (min-width: $desktop-wide) {
  .accordion-header {
    grid-row: 1/1;
    @include grid-child(3, 11);
  }
}
</style>
