<script setup lang="ts">
import type { Image } from '@/types/types'
const props = defineProps<Image>()
</script>
<template>
  <img :src="props.src" :alt="props.alt" />
</template>
<style lang="scss" scoped>
</style>