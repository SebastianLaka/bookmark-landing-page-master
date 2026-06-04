<script setup lang="ts">
import FormButton from '@/components/ReuseableComponents/Button.vue'
import FormIcon from '@/components/ReuseableComponents/Icon.vue'
import ErrorIcon from '@/assets/icons/icon-error.svg'
import { useSiteStore } from '../../stores/site-store'
const siteStore = useSiteStore()
</script>

<template>
  <div class="newsletter-form">
    <form class="input-area" @submit.prevent="siteStore.validateEmail">
      <div class="input-parts" :class="{ 'input-parts--error': siteStore.errMsg }">
        <input
          type="email"
          class="input-parts__email-area"
          v-model="siteStore.email"
          placeholder="Enter your e-mail address"
        />
        <FormIcon
          :src="ErrorIcon"
          class="input-parts__error-icon"
          :class="{ 'show-error': siteStore.errMsg }"
        />
        <p v-show="siteStore.errMsg" class="input-parts__error-msg">
          Whoops, make sure it's an email
        </p>
      </div>

      <FormButton type="submit" class="input-area__button">
        Contact Us
      </FormButton>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;

@media (min-width: $mobile-view) {
  .newsletter-form {
    @include flex-layout($flex-direction: column);
    @include set-gap(1em, 0.5em);
    padding: 0.25em;
    .input-area {
      @include flex-layout($flex-direction: column);
      @include set-gap(1em, 0);
      .input-parts {
        @include position-element($position: relative);
        @include flex-layout($flex-direction: column);
        padding: 0.1em;
        border-radius: 0.4em;
        transition: background-color 0.3s ease;
        &--error {
          background-color: map.get($colors, 'primary-red-400');
        }
        &__email-area {
          padding: 1.05em 1em;
          border-radius: 0.4em;
          border: none;
          min-width: 100%;
          outline: none;
        }
        &__error-icon {
          @include position-element($position: absolute);
          width: 1.5em;
          height: 1.5em;
          right: 0;
          transform: translate(-25%, 40%);
          opacity: 0;
        }
        &__error-msg {
          color: map.get($colors, 'neutral-grey-50');
          font-size: 0.8em;
          font-style: italic;
          padding: 0.5em 1em;
          text-align: left;
        }
        .show-error {
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
          &:hover {
            opacity: 1;
          }
        }
      }

      &__button {
        padding: 0.75em 1em;
        background-color: map.get($colors, 'primary-red-400');
        color: map.get($colors, 'neutral-grey-50');
        border-radius: 0.4em;
        border: 0.175em solid map.get($colors, 'primary-red-400');
        transition:
          background-color 0.3s ease-in-out,
          color 0.3s ease-in-out,
          border-color 0.3s ease-in-out;
        &:hover {
          background-color: map.get($colors, 'neutral-grey-50');
          color: map.get($colors, 'primary-red-400');
          border-color: map.get($colors, 'primary-red-400');
        }
      }
    }
  }
}
@media (min-width: $tablet-view) {
  .newsletter-form {
    .input-area {
      width: 43.75em;
    }
  }
}
@media (min-width: $desktop-small) {
  .newsletter-form {
    .input-area {
      width: 35em;
      flex-direction: row;
      @include set-gap(0, 1em);
      .input-parts {
        &__email-area {
          
          width: 30em;
        }
      }
      &__button {
        align-self: flex-start;
      }
    }
  }
}
</style>
