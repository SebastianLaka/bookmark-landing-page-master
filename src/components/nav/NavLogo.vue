<script setup lang="ts">
import { ref } from 'vue'
import logo from '../../assets/images/logo-bookmark.svg'
import NavLogo from '../ReuseableComponents/Logo.vue'
import { useSiteStore } from '../../stores/site-store'
const siteStore = useSiteStore()
const logoData = ref({
  src: logo,
  alt: 'Bookmark logo',
})
</script>
<template>
  <div class="logo-main">
    <router-link to="/">
      <NavLogo
        :src="logoData.src"
        :alt="logoData.alt"
        class="logo-main__nav-logo"
        :class="siteStore.isOpen ? 'logo-white' : ''"
      />
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.logo-white {
  filter: invert(1) hue-rotate(180deg) brightness(2);
}
</style>
