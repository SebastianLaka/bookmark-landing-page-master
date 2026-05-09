<script setup lang="ts">
import HeaderImage from './HeaderImage.vue'
import HeaderContent from './HeaderContent.vue'
import HeaderButton from '../ReuseableComponents/Button.vue'
</script>
<template>
  <HeaderImage />
  <HeaderContent>
    <template #header-content>
      <div class="header-content">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open a new browser tab
          and see your sites load instantly. Try it for free.
        </p>
      </div>
      <div class="header-cta">
        <HeaderButton>Get it on Chrome</HeaderButton>
        <HeaderButton>Get it on Firefox</HeaderButton>
      </div>
    </template>
  </HeaderContent>
</template>
<style lang="scss" scoped>
</style>
