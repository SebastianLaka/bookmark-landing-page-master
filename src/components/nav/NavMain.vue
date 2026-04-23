<script setup lang="ts">
import NavLogo from './NavLogo.vue'
import NavButton from './NavButton.vue'
</script>
<template>
  <nav class="nav-menu">
    <NavLogo />
    <NavButton />
  </nav>
</template>
<style lang="scss" scoped>
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view){
    .nav-menu{
        @include flex-layout($justify-content: space-between);
        padding: .5em;
    }
}
</style>
