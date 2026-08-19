import { collaborators } from "@/data/site";

export function CollaboratorLogos() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Collaborating institutions
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {collaborators.map((collaborator) => (
            <li
              key={collaborator.id}
              title={collaborator.name}
              className="flex flex-col items-center justify-center rounded-md border border-border bg-card px-3 py-5 text-center"
            >
              <span className="text-sm font-semibold text-brand">{collaborator.acronym}</span>
              <span className="mt-1 text-[11px] text-muted-foreground">{collaborator.country}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
