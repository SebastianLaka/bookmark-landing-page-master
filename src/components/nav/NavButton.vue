<script setup lang="ts">
import NavButton from '../ReuseableComponents/Button.vue'
import NavIcon from '../ReuseableComponents/Icon.vue'
import HamburgerIcon from '@/assets/icons/icon-hamburger.svg'
import CloseIcon from '@/assets/icons/icon-close.svg'
import { useSiteStore } from '../../stores/site-store'
const siteStore = useSiteStore()
</script>
<template>
  <NavButton class="nav-button" @click="siteStore.toggleMenu" v-show="siteStore.isMobile">
    <NavIcon :src="siteStore.isOpen ? CloseIcon : HamburgerIcon" />
  </NavButton>
</template>
<style lang="scss" scoped>
.nav-button {
  padding: 0.5em;
  border: none;
  background-color: transparent;
}
</style>
