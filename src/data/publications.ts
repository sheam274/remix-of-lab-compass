import type { NewsItem, Publication } from "@/types";

export const publications: Publication[] = [
  {
    id: "pub-01",
    title:
      "Efficient in vitro regeneration of Pennisetum purpureum through somatic embryogenesis",
    authors: ["Habib, A.", "Ahsan, T.", "Akter, S."],
    journal: "Plant Cell, Tissue and Organ Culture",
    year: 2026,
    doi: "10.1007/s11240-026-00001-x",
    type: "journal",
  },
  {
    id: "pub-02",
    title: "CRISPR/Cas9-mediated editing of DREB2A homologs in fodder grasses",
    authors: ["Akter, S.", "Noor, S.", "Habib, A."],
    journal: "Journal of Plant Biotechnology",
    year: 2025,
    doi: "10.1016/j.jpb.2025.104112",
    type: "journal",
  },
  {
    id: "pub-03",
    title: "Homology modelling and docking of plant dehydrin proteins",
    authors: ["Hasan, M.", "Yeasmin, F."],
    journal: "Computational Biology and Chemistry",
    year: 2025,
    doi: "10.1016/j.compbiolchem.2025.108001",
    type: "journal",
  },
  {
    id: "pub-04",
    title: "Karyotype characterisation of Bangladeshi Napier germplasm",
    authors: ["Kabir, I.", "Habib, A."],
    journal: "Cytologia",
    year: 2024,
    type: "journal",
  },
  {
    id: "pub-05",
    title: "Frugal science in the Global South: a decade of Foldscope pedagogy",
    authors: ["Habib, A.", "Rahman, N."],
    journal: "Science Education International",
    year: 2024,
    type: "review",
  },
  {
    id: "pub-06",
    title: "Machine learning for image-based scoring of callus proliferation",
    authors: ["Yeasmin, F.", "Hasan, M."],
    journal: "International Conference on Bioinformatics (Proceedings)",
    year: 2024,
    type: "conference",
  },
];

export const blogPosts: Publication[] = [
  {
    id: "bl-01",
    title: "How we sterilise Napier explants without losing viability",
    authors: ["Tanvir Ahsan"],
    journal: "CGPBL Lab Notes",
    year: 2026,
    type: "blog",
  },
  {
    id: "bl-02",
    title: "A beginner's roadmap to protein docking with open-source tools",
    authors: ["Farhana Yeasmin"],
    journal: "CGPBL Lab Notes",
    year: 2025,
    type: "blog",
  },
  {
    id: "bl-03",
    title: "Ten Foldscope specimens every school lab should try",
    authors: ["Nabila Rahman"],
    journal: "CGPBL Lab Notes",
    year: 2025,
    type: "blog",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "nw-01",
    slug: "phd-call-2026",
    title: "Call for PhD applications: plant genome editing (Spring 2027)",
    excerpt:
      "Two fully funded PhD positions are open in the genome-editing group. Applications close 30 September 2026.",
    category: "admission",
    publishedAt: "2026-08-12",
  },
  {
    id: "nw-02",
    slug: "bioreactor-workshop",
    title: "Hands-on workshop: liquid-culture micropropagation in bioreactors",
    excerpt:
      "A three-day residential workshop covering vessel design, media formulation and contamination control.",
    category: "workshop",
    publishedAt: "2026-07-28",
  },
  {
    id: "nw-03",
    slug: "seminar-systems-biology",
    title: "Seminar: network approaches to abiotic stress signalling",
    excerpt:
      "Invited talk by Prof. Marta Rios (KU Leuven) followed by an open discussion with graduate fellows.",
    category: "seminar",
    publishedAt: "2026-07-10",
  },
  {
    id: "nw-04",
    slug: "most-grant-awarded",
    title: "CGPBL awarded MoST special allocation for fodder biotechnology",
    excerpt:
      "The laboratory secured a new two-year grant to scale transformation of elite Napier lines.",
    category: "news",
    publishedAt: "2026-06-22",
  },
  {
    id: "nw-05",
    slug: "foldscope-camp",
    title: "Foldscope camp reaches 400 students in Savar upazila",
    excerpt:
      "Undergraduate volunteers ran twelve school sessions on microscopy and specimen documentation.",
    category: "news",
    publishedAt: "2026-05-30",
  },
  {
    id: "nw-06",
    slug: "python-cohort-open",
    title: "Registration open: Python for Biologists, cohort 7",
    excerpt:
      "Six-week evening cohort for MS and PhD students, with weekly problem sets on real lab data.",
    category: "workshop",
    publishedAt: "2026-05-14",
  },
];
