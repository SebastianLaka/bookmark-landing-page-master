<script setup lang="ts"></script>
<template>
    <div class="newsletter-header">
        <slot name="newsletter-header"/>
    </div>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '@/assets/sass/colors.scss' as *;
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
.newsletter-header{
    @include flex-layout($flex-direction: column, $align-items: center);
    @include set-gap(1em, 0);
    left: 150%;
    letter-spacing: .1em;
}
</style>