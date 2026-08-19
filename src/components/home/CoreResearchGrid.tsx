import { researchAreas } from "@/data/research";
import { ResearchCard } from "@/components/research/ResearchCard";
import { SectionHeader } from "@/components/common/SectionHeader";

export function CoreResearchGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Core Research Areas"
        title="Five disciplines, one integrated laboratory"
        description="From aseptic culture benches to computational modelling, our groups work across scales — cells, chromosomes, genomes and data."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {researchAreas.map((area) => (
          <ResearchCard key={area.id} area={area} />
        ))}
      </div>
    </section>
  );
}
