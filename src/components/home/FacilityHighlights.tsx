import { facilities } from "@/data/research";
import { Icon } from "@/components/common/Icon";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CustomButton } from "@/components/common/CustomButton";

export function FacilityHighlights() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Ongoing Research"
            title="Programs running on the bench right now"
            description="Flagship initiatives connecting tissue culture, gene transfer and field-relevant fodder improvement."
          />
          <CustomButton to="/research" variant="outline">
            All facilities &amp; projects
          </CustomButton>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {facilities.map((facility) => (
            <article
              key={facility.id}
              className="card-lift flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-card"
            >
              <span className="flex size-11 items-center justify-center rounded-md bg-gradient-brand text-brand-foreground">
                <Icon name={facility.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{facility.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {facility.summary}
              </p>
              <dl className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <dt>Lead</dt>
                  <dd className="font-medium text-foreground">{facility.lead}</dd>
                </div>
                <div className="mt-1.5 flex justify-between">
                  <dt>Status</dt>
                  <dd className="font-medium capitalize text-brand">{facility.status}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
