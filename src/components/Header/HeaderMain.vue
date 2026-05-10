<script setup lang="ts">
import HeaderImage from './HeaderImage.vue'
import HeaderContent from './HeaderContent.vue'
import HeaderButton from '../ReuseableComponents/Button.vue'
</script>
<template>
  <header class="header-site">
    <HeaderImage />
    <HeaderContent>
      <template #header-content>
        <div class="header-content">
          <h1 class="header-content__header">A Simple Bookmark Manager</h1>
          <p class="header-content__description">
            A clean and simple interface to organize your favourite websites. Open a new browser tab
            and see your sites load instantly. Try it for free.
          </p>

          <div class="header-cta">
            <HeaderButton class="header-cta__chrome">Get it on Chrome</HeaderButton>
            <HeaderButton class="header-cta__firefox">Get it on Firefox</HeaderButton>
          </div>
        </div>
      </template>
    </HeaderContent>
  </header>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .header-site {
    @include flex-layout($flex-direction: column);
    @include set-gap(2em, 0);
    padding-top: 10em;
    .header-content {
      @include flex-layout($justify-content: center, $align-items: center, $flex-direction: column);
      @include set-gap(1em, 0);
      padding: 0 1em;
      &__header {
        color: map.get($colors, 'neutral-blue-950');
      }
      &__header,
      &__description {
        text-align: center;
      }
    }
    .header-cta {
      align-self: center;
      @include flex-layout();
      @include set-gap(0, 1em);
      &__chrome,
      &__firefox {
        padding: 0.75em 1.5em;
        background-color: map.get($colors, 'primary-blue-600');
        color: map.get($colors, 'neutral-grey-50');
        border: 0.15em solid map.get($colors, 'primary-blue-600');
        border-radius: 0.2em;
        transition:
          background-color 0.3s ease-in-out,
          color 0.3s ease-in-out,
          border-color 0.3s ease-in-out;
        &:hover {
          background-color: map.get($colors, 'neutral-grey-50');
          color: map.get($colors, 'primary-blue-600');
          border-color: map.get($colors, 'primary-blue-600');
        }
      }
      &__firefox {
        background-color: map.get($colors, 'neutral-grey-50');
        color: map.get($colors, 'neutral-grey-600');
        border: 0.15em solid map.get($colors, 'neutral-grey-50');
        transition:
          color 0.3s ease-in-out,
          border 0.3s ease-in-out;
        &:hover {
          border-color: map.get($colors, 'neutral-blue-950');
          color: map.get($colors, 'neutral-blue-950');
        }
      }
    }
  }
}
@media (min-width: $tablet-view) {
  .header-site {
    .header-content {
      &__header {
        width: 20ch;
      }
      &__description {
        max-width: 70ch;
      }
    }
  }
}
@media (min-width: $desktop-small) {
  .header-site {
    @include grid-layout($columns: 12);
    padding: 2em 0 0 1.5em;
    .header-content {
      @include flex-layout($align-items: start);
      @include grid-child(1, 6);
      grid-row: 1/1;
      padding: 0;
      @include set-gap(2em, 0);
      &__header,
      &__description {
        text-align: start;
      }
    }
    .header-cta {
      align-self: flex-start;
      @include grid-child(1, 6);
      @include set-gap(0, 1.5em);
    }
  }
}
@media (min-width: $desktop-wide) {
  .header-site {
    .header-content {
      @include grid-child(2, 6);
    }
  }
}
@media (min-width: $desktop-ultra-wide) {
  .header-site {
    padding: 0 0 0 0.25em;
    .header-content {
      @include grid-child(3, 6);
    }
    .header-cta {
      &__chrome,
      &__firefox {
        font-size: 0.975rem;
      }
    }
  }
}
</style>
