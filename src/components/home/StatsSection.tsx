import { labStats } from "@/data/site";
import { Icon } from "@/components/common/Icon";

export function StatsSection() {
  return (
    <section aria-label="Laboratory at a glance" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {labStats.map((stat) => (
          <div key={stat.id} className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-accent text-brand">
              <Icon name={stat.icon} className="size-5" />
            </span>
            <div>
              <p className="text-2xl font-semibold text-brand">
                {stat.value}
                {stat.suffix ?? ""}
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
