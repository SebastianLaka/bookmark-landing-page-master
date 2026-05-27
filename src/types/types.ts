export interface Logo {
  src: string
  alt: string
}
export interface Icon {
  src: string
}

export interface NavItem {
  title: string
  id: number
}

export interface Image {
  src: string
  alt: string
}

export interface Tabs {
  id: number
  title: string
  content?: string
}
export interface defaultTab {
  tabs: Tabs[]
  defaultTab?: number
}

export interface Browser {
  id: number
  type: string
  name: string
  content: string
  image: Image
}
export interface Browsers {
  browser: Browser[]
}

export interface AccordionItem {
  id: number
  question: string
  content: string
  isExpanded: boolean
}
export interface AccordionItems {
  accordion: AccordionItem[]
}
