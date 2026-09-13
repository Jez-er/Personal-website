export interface SiteConfig {
  siteUrl: string;
  brandMark: string;
  brandName: string;
  copyright: string;
}

export interface HeroConfig {
  statusText: string;
  headingMain: string;
  headingItalic: string;
  headingEnd: string;
  description: string;
  primaryActionText: string;
  primaryActionHref: string;
  secondaryActionText: string;
  secondaryActionHref: string;
  metaLocation: string;
  metaExperience: string;
  photoLabelTop: string;
  photoLabelBottom: string;
  floatingTitle: string;
  floatingSubtitle: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutExperience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface AboutConfig {
  eyebrow: string;
  headingMain: string;
  headingItalic: string;
  lead: string;
  description: string;
  stats: AboutStat[];
  experiencePeriod: string;
  experiences: AboutExperience[];
}

export interface SkillToolGroup {
  groupName: string;
  tools: string[];
}

export interface SkillCategory {
  no: string;
  title: string;
  iconName: string;
  summary: string;
  description: string;
  toolGroups: SkillToolGroup[];
}

export interface SkillsConfig {
  eyebrow: string;
  headingMain: string;
  headingItalic: string;
  clickPrompt: string;
  categories: SkillCategory[];
}

export interface ProjectItem {
  id: string;
  number: string;
  status: string;
  tag: string;
  title: string;
  description: string;
  isLarge: boolean;
  artClass: string;
  linkUrl: string;
}

export interface ProjectsConfig {
  eyebrow: string;
  headingMain: string;
  headingItalic: string;
  placeholderNote: string;
  projects: ProjectItem[];
}

export interface ConnectLink {
  name: string;
  subtitle: string;
  handle: string;
  url: string;
  iconName: string;
}

export interface ConnectConfig {
  eyebrow: string;
  heading: string;
  links: ConnectLink[];
}

export interface ContactConfig {
  eyebrow: string;
  headingMain: string;
  headingItalic: string;
  headingEnd: string;
  description: string;
  buttonText: string;
  email: string;
}
