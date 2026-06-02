<script setup lang="ts">
import type { MenuItem } from '@/types/types'
const props = defineProps<{
  items: MenuItem[]
}>()
</script>
<template>
  <ul class="footer-menu">
    <li v-for="footerItem in props.items" :key="footerItem.id" class="footer-menu__link">{{ footerItem.title }}</li>
  </ul>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
.footer-menu{
    @include flex-layout($flex-direction: column, $align-items: center);
    @include set-gap(1.25em, 0);
    &__link{
      text-align: center;
      color: map.get($colors, 'neutral-grey-50');
      letter-spacing: .1em;
      cursor: pointer;
      transition: color .3s ease-in-out;
      &:hover{
        color: map.get($colors, 'primary-red-400');;
      }
    }
}
@media (min-width: $desktop-small){
  .footer-menu{
    flex-direction: row;
    @include set-gap(0, 1.25em);
  }
}
</style>
