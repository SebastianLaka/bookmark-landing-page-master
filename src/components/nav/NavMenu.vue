<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { NavItem } from '@/types/types'
const props = defineProps<{
  items: NavItem[]
}>()
</script>
<template>
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
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .navigation-mobile {
    position: fixed;
    inset: 0;
    @include flex-layout($flex-direction: column, $align-items: center, $justify-content: center);
    padding: 1em;
    gap: 1em 0;
    background-color: map.get($colors, 'neutral-blue-950');
    &__item {
      color: map.get($colors, 'neutral-grey-50');
      &--link {
        color: map.get($colors, 'neutral-grey-50');
      }
    }
  }
}
</style>
