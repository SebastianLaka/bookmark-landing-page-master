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
  id: number;
  title: string;
  content?: string; 
}


export interface defaultTab {
  tabs: Tabs[];
  defaultTab?: number; 
}

