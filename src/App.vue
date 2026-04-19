<script setup lang="ts">

</script>

<template>
<p>hello</p>
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
