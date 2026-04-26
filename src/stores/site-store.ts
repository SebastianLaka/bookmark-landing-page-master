import { ref, onMounted, onUnmounted } from 'vue'
import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site-store', () => {
  const isMobile = ref(false)
  const isDesktop = ref(false)
  const isOpen = ref(false)

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  const checkScreen = () => {
    const width = window.innerWidth
    if (width <= 992) {
      isMobile.value = true
      isDesktop.value = false
    } else {
      isMobile.value = false
      isDesktop.value = true
      isOpen.value = false
    }
  }
  onMounted(() => {
    checkScreen()
    window.addEventListener('resize', checkScreen)
  })
  onUnmounted(() => {
    checkScreen()
    window.removeEventListener('resize', checkScreen)
  })

  return { isMobile, isOpen, isDesktop, toggleMenu, checkScreen }
})
