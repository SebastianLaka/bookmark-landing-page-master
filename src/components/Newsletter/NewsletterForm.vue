<script setup lang="ts">
import FormButton from '@/components/ReuseableComponents/Button.vue'
import FormIcon from '@/components/ReuseableComponents/Icon.vue'
import ErrorIcon from '@/assets/icons/icon-error.svg'
import { useSiteStore } from '../../stores/site-store'
const siteStore = useSiteStore()
</script>

<template>
  <div class="newsletter-form">
    <form
      class="input-area"
      :class="{ 'input-area--error': siteStore.errMsg }"
      @submit.prevent="siteStore.validateEmail"
    >
      <div class="input-parts">
        <input
          type="email"
          class="input-parts__email-area"
          v-model="siteStore.email"
          placeholder="Enter your e-mail address"
        />
        <FormIcon :src="ErrorIcon" class="input-parts__error-icon" v-show="siteStore.errMsg" />
      </div>
      <p v-show="siteStore.errMsg" class="input-area__error-msg">Whoops, make sure it's an email</p>
    </form>

    <FormButton type="submit" class="newsletter-form__button" @click="siteStore.validateEmail">
      Contact Us
    </FormButton>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;

@media (min-width: $mobile-view) {
  .newsletter-form {
    @include flex-layout($flex-direction: column, $justify-content: center);
    @include set-gap(1em, 0.5em);
    padding: 0.25em;

    .input-area {
      padding: 0.1em;
      border-radius: 0.4em;
      transition: background-color 0.3s ease;
      width: 100%;
      &--error {
        background-color: map.get($colors, 'primary-red-400');

        &__email-area {
          box-shadow: 0 0 0 0.15em map.get($colors, 'primary-red-400');
        }
      }
      .input-parts {
        @include position-element($position: relative);
        @include flex-layout();
        &__email-area {
          padding: 1.05em 1em;
          border-radius: 0.4em;
          border: none;
          min-width: 100%;
          outline: none;
        }
        &__error-icon {
          @include position-element($position: absolute);
          width: 2em;
          height: 2em;
          right: 0;
          transform: translate(-20%, 18%);
        }
      }

      &__error-msg {
        color: map.get($colors, 'neutral-grey-50');
        font-size: 0.8em;
        font-style: italic;
        padding: 0.5em 1em;
        text-align: left;
      }
    }

    &__button {
      padding: 0.75em 1em;
      background-color: map.get($colors, 'primary-red-400');
      color: map.get($colors, 'neutral-grey-50');
      border-radius: 0.4em;
      border: 0.175em solid map.get($colors, 'primary-red-400');
      transition: background-color 0.3s ease-in-out, color .3s ease-in-out, border-color .3s ease-in-out;
      &:hover {
        background-color: map.get($colors, 'neutral-grey-50');
        color: map.get($colors, 'primary-red-400');
        border-color: map.get($colors, 'primary-red-400');
      }
    }
    // border: 0.15em solid map.get($colors, 'primary-red-400');
    // background-color: map.get($colors, 'primary-red-400');
    // padding: 0.5em 2em;
    // font-size: 1rem;
    // margin: 0;
    // width: 9.375em;
    // transition: background-color 0.3s ease-in-out;
    // &:hover {
    //   background-color: map.get($colors, 'neutral-grey-50');
    // }
  }
}

@media (min-width: $desktop-small) {
  .newsletter-form {
    flex-direction: row;
    align-items: flex-start;

    .input-area {
      width: 25%;
    }
  }
}
</style>
