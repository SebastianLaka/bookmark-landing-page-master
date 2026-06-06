<script setup lang="ts">
import NavMain from '@/components/Nav/NavMain.vue'
import { RouterView } from 'vue-router'
import FooterMain from '@/components/Footer/FooterMain.vue'
</script>
<template>
  <main class="main">
    <NavMain />

    <RouterView />
    <div class="footer-group">
      <FooterMain />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/mixins.scss' as *;
.main {
  position: relative;
  @include flex-layout($flex-direction: column, $justify-content: space-between);
  @include set-gap(6em, 0);
  overflow-x: hidden;
  min-height: 100svh;
  .footer-group {
    margin-top: -6em;
  }
}
</style>
