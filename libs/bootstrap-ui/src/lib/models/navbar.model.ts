interface NavbarItem {
  label: string;
  routerLink: string;
  title: string;
  isHome: boolean;
  items?: this[];
}

export interface NavbarProps {
  label: string;
  class: string;
  items: NavbarItem[];
}
