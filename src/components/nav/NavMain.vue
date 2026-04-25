<script setup lang="ts">
import { ref } from 'vue'
import NavLogo from './NavLogo.vue'
import NavButton from './NavButton.vue'
import NavMenu from './NavMenu.vue'

const navList = ref([
  {
    id: 1,
    title: 'Features',
  },
  {
    id: 2,
    title: 'Pricing',
  },
  {
    id: 3,
    title: 'Contact',
  },
])

</script>
<template>
  <nav class="nav-menu">
    <NavLogo />
    <NavMenu :items="navList">
      <template #login-cta>
        <Button>LOGIN</Button>
      </template>
    </NavMenu>
    <NavButton />
  </nav>
</template>
<style lang="scss" scoped>
@use '@/assets/sass/breakpoints.scss' as *;
@use '@/assets/sass/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .nav-menu {
    @include flex-layout($justify-content: space-between);
    padding: 0.5em;
  }
}
</style>
