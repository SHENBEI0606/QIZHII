export interface NavItem {
  label: string;
  href: string;
}

export interface Goal {
  title: string;
  description: string;
  icon: string;
}

export interface MechanismStep {
  title: string;
  time?: string;
  content: string[];
  icon: string;
  highlight?: boolean;
}

export interface TrainingMode {
  title: string;
  description: string[];
  icon: string;
}

export interface WorkDirection {
  title: string;
  description: string;
  items: string[];
  icon: string;
  colorClass: string;
}

export interface Project {
  title: string;
  status: string;
  description: string;
  tags: string[];
  imagePlaceholderColor: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}

export interface OrgDepartment {
  title: string;
  subtitle?: string;
  color: string; // Tailwind color name (e.g., 'blue')
  items: string[];
  isIncubator?: boolean; // Special flag for the side branch
}