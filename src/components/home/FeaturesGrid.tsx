import { GraduationCap, HeartHandshake, Lightbulb } from "lucide-react";

const features = [
  {
    id: "fe-01",
    title: "Training-first culture",
    description:
      "Every student runs an independent project with structured mentoring, weekly journal clubs and protocol review.",
    icon: GraduationCap,
  },
  {
    id: "fe-02",
    title: "Frugal, open science",
    description:
      "Low-cost instrumentation and open protocols so partner colleges and schools can reproduce our work.",
    icon: Lightbulb,
  },
  {
    id: "fe-03",
    title: "National partnerships",
    description:
      "Joint programs with BRRI, BARI and BLRI translate laboratory results into field-ready germplasm.",
    icon: HeartHandshake,
  },
];

export function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.id} className="rounded-lg border-l-2 border-brand bg-card p-6 shadow-card">
            <feature.icon className="size-6 text-brand" aria-hidden="true" />
            <h3 className="mt-4 text-base font-semibold text-foreground">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
