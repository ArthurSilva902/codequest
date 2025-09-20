// Tipos globais da aplicação

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SubjectCard {
  id: string;
  title: string;
  description: string;
  hasIcon: boolean;
  iconSrc?: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  id: string;
  text: string;
  href?: string;
}

export interface SocialIcon {
  id: string;
  src: string;
  alt: string;
  href?: string;
}

export interface LoginOption {
  id: string;
  provider: string;
  iconSrc: string;
  text: string;
  onClick?: () => void;
}

// Props dos componentes
export interface HeaderProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

export interface DescriptionProps {
  className?: string;
  title?: string;
  description?: string;
}

export interface LoginOptionsProps {
  className?: string;
  title?: string;
  description?: string;
  loginOptions?: LoginOption[];
}

export interface SubjectsProps {
  className?: string;
  title?: string;
  description?: string;
  subjects?: SubjectCard[];
}

export interface LoginSectionProps {
  className?: string;
}

export interface RegisterSectionProps {
  className?: string;
}