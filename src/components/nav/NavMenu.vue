<script setup lang="ts">
import { useSiteStore } from '../../stores/site-store'
const siteStore = useSiteStore()
import FacebookIcon from '@/assets/icons/icon-facebook.svg'
import TwitterIcon from '@/assets/icons/icon-twitter.svg'
import { RouterLink } from 'vue-router'
import Icon from '../ReuseableComponents/Icon.vue'
import type { NavItem } from '@/types/types'
const props = defineProps<{
  items: NavItem[]
}>()
</script>
<template>
  <Transition name="show">
    <div class="mobile-menu" v-show="siteStore.isMobile && siteStore.isOpen">
      <ul class="navigation-mobile">
        <li
          v-for="navItem in props.items"
          :key="navItem.id"
          :title="navItem.title"
          class="navigation-mobile__item"
        >
          <router-link to="/view" class="navigation-mobile__item--link">
            {{ navItem.title }}
          </router-link>
        </li>
        <slot name="login-cta" />
      </ul>
      <div class="desktop-menu" v-show="siteStore.isDesktop">
        <Icon :src="FacebookIcon" alt="Facebook icon" class="mobile-nav-icons__facebook-icon" />
        <Icon :src="TwitterIcon" alt="Twitter icon" class="mobile-nav-icons__twitter-icon" />
      </div>
    </div>
  </Transition>
  <div class="desktop-menu" v-show="siteStore.isDesktop">
    <ul class="navigation-desktop">
      <li
        v-for="navItem in props.items"
        :key="navItem.id"
        :title="navItem.title"
        class="navigation-desktop__item"
      >
        <router-link to="/view" class="navigation-desktop__item--link">
          {{ navItem.title }}
        </router-link>
      </li>
      <slot name="login-cta" />
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .show-enter-active,
  .show-leave-active {
    transition: all 0.5s ease-in-out;
  }
  .show-enter-from,
  .show-leave-to {
    opacity: 0;
  }
  .mobile-menu {
    position: fixed;
    inset: 0;
    z-index: -1;
    @include flex-layout(
      $flex-direction: column,
      $align-items: center,
      $justify-content: space-around
    );
    background-color: rgba(map.get($colors, 'neutral-blue-950'), 0.95);
    padding: 1.5em;
    .navigation-mobile {
      width: 90%;
      &__item {
        color: map.get($colors, 'neutral-grey-50');
        border-top: 0.05em solid map.get($colors, 'neutral-grey-600');
        padding: 1.5em;
        text-align: center;
        &:last-of-type {
          border-bottom: 0.05em solid map.get($colors, 'neutral-grey-600');
        }
        &--link {
          color: map.get($colors, 'neutral-grey-50');
          font-size: 1.5rem;
        }
      }
    }
    .mobile-nav-icons {
      @include flex-layout();
      @include set-gap(0, 3em);
      &__facebook-icon,
      &__twitter-icon {
        cursor: pointer;
      }
    }
  }
}
@media (min-width: $desktop-small) {
  .desktop-menu {
    grid-column: 8/13;
    position: static;
    .navigation-desktop {
      @include flex-layout($align-items: center);
      @include set-gap(0, 2em);
      &__item {
        &--link {
          color: map.get($colors, 'neutral-blue-950');
        }
      }
    }
  }
}
@media (min-width: $desktop-wide) {
  .desktop-menu {
    grid-column: 8/12;
  }
}
@media (min-width: $desktop-ultra-wide) {
  .desktop-menu {
    grid-column: 7/11;
  }
}
</style>
