<script setup lang="ts"></script>
<template>
  <div class="extentions-header">
    <slot name="extentions-header" />
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
.extentions-header{
  @include flex-layout($justify-content: center, $align-items: center, $flex-direction: column);
    @include set-gap(1.25em, 0);
}
</style>
