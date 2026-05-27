<script setup lang="ts">
import NavMain from '@/components/Nav/NavMain.vue';
import HeaderMain from '@/components/Header/HeaderMain.vue';
import FeaturesMain from '@/components/FeaturesSite/FeaturesMain.vue';
import BrowserExtentions from '@/components/BrowserExtentions/ExtentionsMain.vue';
import AccordionMain from '@/components/Accordion/AccordionMain.vue';
</script>
<template>
    
<NavMain />
<HeaderMain />
<FeaturesMain/>
<BrowserExtentions />
<AccordionMain />
<RouterView />
</template>
