<script setup lang="ts">
import { ref } from 'vue'
import Tabs from './FeaturesTab.vue'
import FeaturesTab1 from '@/assets/images/illustration-features-tab-1.svg'
import FeaturesTab2 from '@/assets/images/illustration-features-tab-2.svg'
import FeaturesTab3 from '@/assets/images/illustration-features-tab-3.svg'
import TabContentImage from '@/components/ReuseableComponents/Image.vue'
import TabContentButton from '@/components/ReuseableComponents/Button.vue'
const tabsData = ref([
  { title: 'Simple Bookmarking', id: 0 },
  { title: 'Speedy Searching', id: 1 },
  { title: 'Easy Sharing', id: 2 },
])
</script>
<template>
  <Tabs :tabs="tabsData" :default-tab="0">
    <template #tab-0>
      <div class="background-container">
        <TabContentImage
          :src="FeaturesTab1"
          alt="Tab bookmark image"
          class="background-container__image"
        />
        <div class="background-container__tab-background"></div>
      </div>
      <div class="tab-content">
        <h3 class="tab-content__header">Bookmark in one click</h3>
        <p class="tab-content__description">
          Organize your bookmarks however you like. Our simple drag-and-drop interface gives you
          complete control over how you manage your favourite sites.
        </p>
        <TabContentButton class="tab-content__cta">More info</TabContentButton>
      </div>
    </template>
    <template #tab-1>
      <div class="background-container">
        <TabContentImage
          :src="FeaturesTab2"
          alt="Tab search image"
          class="background-container__image"
        />
        <div class="background-container__tab-background"></div>
      </div>
      <div class="tab-content">
        <h3 class="tab-content__header">Inteligent search</h3>
        <p class="tab-content__description">
          Our powerful search feature will help you find saved sites in no time at all. No need to
          trawl through all of your bookmarks.
        </p>
        <TabContentButton class="tab-content__cta">More info</TabContentButton>
      </div>
    </template>
    <template #tab-2>
      <div class="background-container">
        <TabContentImage
          :src="FeaturesTab3"
          alt="Tab share image"
          class="background-container__image"
        />
        <div class="background-container__tab-background"></div>
      </div>
      <div class="tab-content">
        <h3 class="tab-content__header">Share your bookmarks</h3>
        <p class="tab-content__description">
          Easily share your bookmarks and collections with others. Create a shareable link that you
          can send at the click of a button.
        </p>
        <TabContentButton class="tab-content__cta">More info</TabContentButton>
      </div>
    </template>
  </Tabs>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;

@media (min-width: $mobile-view) {
  .background-container {
    @include flex-layout($justify-content: center, $align-items: center);
    @include position-element($position: relative);
    &__image {
      width: 80%;
      height: 80%;
    }
    &__tab-background {
      @include position-element($position: absolute, $bottom: -3em, $left: 0, $z-index: -100);
      background-color: map.get($colors, 'primary-blue-600');
      width: 250%;
      height: 80%;
      transform: translateX(-70%);
      border-bottom-right-radius: 6em;
    }
  }
  .tab-content {
    @include flex-layout($flex-direction: column);
    @include set-gap(1em, 0);
    padding: 0 1em;
    &__header {
      font-size: 1.5rem;
    }
    &__description {
      max-width: 70ch;
    }
    &__cta {
      color: map.get($colors, 'neutral-grey-50');
      background-color: map.get($colors, 'primary-blue-600');
      border: 0.15em solid map.get($colors, 'neutral-grey-50');
      padding: 0.75em 1em;
      border-radius: 0.4em;
      align-self: center;
      transition:
        color 0.3s ease-in-out,
        border-color 0.3s ease-in-out,
        background-color 0.3s ease-in-out;
      &:hover {
        background-color: map.get($colors, 'neutral-grey-50');
        color: map.get($colors, 'primary-blue-600');
        border-color: map.get($colors, 'primary-blue-600');
      }
    }
  }
}
@media (min-width: $desktop-wide) {
  .background-container {
    &__image {
      width: 100%;
      height: 100%;
    }
  }
  .tab-content {
    @include grid-child(2, 3);
    @include flex-layout($justify-content: center, $align-items: start);
    @include set-gap(1.5em, 0);
    &__description {
      text-align: left;
      max-width: 40ch;
    }
    &__cta {
      align-self: flex-start;
    }
  }
}
</style>
