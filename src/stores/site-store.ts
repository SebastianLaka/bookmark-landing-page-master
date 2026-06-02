import { ref, onMounted, onUnmounted } from 'vue'
import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site-store', () => {
  const isMobile = ref(false)
  const isDesktop = ref(false)
  const isOpen = ref(false)
  const email = ref('');
  const errMsg = ref(false);



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

    const accordionContent = ref([
    {
      id: 1,
      question: ' What is Bookmark?',
      content:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
      isExpanded: false,
    },
    {
      id: 2,
      question: 'How can I request a new browser?',
      content:
        'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
      isExpanded: false,
    },
    {
      id: 3,
      question: ' Is there a mobile app?',
      content:
        'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
      isExpanded: false,
    },
    {
      id: 4,
      question: ' What about other Chromium browsers?',
      content:
        ' Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit',
      isExpanded: false,
    },
  ])
  const accordionExpand = () => accordionContent.value.map((accItem) => ({ ...accItem, isExpanded: false }))



  
const validateEmail = () => {
  const regex = /\S+@\S+\.\S+/;
  if (regex.test(email.value)) {
        errMsg.value = false
    } else {
        errMsg.value = true
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

  return {
    isMobile,
    isOpen,
    isDesktop,
    email,
    errMsg,
    accordionContent,
    toggleMenu,
    accordionExpand,
    validateEmail,
    checkScreen,
  }
})
