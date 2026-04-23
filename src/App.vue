<script setup lang="ts">
import Layout from './layout/Layout.vue';
</script>

<template>
  <Layout />
</template>


<style lang="scss">
@use 'sass:map';
@use '@/assets/sass/reset.scss' as *;
@use '@/assets/sass/fonts.scss' as *;


p{
  font-size: $main-size;
  font-weight: map.get($weights, 'small');
}
</style>
