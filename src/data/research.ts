import type { Facility, FundingAgency, Project, ResearchArea } from "@/types";

export const researchAreas: ResearchArea[] = [
  {
    id: "ra-01",
    slug: "plant-cell-tissue-organ-culture",
    title: "Plant Cell, Tissue & Organ Culture",
    description:
      "Micropropagation, somatic embryogenesis and callus-based regeneration protocols for fodder, fruit and medicinal species.",
    icon: "Sprout",
    keywords: ["Micropropagation", "Somatic embryogenesis", "Organogenesis"],
  },
  {
    id: "ra-02",
    slug: "genetic-engineering-genome-editing",
    title: "Genetic Engineering & Genome Editing",
    description:
      "Agrobacterium-mediated transformation and CRISPR/Cas9 editing pipelines to introduce stress tolerance and quality traits.",
    icon: "Dna",
    keywords: ["CRISPR/Cas9", "Transformation", "Vector design"],
  },
  {
    id: "ra-03",
    slug: "cytology-cytogenetics",
    title: "Cytology & Cytogenetics",
    description:
      "Karyotyping, chromosome banding and meiotic analysis to characterise germplasm and confirm ploidy of regenerants.",
    icon: "Microscope",
    keywords: ["Karyotyping", "Ploidy", "Chromosome banding"],
  },
  {
    id: "ra-04",
    slug: "systems-biology-bioinformatics",
    title: "Systems Biology & Bioinformatics",
    description:
      "Transcriptome mining, network reconstruction and homology modelling of plant proteins with molecular docking studies.",
    icon: "Network",
    keywords: ["Transcriptomics", "Homology modelling", "Docking"],
  },
  {
    id: "ra-05",
    slug: "artificial-intelligence-biotechnology",
    title: "Artificial Intelligence in Biotechnology",
    description:
      "Machine-learning models for phenotype prediction, image-based tissue-culture scoring and protein function annotation.",
    icon: "BrainCircuit",
    keywords: ["Machine learning", "Phenomics", "Prediction"],
  },
];

export const facilities: Facility[] = [
  {
    id: "fa-01",
    slug: "napier-transformation-program",
    title: "Napier Transformation Program",
    summary:
      "A dedicated pipeline for genetic transformation of Napier grass to improve biomass yield and digestibility for livestock.",
    status: "ongoing",
    lead: "Tanvir Ahsan",
    icon: "Wheat",
  },
  {
    id: "fa-02",
    slug: "agrobacterium-mediated-transformation",
    title: "Agrobacterium-mediated Transformation",
    summary:
      "Optimised co-cultivation, selection and regeneration workflows with binary vectors for recalcitrant monocots.",
    status: "ongoing",
    lead: "Dr. Sabrina Akter",
    icon: "FlaskConical",
  },
  {
    id: "fa-03",
    slug: "fodder-improvement",
    title: "Fodder Improvement Initiative",
    summary:
      "Field-to-lab breeding and in vitro selection for drought-tolerant, high-protein fodder varieties for Bangladesh.",
    status: "ongoing",
    lead: "Dr. Nusrat Jahan",
    icon: "Leaf",
  },
];

export const labFacilities: Facility[] = [
  {
    id: "lf-01",
    slug: "bioreactor-suite",
    title: "Plant Bioreactor Suite",
    summary:
      "Six temporary-immersion and continuous-flow bioreactors for scaled liquid-culture micropropagation.",
    status: "ongoing",
    lead: "Rakibul Islam",
    icon: "Container",
  },
  {
    id: "lf-02",
    slug: "aseptic-culture-room",
    title: "Aseptic Culture Rooms",
    summary:
      "Climate-controlled growth rooms with laminar flow hoods, LED racks and photoperiod programming.",
    status: "ongoing",
    lead: "Md. Mizanur Rahman",
    icon: "Thermometer",
  },
  {
    id: "lf-03",
    slug: "molecular-biology-bench",
    title: "Molecular Biology Bench",
    summary:
      "Thermal cyclers, gel documentation, spectrophotometry and gradient PCR for genotyping and cloning.",
    status: "ongoing",
    lead: "Dr. Mahmudul Hasan",
    icon: "TestTubes",
  },
  {
    id: "lf-04",
    slug: "cytogenetics-imaging",
    title: "Cytogenetics & Imaging",
    summary:
      "Phase-contrast and fluorescence microscopy with digital karyotyping and Foldscope teaching kits.",
    status: "ongoing",
    lead: "Imran Kabir",
    icon: "Microscope",
  },
  {
    id: "lf-05",
    slug: "computational-lab",
    title: "Computational Biology Lab",
    summary:
      "Workstations for sequence assembly, structure prediction, docking simulations and ML model training.",
    status: "ongoing",
    lead: "Farhana Yeasmin",
    icon: "Cpu",
  },
  {
    id: "lf-06",
    slug: "greenhouse",
    title: "Acclimatisation Greenhouse",
    summary:
      "Hardening facility for ex vitro transfer, containment trials and seed multiplication of regenerants.",
    status: "ongoing",
    lead: "Sumaiya Noor",
    icon: "Sun",
  },
];

export const projects: Project[] = [
  {
    id: "pr-01",
    slug: "napier-biomass",
    title: "Genetic improvement of Napier grass for year-round fodder security",
    summary:
      "Developing transformable Napier lines with enhanced biomass and reduced lignin using tissue culture and gene transfer.",
    principalInvestigator: "Prof. Dr. Ahsan Habib",
    fundingAgency: "Ministry of Science and Technology",
    startYear: 2023,
    endYear: null,
    status: "ongoing",
  },
  {
    id: "pr-02",
    slug: "crispr-stress-tolerance",
    title: "CRISPR/Cas9 editing of drought-responsive transcription factors",
    summary:
      "Knockout and knockdown studies of DREB-family regulators to dissect drought signalling in fodder crops.",
    principalInvestigator: "Dr. Sabrina Akter",
    fundingAgency: "University Grants Commission of Bangladesh",
    startYear: 2024,
    endYear: null,
    status: "ongoing",
  },
  {
    id: "pr-03",
    slug: "ai-tissue-culture-scoring",
    title: "AI-assisted scoring of in vitro regeneration response",
    summary:
      "Computer-vision models that quantify callus proliferation and shoot induction from routine culture photographs.",
    principalInvestigator: "Dr. Mahmudul Hasan",
    fundingAgency: "Jahangirnagar University Research Grant",
    startYear: 2025,
    endYear: null,
    status: "ongoing",
  },
  {
    id: "pr-04",
    slug: "foldscope-outreach",
    title: "Frugal Science: Foldscope-based science literacy in rural schools",
    summary:
      "Training school students and teachers to use paper microscopes for hands-on biology across Savar and beyond.",
    principalInvestigator: "Prof. Dr. Ahsan Habib",
    fundingAgency: "Foldscope Instruments Outreach Program",
    startYear: 2021,
    endYear: 2024,
    status: "completed",
  },
];

export const fundingAgencies: FundingAgency[] = [
  { id: "fu-01", name: "Ministry of Science and Technology", acronym: "MoST", country: "Bangladesh" },
  { id: "fu-02", name: "University Grants Commission", acronym: "UGC", country: "Bangladesh" },
  { id: "fu-03", name: "Bangladesh Academy of Sciences", acronym: "BAS", country: "Bangladesh" },
  { id: "fu-04", name: "Jahangirnagar University Research Grant", acronym: "JU", country: "Bangladesh" },
  { id: "fu-05", name: "TWAS Research Grants", acronym: "TWAS", country: "Italy" },
];
