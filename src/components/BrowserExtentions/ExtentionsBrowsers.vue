<script setup lang="ts">
import type { Browser } from '@/types/types'
interface Props {
  browsers: Browser[]
}
const props = defineProps<Props>()
</script>
<template>
  <div
    class="browsers"
    v-for="browser in props.browsers"
    :key="browser.id"
    :class="`browser-card-${browser.type}`"
  >
    <slot name="browser-card" :browser="browser" />
  </div>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
.browsers {
  @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
  @include set-gap(0.75em, 0);
  text-align: center;
}
@media (min-width: $desktop-small){
  .browsers{
    grid-column: 1/13;
  }
  .browser-card-chrome{
    grid-column: 1/5;
    grid-row: 2/2;
  }
  .browser-card-firefox{
    grid-column: 5/9;
    grid-row: 2/2;
    margin-top: 2.5em;
  }
  .browser-card-opera{
    grid-column: 9/13;
    grid-row: 2/2;
    margin-top: 4.5em;
  }
}
@media (min-width: $desktop-wide){
  .browser-card-chrome{
    grid-column: 2/5;
  }
  .browser-card-opera{
    grid-column: 8/13;
  }
}
@media (min-width: $desktop-ultra-wide){
  .browser-card-chrome{
    grid-column: 3/6;
  }
  .browser-card-opera{
    grid-column: 8/11;
  }
}
</style>
