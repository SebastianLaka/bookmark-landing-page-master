<script setup lang="ts">
import { ref } from 'vue';
import logo from '../../assets/images/logo-bookmark.svg'
import NavLogo from '../ReuseableComponents/Logo.vue';
import { useSiteStore } from '../../stores/site-store';
const siteStore = useSiteStore();
const logoData = ref({
    src: logo,
    alt: 'Bookmark logo'
})

</script>
<template>
    <div class="logo-main">
        <NavLogo :src="logoData.src" :alt="logoData.alt" class="logo-main__nav-logo"/>
    </div>
</template>
<style lang="scss" scoped></style>