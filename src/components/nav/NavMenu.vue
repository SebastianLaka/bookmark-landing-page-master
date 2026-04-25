<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { NavItem } from '@/types/types'
const props = defineProps<{
  items: NavItem[]
}>()
</script>
<template>
  <ul>
    <li v-for="navItem in props.items" :key="navItem.id" :title="navItem.title">
      <router-link to="/view">
        {{ navItem.title }}
      </router-link>
    </li>
    <slot name="login-cta" />
  </ul>
</template>
<style lang="scss" scoped></style>
