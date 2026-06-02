<script setup lang="ts">
import ExtentionsHeader from './ExtentionsHeader.vue'
import ExtentionsBrowsers from './ExtentionsBrowsers.vue'
import BrowserIcon from '@/components/ReuseableComponents/Logo.vue'
import BrowserButton from '@/components/ReuseableComponents/Button.vue'
import { ref } from 'vue'
import Chrome from '@/assets/images/logo-chrome.svg'
import Firefox from '@/assets/images/logo-firefox.svg'
import Opera from '@/assets/images/logo-opera.svg'
const browserData = ref([
  {
    id: 1,
    type: 'chrome',
    name: 'Add to chrome',
    content: 'Minimum version 62',
    image: {
      src: Chrome,
      alt: 'Chrome browser logo',
    },
  },
  {
    id: 2,
    type: 'firefox',
    name: 'Add to Firefox',
    content: 'Minimum version 55',
    image: {
      src: Firefox,
      alt: 'Firefox browser logo',
    },
  },
  {
    id: 3,
    type: 'opera',
    name: 'Add to Opera',
    content: 'Minimum version 46',
    image: {
      src: Opera,
      alt: 'Opera browser logo',
    },
  },
])
</script>
<template>
  <section class="extentions-main">
    <ExtentionsHeader>
      <template #extentions-header>
        <h2 class="extentions-header__header">Download the extention</h2>
        <p class="extentions-header__description">
          We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite
          you’d like us to prioritize.
        </p>
      </template>
    </ExtentionsHeader>
    <ExtentionsBrowsers :browsers="browserData">
      <template #browser-card="{ browser }">
        <BrowserIcon v-bind="browser.image" class="browser-card__logo" />
        <div class="browser-content">
          <h2 class="browser-content__header">{{ browser.name }}</h2>
          <p class="browser-content__description">{{ browser.content }}</p>
        </div>
        <BrowserButton class="browser-button">Add & Install Extention</BrowserButton>
      </template>
    </ExtentionsBrowsers>
  </section>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
.extentions-main {
  @include flex-layout($flex-direction: column);
  @include set-gap(2em, 0);
  padding: 0 1.5em;
  .extentions-header {
    &__description {
      max-width: 70ch;
      text-align: center;
      padding: 0 1em;
    }
  }
  .browser-card {
    &__logo {
      width: 3em;
    }
  }
  .browser-content {
    &__header {
      font-size: 1.25rem;
      padding-bottom: 0.3em;
    }
    &__description {
      max-width: 70ch;
    }
  }
  .browser-button {
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
@media (min-width: $desktop-small) {
  .extentions-main {
    @include grid-layout($columns: 12);
    grid-template-rows: repeat(4em, 4em, 4em);
    padding: 0 1.5em 1.5em 1.5em;
    .extentions-header {
      grid-column: 3/11;
      grid-row: 1/1;
    }
  }
}
</style>
