<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const ErrorSite = defineAsyncComponent(() => import('@/components/ErrorSite/Site404.vue'))
</script>
<template>
  <Suspense>
    <template #default>
        <ErrorSite />
    </template>
    <template #fallback>
      <div class="loader-placeholder"></div>
    </template>
  </Suspense>
</template>
<style lang="scss" scoped>
.loader-placeholder {
  padding: 5em;
  text-align: center;
  font-weight: 500;
  opacity: 0.7;
}
</style>
