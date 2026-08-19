import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export function ResearchCard({ area }: { area: ResearchArea }) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-brand-deep/5 text-brand-deep">
          <span className="text-2xl">{area.icon}</span>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{area.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {area.description}
        </p>
        <Link
          to="/"
          className="inline-flex items-center text-sm font-semibold text-brand-deep hover:underline"
        >
          Learn more
          <ArrowRight className="ml-1 size-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
