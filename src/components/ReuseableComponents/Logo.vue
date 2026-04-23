<script setup lang="ts">
import type { Logo } from '@/types/types'
const props = defineProps<Logo>()
</script>
<template>
  <img :src="props.src" :alt="props.alt" />
</template>
<style lang="scss" scoped></style>
