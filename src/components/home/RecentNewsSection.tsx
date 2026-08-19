import { CalendarDays } from "lucide-react";
import { newsItems } from "@/data/publications";
import { SectionHeader } from "@/components/common/SectionHeader";

const categoryLabels: Record<string, string> = {
  news: "News",
  seminar: "Seminar",
  admission: "Admission",
  workshop: "Workshop",
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export interface RecentNewsSectionProps {
  limit?: number;
}

export function RecentNewsSection({ limit = 6 }: RecentNewsSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Recent News &amp; Seminars"
        title="Announcements from the laboratory"
        description="Calls for applications, workshops, invited talks and outreach reports."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.slice(0, limit).map((item) => (
          <article
            key={item.id}
            className="card-lift flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-card"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground">
                {categoryLabels[item.category]}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="size-3.5" aria-hidden="true" />
                {formatDate(item.publishedAt)}
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
