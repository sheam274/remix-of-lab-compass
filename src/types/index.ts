export type MemberCategory =
  | "pi"
  | "co-pi"
  | "faculty"
  | "researcher"
  | "phd"
  | "mphil"
  | "ms"
  | "undergrad"
  | "alumni"
  | "staff";

export interface Member {
  id: string;
  slug: string;
  name: string;
  designation: string;
  category: MemberCategory;
  department: string;
  email: string;
  interests: string[];
  initials: string;
  profileUrl?: string;
  joinedYear: number;
}

export interface ResearchArea {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  keywords: string[];
}

export interface Facility {
  id: string;
  slug: string;
  title: string;
  summary: string;
  status: "ongoing" | "completed" | "planned";
  lead: string;
  icon: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  principalInvestigator: string;
  fundingAgency: string;
  startYear: number;
  endYear: number | null;
  status: "ongoing" | "completed";
}

export interface FundingAgency {
  id: string;
  name: string;
  acronym: string;
  country: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  type: "journal" | "review" | "conference" | "blog";
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "news" | "seminar" | "admission" | "workshop";
  publishedAt: string;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
}

export interface LabStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  format: string;
  duration: string;
  icon: string;
}

export interface Collaborator {
  id: string;
  name: string;
  acronym: string;
  country: string;
}

export interface NavItem {
  label: string;
  to?: string;
  children?: { label: string; to: string; hash?: string }[];
}
