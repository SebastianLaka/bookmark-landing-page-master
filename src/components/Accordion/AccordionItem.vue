<script setup lang="ts">
import type { AccordionItems } from '@/types/types'
import AccordionButton from '@/components/ReuseableComponents/Button.vue'
import AccordionIcon from '@/components/ReuseableComponents/Icon.vue'
import ArrowIcon from '@/assets/icons/icon-arrow.svg'
const props = defineProps<AccordionItems>()
</script>
<template>
  <div class="accordion-panel-main">
    <div
      class="accordion-panel"
      v-for="accItem in props.accordion"
      :key="accItem.id"
      :accordion="accItem"
    >
      <div class="accordion-item">
        <AccordionButton class="accordion-button" @click="accItem.isExpanded = !accItem.isExpanded">
          <p class="accordion-button__item">{{ accItem.question }}</p>
          <AccordionIcon
            :src="ArrowIcon"
            class="accordion-button__icon"
            :class="{ rotate: accItem.isExpanded }"
          />
        </AccordionButton>

        <div class="content" :class="{ 'is-open': accItem.isExpanded }">
          <div class="accordion-content">
            <slot>{{ accItem.content }}</slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
.accordion-panel {
  @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
  @include set-gap(0.5em, 0);
  width: 100%;
  margin-bottom: 0.5em;
  .accordion-item {
    width: 100%;
    padding-bottom: 0.5em;
    border-bottom: 0.1em solid map.get($colors, 'neutral-grey-600');
    .accordion-button {
      @include flex-layout($justify-content: space-between, $align-items: center);
      width: 100%;
      border: none;
      padding: 0.5em 0;
      &__item{
        color: map.get($colors, 'neutral-blue-950');
      }
      &__icon {
        width: 1em;
        transition:
          transform 0.3s ease-in-out,
          filter 0.3s ease-in-out;
        &.rotate {
          transform: rotate(180deg);
          filter: invert(44%) sepia(85%) saturate(1229%) hue-rotate(331deg) brightness(103%)
            contrast(98%);
        }
      }
    }
    .content {
      @include grid-layout();
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: grid-template-rows 0.3s ease-in-out;
      &.is-open {
        grid-template-rows: 1fr;
      }
      .accordion-content {
        min-height: 0;
        padding: 0.5em 3em 0 0;
        line-height: 150%;
        max-width: 70ch;
      }
    }
  }
}
@media (min-width: $desktop-small) {
  .accordion-panel-main {
    grid-row: 2/2;
    @include grid-child(3, 11);
    @include flex-layout($flex-direction: column);
    @include set-gap(1em, 0);
  }
}
@media (min-width: $desktop-wide) {
  .accordion-panel-main {
    grid-row: 2/2;
    @include grid-child(4, 10);
  }
}
</style>
