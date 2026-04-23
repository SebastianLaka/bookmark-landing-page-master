import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site-store', () => {
  const isMobile = ref(true);
  return {isMobile}
})
