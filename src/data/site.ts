import type { Collaborator, HeroSlide, LabStat, NavItem, TrainingProgram } from "@/types";
import heroTissueCulture from "@/assets/hero-tissue-culture.jpg";
import heroFrugalScience from "@/assets/hero-frugal-science.jpg";
import heroHomology from "@/assets/hero-homology.jpg";
import heroBioreactor from "@/assets/hero-bioreactor.jpg";

export const siteInfo = {
  shortName: "CGPBL",
  name: "Cell Genetics & Plant Biotechnology Laboratory",
  university: "Jahangirnagar University",
  email: "info@cgpbl.ac.bd",
  phone: "+880 2 7791045",
  emergency: "+880 1711 000 000",
  address:
    "Department of Biotechnology & Genetic Engineering, Jahangirnagar University, Savar, Dhaka 1342, Bangladesh",
};

export const heroSlides: HeroSlide[] = [
  {
    id: "hs-01",
    eyebrow: "Plant Tissue Culture",
    title: "Regenerating crops, one culture vessel at a time",
    description:
      "Two decades of micropropagation and somatic embryogenesis research supporting Bangladesh's fodder and fruit sectors.",
    image: heroTissueCulture,
    primaryCta: { label: "Explore Research", to: "/research" },
    secondaryCta: { label: "Join Our Team", to: "/contact" },
  },
  {
    id: "hs-02",
    eyebrow: "Frugal Science",
    title: "Science that fits in a pocket",
    description:
      "Foldscope-driven outreach bringing microscopy and inquiry-based learning to rural classrooms across Savar.",
    image: heroFrugalScience,
    primaryCta: { label: "Explore Research", to: "/training" },
    secondaryCta: { label: "Join Our Team", to: "/contact" },
  },
  {
    id: "hs-03",
    eyebrow: "Homology Modeling",
    title: "From sequence to structure to function",
    description:
      "Computational pipelines for protein modelling, docking and AI-assisted annotation of plant gene families.",
    image: heroHomology,
    primaryCta: { label: "Explore Research", to: "/research" },
    secondaryCta: { label: "Join Our Team", to: "/contact" },
  },
  {
    id: "hs-04",
    eyebrow: "Laboratory Milestone",
    title: "Bangladesh's growing plant bioreactor capacity",
    description:
      "Six operational bioreactors scaling liquid-culture propagation for elite fodder and horticultural clones.",
    image: heroBioreactor,
    primaryCta: { label: "Explore Research", to: "/research" },
    secondaryCta: { label: "Join Our Team", to: "/contact" },
  },
];

export const labStats: LabStat[] = [
  { id: "st-01", label: "Researchers & Students", value: 42, suffix: "+", icon: "Users" },
  { id: "st-02", label: "Plant Bioreactors", value: 6, icon: "Container" },
  { id: "st-03", label: "Peer-reviewed Publications", value: 128, suffix: "+", icon: "BookOpen" },
  { id: "st-04", label: "Ongoing Projects", value: 9, icon: "FlaskConical" },
];

export const trainingPrograms: TrainingProgram[] = [
  {
    id: "tp-01",
    title: "Python for Biologists",
    description:
      "Hands-on scripting for sequence handling, data wrangling and plotting, taught with real lab datasets.",
    format: "Workshop cohort",
    duration: "6 weeks",
    icon: "Code2",
  },
  {
    id: "tp-02",
    title: "R & Statistics for Life Sciences",
    description:
      "Experimental design, ANOVA for culture experiments and reproducible reporting with R Markdown.",
    format: "Workshop cohort",
    duration: "5 weeks",
    icon: "ChartNoAxesColumn",
  },
  {
    id: "tp-03",
    title: "Research Internships",
    description:
      "Semester-long bench internships in tissue culture, molecular biology or computational biology.",
    format: "In-lab placement",
    duration: "3-6 months",
    icon: "GraduationCap",
  },
  {
    id: "tp-04",
    title: "Seminar Series",
    description:
      "Fortnightly journal clubs and invited talks from national and international plant science groups.",
    format: "Open seminar",
    duration: "Fortnightly",
    icon: "Presentation",
  },
  {
    id: "tp-05",
    title: "Foldscope Outreach",
    description:
      "Frugal-science school programs where students assemble paper microscopes and document local specimens.",
    format: "School outreach",
    duration: "Year-round",
    icon: "Microscope",
  },
];

export const collaborators: Collaborator[] = [
  { id: "co-01", name: "Bangladesh Rice Research Institute", acronym: "BRRI", country: "Bangladesh" },
  { id: "co-02", name: "Bangladesh Agricultural Research Institute", acronym: "BARI", country: "Bangladesh" },
  { id: "co-03", name: "Bangladesh Livestock Research Institute", acronym: "BLRI", country: "Bangladesh" },
  { id: "co-04", name: "KU Leuven Plant Institute", acronym: "KU Leuven", country: "Belgium" },
  { id: "co-05", name: "Foldscope Instruments", acronym: "Foldscope", country: "USA" },
  { id: "co-06", name: "International Rice Research Institute", acronym: "IRRI", country: "Philippines" },
];

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Lab Members",
    to: "/members",
    children: [
      { label: "Principal Investigator", to: "/members" },
      { label: "Co-PIs & Faculties", to: "/members" },
      { label: "Research Associates", to: "/members" },
      { label: "PhD & MPhil Fellows", to: "/members" },
      { label: "MS & Undergraduate Students", to: "/members" },
      { label: "Alumni", to: "/members" },
      { label: "Technical Staff", to: "/members" },
    ],
  },
  {
    label: "Research",
    to: "/research",
    children: [
      { label: "Research Areas", to: "/research" },
      { label: "Lab Facilities", to: "/research" },
      { label: "Bioreactor Program", to: "/research" },
      { label: "Ongoing Projects", to: "/research" },
      { label: "Funding Agencies", to: "/research" },
    ],
  },
  {
    label: "Training & Outreach",
    to: "/training",
    children: [
      { label: "Python & R Programming", to: "/training" },
      { label: "Internships", to: "/training" },
      { label: "Seminars", to: "/training" },
      { label: "Foldscope Outreach", to: "/training" },
    ],
  },
  { label: "Publications & Blog", to: "/publications" },
  { label: "Contact Us", to: "/contact" },
];
