<script setup lang="ts">
import NavButton from '../ReuseableComponents/Button.vue';
import NavIcon from '../ReuseableComponents/Icon.vue'
import HamburgerIcon from '@/assets/icons/icon-hamburger.svg'
import CloseIcon from '@/assets/icons/icon-close.svg'
</script>
<template>
    <NavButton class="nav-button">
        <NavIcon :src="HamburgerIcon" />
    </NavButton>
</template>
<style lang="scss" scoped>
.nav-button{
    padding: .5em;
    border: none;
}
</style>