<script setup lang="ts">
import { ref } from 'vue'
import NavLogo from './NavLogo.vue'
import NavButton from './NavButton.vue'
import NavMenu from './NavMenu.vue'
import ListButton from '../ReuseableComponents/Button.vue'
import { useSiteStore } from '../../stores/site-store'
const siteStore = useSiteStore()
const navList = ref([
  {
    id: 1,
    title: 'FEATURES',
  },
  {
    id: 2,
    title: 'PRICING',
  },
  {
    id: 3,
    title: 'CONTACT',
  },
])
</script>
<template>
  <nav class="nav-menu">
    <NavLogo />
    <NavMenu :items="navList">
      <template #login-cta>
        <ListButton class="navigation-cta">LOGIN</ListButton>
      </template>
    </NavMenu>
    <NavButton v-show="siteStore.isMobile" />
  </nav>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .nav-menu {
    @include flex-layout($justify-content: space-between, $align-items: center);
    padding: 1.5em;
    background-color: transparent;
    @include position-element($position: fixed, $left: 0, $right: 0, $z-index: 1);
    &::before{
      position: absolute;
      content: '';
      inset: 0 0 0 0;
      backdrop-filter: blur(.5em);
      height: 100%;
      z-index: -1;
      background-color: transparent;
    }
  }
  .navigation-cta {
    border-radius: 0.4em;
    border: 0.15em solid map.get($colors, 'neutral-grey-50');
    padding: 0.5em 4em;
    background-color: transparent;
    color: map.get($colors, 'neutral-grey-50');
    font-size: 1.5rem;
    width: 100%;
    margin-top: 1.5em;
    transition:
      border-color 0.3s ease-in-out,
      color 0.3s ease-in-out;
    &:hover {
      border-color: map.get($colors, 'primary-red-400');
      color: map.get($colors, 'primary-red-400');
    }
  }
}
@media (min-width: $desktop-small) {
  .nav-menu {
    @include position-element($position: static);
    @include grid-layout($columns: 12);
    &::before{
      display: none;
    }
  }
  .navigation-cta {
    border: 0.15em solid map.get($colors, 'primary-red-400');
    background-color: map.get($colors, 'primary-red-400');
    padding: 0.5em 2em;
    font-size: 1rem;
    margin: 0;
    width: 9.375em;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: map.get($colors, 'neutral-grey-50');
    }
  }
}
</style>
