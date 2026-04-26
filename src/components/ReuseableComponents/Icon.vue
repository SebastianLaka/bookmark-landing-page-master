<script setup lang="ts">
import type { Icon  } from '@/types/types'
const props = defineProps<Icon>()
</script>
<template>
  <img :src="props.src"/>
</template>
<style lang="scss" scoped>

</style>
