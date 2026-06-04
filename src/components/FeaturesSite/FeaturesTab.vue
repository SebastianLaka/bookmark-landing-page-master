<script setup lang="ts">
import { ref } from 'vue'
import type { Tabs } from '@/types/types'
import TabButton from '../ReuseableComponents/Button.vue'
interface Props {
  tabs: Tabs[]
  defaultTab?: number
}
const props = withDefaults(defineProps<Props>(), {
  defaultTab: 0,
})
const activeTab = ref(props.defaultTab)
</script>
<template>
  <div class="tabs">
    <div class="tabs-header">
      <TabButton
        v-for="tab in tabs"
        :key="tab.id"
        :class="[
          'tab-button',
          { active: activeTab === tab.id },
          { 'add-border': activeTab === tab.id },
        ]"
        @click="activeTab = tab.id"
      >
        {{ tab.title }}
      </TabButton>
    </div>
    <div class="tabs-content">
      <TransitionGroup name="tab" tag="div" class="tabs-anim-wrapper">
        <div v-for="tab in tabs" :key="tab.id" v-show="activeTab === tab.id" class="tab-panel">
          <slot :name="`tab-${tab.id}`">
            {{ tab.content }}
          </slot>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
.tab-enter-active,
.tab-leave-active {
  transition:
    opacity 0.15s ease-in,
    transform 0.3s ease-in;
}

.tab-leave-active {
  @include position-element($position: absolute);
}
.tab-enter-from {
  opacity: 0;
  transform: translateX(15px);
}
.tab-leave-to {
  opacity: 0;
  transform: translateX(-15px);
}
.tabs {
  @include flex-layout($flex-direction: column);
  @include set-gap(3em, 0);
  .tabs-header {
    @include flex-layout($justify-content: center, $align-items: center, $flex-direction: column);
    .tab-button {
      @include position-element($position: relative);
      border: none;
      padding: 1em 0;
      width: 12em;
      &::before,
      &::after {
       @include position-element($position: absolute);
        content: '';
        top: 0;
        left: -80%;
        right: -80%;
        background-color: map.get($colors, 'neutral-grey-600');
        height: 0.05em;
      }
      &:last-child::after {
        top: 106%;
      }
    }
    .add-border {
      border-bottom: 0.2em solid map.get($colors, 'primary-red-400');
    }
  }
  .tabs-content {
    @include flex-layout($justify-content: center, $align-items: center);
    text-align: center;
    @include position-element($position: relative);
    width: 100%;
    .tabs-anim-wrapper {
      @include position-element($position: relative);
      width: 100%;
      @include flex-layout($flex-direction: column);
    }
    .tab-panel {
      @include flex-layout($flex-direction: column);
      @include set-gap(6em, 0);
      width: 100%;
    }
  }
}
@media (min-width: $desktop-small) {
  .tabs {
    .tabs-header {
      flex-direction: row;
      .tab-button {
        width: 12em;
        border-bottom: 0.1em solid map.get($colors, 'neutral-grey-600');
        &::before,
        &::after {
          display: none;
        }
      }
      .add-border {
        border-bottom: 0.2em solid map.get($colors, 'primary-red-400');
      }
    }
  }
}
@media (min-width: $desktop-wide) {
  .tabs {
    @include grid-child(2, 12);
    .tabs-header {
      justify-content: center;
    }
    .tabs-content {
      .tabs-anim-wrapper {
        width: 100%;
      }
      .tab-panel {
        @include grid-layout($columns: 2);
        @include set-gap(0, 4em);
        height: 100%;
      }
    }
  }
}
@media (min-width: $desktop-ultra-wide) {
  .tabs {
    @include grid-child(3, 11);
  }
}
</style>
